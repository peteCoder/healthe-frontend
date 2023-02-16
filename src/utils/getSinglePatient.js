import { useState, useEffect } from "react";
import { BASE_URL } from "./request";

export const getSinglePatient = (id) => {
    const access_token = localStorage.getItem("token") !== null || localStorage.getItem("token") !== 'undefined' ? JSON.parse(localStorage.getItem("token")) : localStorage.setItem("token", JSON.stringify({"token":""}));

    const token = access_token.token;

    const [patient, setPatient] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "api/patient/" + String(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPatient(data);
        })
        .catch(error => console.log(error))
    }, [])

    return patient
}