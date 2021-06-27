class MyButton extends HTMLElement {
  static get observedAttributes(){
    return [ 'color', 'component', 'disabled', 'endIcon', 'fullWidth', 'href', 'size', 'startIcon', 'variant', 'text']
  }
  constructor(){
    super()
    //creating shadow root
    const shadow = this.attachShadow({ mode: 'closed' })
    //get component attribute value if user has passed it
    const component = this.getAttribute('component')
    //create button element
    const button = document.createElement(component ? component : 'button')
    //creating text inside the button
    const buttonText = this.getAttribute('data-text')
    console.log(buttonText)
    button.innerText = buttonText as string
    shadow.appendChild(button)
  }
}

customElements.define('my-button', MyButton)

export {}
