import React, { useEffect, useState } from 'react'
import Loader from '../../Utils/Loader/Loader'
import axios from 'axios'
import UserRequestApproval from '../../Utils/UserRequestApproval/UserRequestApproval'

const RequestPanel = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [searchResults, setSearchResults] = useState([])
    const [reload, setReload] = useState(false)

    const searchUser = async () => {
        try {
            setIsLoading(true)
            const config = {
                headers: {
                    'Authorization': `Bearer ${user.data.token}`
                }
            };
            const res = await axios.post(`api/request/get-requests`, { userId: user.data._id }, config);
            console.log(res.data)
            setSearchResults(res.data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error:", error.message);
        }
    };
    useEffect(() => {
        searchUser();
    }, [reload])

    return (
        <div className='text-white'>
            <h1>Pending Requests</h1>
            {isLoading && <Loader />}
            <div>
                {searchResults.length > 0 &&
                    searchResults.map((value, key) => {
                        return <UserRequestApproval name={value.requesterId.name} pic={value.requesterId.pic} userId={value.requesterId._id} requestId={value._id} reload={setReload}/>
                    })
                }
            </div>
        </div>
    )
}

export default RequestPanel