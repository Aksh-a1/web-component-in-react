class MyButton extends HTMLElement {
  static get observedAttributes(){
    return [ 'color', 'component', 'disabled', 'endIcon', 'fullWidth', 'href', 'size', 'startIcon', 'variant', 'text']
  }

  constructor(){
    super()
    //creating shadow root
    const shadow = this.attachShadow({ mode: 'open' })
    const button = document.createElement('button')
    shadow.appendChild(button)
  }

  //Doing the attribute changes in connectedCallback lifecycle because after
  //component gets connected in the DOM then only we can access its attributes
  connectedCallback() {
    const shadow: any = this.shadowRoot
    shadow.replaceChildren()
    //get component attribute value if user has passed it
    const component = this.getAttribute('component')
    //create button element
    const button = document.createElement(component ? component : 'button')
    //creating text inside the button
    const buttonText = this.getAttribute('text')
    button.innerText = buttonText as string
    shadow.appendChild(button)
  }
}

customElements.define('my-button', MyButton)

export {}
