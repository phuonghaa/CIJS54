import {addUser, getDataFromDocs} from '../utils.js'


//var CryptoJS = require("crypto-js");
const style = `
.register-container{
    width: 100vw;
    height: 100vh;
    background: url('https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg');
    background-repeat: no-repeat;
    background-size : cover;
    display: flex;
    justify-content: flex-end;
}

#register-form{
    width: 30%;
    background: #fff;
    height: 100vh;
    padding: 0px 20px;
}

h1 {
    text-align: center;
    color: #333;
}

button{
    background: #f0a9a0;
    color: #fff;
    padding: 15px 50px;
    border-radius: 5px;
    border: none;
}

`
import {redirect} from '../index.js'

class RegisterScreen extends HTMLElement {
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = `
        <style>
            ${style}
        </style>

        <div class='register-container'>
            <form id ='register-form'>
                <h1>CI Project </h1>
                <input-wrapper id='first-name' type="text" placeholder="First Name"> </input-wrapper>
                <input-wrapper id='last-name' type="text" placeholder="Last Name"> </input-wrapper>
                <input-wrapper id='email' type="text" placeholder="Email"> </input-wrapper>
                <input-wrapper id='password' type="password" placeholder="Password"> </input-wrapper>
                <input-wrapper id='confirm-password' type="password" placeholder="Confirm Password"> </input-wrapper>
                <button>Register</button>
                <a id='redirect'>Already have an account? Login </a>
            </form>
        </div>
        `

        

        const registerForm = this._shadowRoot.getElementById('register-form')
    
        registerForm.addEventListener('submit', async (e) =>{
            e.preventDefault()
            
            let firstName = this._shadowRoot.getElementById('first-name').value;
            let lastName = this._shadowRoot.getElementById('last-name').value;
            let email = this._shadowRoot.getElementById('email').value;
            let password = this._shadowRoot.getElementById('password').value;
            let confirmPassword = this._shadowRoot.getElementById('confirm-password').value;
            let isValid = true

            //validate input
            if(firstName.trim() === ''){
                isValid = false
                this._shadowRoot.getElementById('first-name')
                .setAttribute('error', 'Please fill in this field')
            } else{

            }
            if(lastName.trim() === ''){
                isValid = false
                this._shadowRoot.getElementById('last-name')
                .setAttribute('error', 'Please fill in this field')
            }
            if(email.trim() === ''){
                isValid = false
                this._shadowRoot.getElementById('email')
                .setAttribute('error', 'Please fill in this field')
            }
            if(password.trim() === ''){
                isValid = false
                this._shadowRoot.getElementById('password')
                .setAttribute('error', 'Please fill in this field')
            }
            if(confirmPassword.trim() === ''){
                isValid = false
                this._shadowRoot.getElementById('confirm-password')
                .setAttribute('error', 'Please fill in this field')
            }

            if(password !== confirmPassword){
                this._shadowRoot.getElementById('confirm-password')
                .setAttribute('error', 'Passwor does not match')
            }

            if(!isValid){
                return
            }

            const user = {
                fullName: firstName + " " + lastName,
                email: email,
                password: CryptoJS.MD5(password).toString()
            }
            
            //check for existed email
            const check = await this.checkEmailExist(email)
            if (check){
                alert('Email da duoc dang ki')
            } else {
                firebase.firestore().collection('users').add(user)
                alert('Dang ki thanh cong')
                redirect('login')
            }


            // if (!(firstName && lastName && email && password && confirmPassword)){
            //     alert('Please fill in all the fields!')
            // } else if (password != confirmPassword){
            //     alert('Confirm Password does not match!')
            // } else {
            //     password = CryptoJS.MD5(password).toString();
            //     console.log(password);

            //     addUser(firstName, lastName, email, password);
            //     console.log(`user ${firstName} ${lastName} added sucessfully!`);
            // }
        })
        
        //Already have an account? (click)
        this._shadowRoot.getElementById('redirect')
        .addEventListener('click', () => {
            redirect('login')
        })
        
    }

    setError(id, message) {
        this._shadowRoot.getElementById(id)
        .setAttribute(id, message)
    }

    async checkEmailExist(email){
        const res = await firebase.firestore().collection('users')
        .where('email', '==', email).get()   
        return !res.empty;
    }
}

window.customElements.define('register-screen', RegisterScreen)


