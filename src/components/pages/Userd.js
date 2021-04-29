import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import UserList from '../UserList';
import Spinner from '../Spinner';

const Usered = () => {
    const [user, setUser] = useState([null]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(user);
 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            });
    }, []);
    const userDetail = loading ? <Spinner /> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )
    
    return (
        <>
            <h1>User 정보</h1>
            {userDetail}
        </>
    );
};

export default Usered;