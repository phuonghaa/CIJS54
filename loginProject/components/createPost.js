import {getItemLocalStorage} from '../utils.js'

const style = `

form{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

#post-content{
    width: 50vw;
    height: 40vh;
    margin-bottom: 8px;
    box-sizing: border-box;
}

#post-content:focus { 
    outline: none !important;
    border-color: #dbcab4;
}

button {
    height: 5vh;
    width: 50vw;
    border: none;
    background-color: antiquewhite;
    color: #544a4a;
    outline: none;
  
}

button:hover{
    background-color: #dbcab4;
}

`

class CreatePost extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this._shadowDom.innerHTML =`
        <style>
            ${style}
        </style>

        <form id='create-post'>
            <textarea id='post-content' rows='4'></textarea>
            <button>Post</button>
        </form>
        `
        const createPost = this._shadowDom.getElementById('create-post')
    
        createPost.addEventListener('submit', async (e) =>{
            e.preventDefault()
            
            let content = this._shadowDom.getElementById('post-content').value;

            if (content){
                const post = {
                    createdBy: getItemLocalStorage('currentUser').id,
                    createdAt: new Date(),
                    content: content,
                    createdName: getItemLocalStorage('currentUser').name,
                    isShow: true,
                }

                firebase.firestore().collection('posts').add(post);
                alert('Posted Successfully!')
                this._shadowDom.querySelector('#post-content').value=''
            } else {
                alert('Can not leave this post blank!')
            }  
        }) 
        
    }
}

window.customElements.define('create-post', CreatePost)