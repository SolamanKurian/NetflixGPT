export let checkValidData=(email,password)=>{

let isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//the variable will get true or false accordingly
let isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
if(!isEmailValid) return "Email not valid";
if(!isPasswordValid) return "Password is not valid";
return null;
};