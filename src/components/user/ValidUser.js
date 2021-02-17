export default function ValidUser(){

    const accessToken=localStorage.getItem('accessToken')
    const userID=localStorage.getItem('userId')
    const isLoggedIn= localStorage.getItem('isLoggedIn')

    console.log(accessToken)
    console.log(userID)
    console.log(isLoggedIn)

    if(accessToken==null || userID==null || isLoggedIn==null)
    return false

    if(accessToken!=isLoggedIn)
    return false


    return true
}