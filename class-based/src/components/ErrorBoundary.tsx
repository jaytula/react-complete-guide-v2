import { Component } from "react";

class ErrorBoundary extends Component<{}, {hasError: boolean}> {
  constructor(props: {}, state: {hasError: boolean}) {
    super(props, state);
    this.state = {hasError: false}
  }
  componentDidCatch(error: Error) {
    console.log(error);
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <p>Something went wrong!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;