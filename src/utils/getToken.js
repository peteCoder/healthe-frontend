export const getToken = () => {
    
    const access_token = JSON.parse(localStorage.getItem("token")).token !== ""  ? JSON.parse(localStorage.getItem("token")) : localStorage.setItem("token", JSON.stringify({"token":""}));

    const token = access_token ? access_token.token : "";
    return token
}



