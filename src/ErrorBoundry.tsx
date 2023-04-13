import React, { Component, ReactNode } from "react"

interface Props {
  fallback: ReactNode
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundry extends Component<Props, State> {
  state = { hasError: false, error: null }

  static getDeliveredStateFromError(error: any) {
    return {
      hasError: true,
      error,
    }
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundry
