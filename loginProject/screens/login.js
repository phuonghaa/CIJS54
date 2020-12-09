import {addUser, getDataFromDocs} from '../utils.js'

const style = `
.login-container{
    width: 100vw;
    height: 100vh;
    background: url('https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg');
    background-repeat: no-repeat;
    background-size : cover;
    display: flex;
    justify-content: flex-end;
}

#login-form{
    display: flex;
    flex-direction: column;
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
    margin-bottom: 20px;
}

a{
    cursor: pointer;
    color: gray;
    
}

`
import {redirect} from '../index.js'

class LoginScreen extends HTMLElement {
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = `
        <style>
            ${style}
        </style>

        <div class='login-container'>
            <form id ='login-form'>
                <h1>CI Project Login </h1>
                <input-wrapper id='email' type="text" placeholder="Email"> </input-wrapper>
                <input-wrapper id='password' type="password" placeholder="Password"> </input-wrapper>
                <button>Login</button>
                <a id='redirect'>Do not have an account? Register </a>
            </form>
        </div>
        `

        

        const loginForm = this._shadowRoot.getElementById('login-form')
    
        loginForm.addEventListener('submit', async (e) =>{
            e.preventDefault()
            
            let email = this._shadowRoot.getElementById('email').value;
            let password = this._shadowRoot.getElementById('password').value;
            let isValid = true

            //validate input
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

            if(!isValid){
                return
            }
            
            //check password
            this.checkEmailExist(email).then(user => {
                if (user[0] === undefined){
                    this._shadowRoot.getElementById('email')
                    .setAttribute('error', 'Incorrect email')
                }
                else if (CryptoJS.MD5(password).toString() === user[0].password){
                    alert('login sucess')
                }else{
                    this._shadowRoot.getElementById('password')
                    .setAttribute('error', 'Incorrect password')
                }  
            })
        })
        
        //Already have an account? (click)
        this._shadowRoot.getElementById('redirect')
        .addEventListener('click', () => {
            redirect('register')
        })
        
    }

    setError(id, message) {
        this._shadowRoot.getElementById(id)
        .setAttribute(id, message)
    }

    async checkEmailExist(email){
        const res = await firebase.firestore().collection('users')
        .where('email', '==', email).get()   
        let data = await getDataFromDocs(res);
        return data
    }
}

window.customElements.define('login-screen', LoginScreen)


