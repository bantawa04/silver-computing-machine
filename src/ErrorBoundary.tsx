import React from "react"
class ErrorBoundry extends React.Component {
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
