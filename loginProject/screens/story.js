const style = `

`

class StoryScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this._shadowDom.innerHTML= `
        <style>
            ${style}
        </style>
        
        <story-header></story-header>
        <create-post></create-post>
        
        `
    }

}

window.customElements.define('story-screen', StoryScreen)
