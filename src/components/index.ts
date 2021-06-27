declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-button': MyButtonProps
    }
  }
}

interface MyButtonProps {
  text: string
  component?: string
}

export {}