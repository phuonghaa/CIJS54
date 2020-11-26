 class CardComponent extends HTMLElement{
    constructor(){
        super()
        //khai bao shadow_dom
        this._shadowDom = this.attachShadow({mode: 'open'})
        this._shadowDom.innerHTML = `
        <div>
            <h1>This is my component </h1>
        </div>
        `
    }
}


window.customElements.define('card-container', CardComponent)
