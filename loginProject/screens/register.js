import {addUser} from '../utils.js'

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
}

h1 {
    text-align: center;
    color: #333;
}

`

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
            </form>
        </div>
        `

        

        const registerForm = this._shadowRoot.getElementById('register-form')
        registerForm.addEventListener('submit', (e) =>{
            e.preventDefault()
            
            let firstName = this._shadowRoot.getElementById('first-name').value;
            let lastName = this._shadowRoot.getElementById('last-name').value;
            let email = this._shadowRoot.getElementById('email').value;
            let password = this._shadowRoot.getElementById('password').value;
            let confirmPassword = this._shadowRoot.getElementById('confirm-password').value;
            

            if (!(firstName && lastName && email && password && confirmPassword)){
                alert('Please fill in all the fields!')
            } else if (password != confirmPassword){
                alert('Confirm Password does not match!')
            } else {
                password = CryptoJS.MD5(password).toString();
                console.log(password);

                addUser(firstName, lastName, email, password);
                console.log(`user ${firstName} ${lastName} added sucessfully!`);
            }
        })
    }
}

window.customElements.define('register-screen', RegisterScreen)


