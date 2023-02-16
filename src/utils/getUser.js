import { useState, useEffect } from "react";
import { getToken } from "./getToken";
import { BASE_URL } from "./request";

export const getUser = () => {
    const token = getToken()

    const [user, setUser] = useState({
    });

    useEffect(() => {
        fetch(BASE_URL+"/api/user/me/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.error){
                setUser({})
            } else {
                setUser(data);
            }
            
        })
        .catch(error => console.log(error))
    }, [])

    return user
}


