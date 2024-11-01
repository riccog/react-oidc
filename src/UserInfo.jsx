import React from "react";
import axios from 'axios';


const UserInfo = async (token) => {
    console.log("in the userInfo function..");
    const headers = {
        'client_id': 'custos-kgap8hu6ih4hddvlzzlb-10000000', // Your client ID
        'Authorization': `Bearer ${token}`, // Authorization header with the token
    };
    try {
        console.log("before the axios.get()..");

        const response = await axios.get('https://api.playground.usecustos.org/api/v1/user-management/userinfo', { 
            headers: headers,
         });

         console.log("after the axios.get()..");

        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }

}

export default UserInfo;