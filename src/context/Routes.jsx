import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getToken";

export const ProtectedRoute = ({children}) => {
    const navigation = useNavigate();
    
    const token = getToken();

    useEffect(() => {
        if (!token) {
            return navigation('/login')
        }
    }, [])

    return children
}

export const UnProtectedRoute = ({children}) => {
    const navigation = useNavigate();

    const token = getToken();

    useEffect(() => {
        if (token) {
            return navigation('/')
        }
    }, [])

    
    return children
}