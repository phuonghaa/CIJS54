const style =`
<style>
    .card{
        font-family: sans-serif;
        border: 1px solid #dbdbdb;
        margin-right: 20px;
        color: #363636;
        margin-bottom: 20px;
    }

    .name{
        font-size: 1.5rem;
        font-weight: 600;
    }

    img{
        height: 350px;
        width: 350px;
        object-fit: cover;
        
    }

    .card-body{
        border-top: 1px solid #dbdbdb;
        padding: 20px;
    }
</style>
 `
 
 
 class StudentCard extends HTMLElement{
    constructor(){
        super()
        //khai bao shadow_dom
        this._shadowDom = this.attachShadow({mode: 'open'})
        this.name = this.getAttribute('name')
        this.age = this.getAttribute('age')
        this.hometown = this.getAttribute('hometown')
        this._shadowDom.innerHTML = `
        ${style}
        <div  class='card'>
            <img src='https://i.pinimg.com/736x/10/c9/36/10c9368c0b53386324a4e76b94a654fd.jpg'> </img>
            <div class="card-body">
                <div class="name"> ${this.name} </div>
                <div class="age"> ${this.age} </div>
                <div class="hometown"> ${this.hometown} </div>
            </div>
        </div>
        `
    }
}


window.customElements.define('student-card', StudentCard)