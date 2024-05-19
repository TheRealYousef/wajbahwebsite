const { default: axios } = require("axios");

const axiosClient=axios.create({
    baseURL:'http://kareemalaa-001-site1.mysitepanel.net/api'
})

const SignIn=(phoneNumber,password)=>axiosClient.post('/UserAuth/login',{
    phoneNumber:phoneNumber,
    password:password,
})

const registerUser=(phoneNumber,email,password,firstName,lastName,role,date,favorites,usedCoupons)=>axiosClient.post('/UserAuth/register',{
    phoneNumber:phoneNumber,
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName,
    role:role,
    birthDate:date,
    favourites:favorites,
    usedCoupones:usedCoupons,
    
});

export default {
    SignIn,
    registerUser,
    
}