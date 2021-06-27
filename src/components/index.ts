declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-button': MyButtonProps
    }
  }
}

interface MyButtonProps {
  'data-text': string
}

export {}