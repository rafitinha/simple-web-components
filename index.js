//Stencil --> https://www.youtube.com/watch?v=ikmQpalJV0w
//Diretrizes De Acessibilidade ->  https://www.youtube.com/watch?v=3dQuTBjtqb0
//                                 https://www.youtube.com/watch?v=uraRXlkknRo 
// Microservicos no fronte --> https://www.youtube.com/watch?v=EPxTWwJnVxg   *Micro Front

// Bind
// Comunicação entre Copomentes
//Slot

// https://www.youtube.com/watch?v=fZZAt0Sbz5k   --> Fazer meia estrelhia brilha brilha

// https://dev.to/gabrieljm

// Service Workes, Web Works   --> https://github.com/mdn/simple-web-worker

// DOM -> https://www.youtube.com/watch?v=UftSB4DaRU4

// THIS -> https://www.youtube.com/watch?v=GSqR2i-Pq6o

// Class em java Script
class MyComp extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    // Call always attach in dom
    connectedCallback() {
        const template = `
       <style>
        :host { /*Host atributo é o proprio web component*/
            background: #333;
            display: block;
            color: red;
        }
       </style>

       <h1>Hello World</h1>
       
       <p><slot></slot></p>
       `
        this.shadow.innerHTML = template;
    }
}

customElements.define('my-custom-element', MyComp);