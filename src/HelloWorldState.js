import React, { Component } from "react";

export default class HelloWorldState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: "Hello world!",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ greeting: "Welcome to React!" });
    }, 3000);
  }

  render() {
    const { greeting } = this.state;

    return <div className="App">{greeting}</div>;
  }
}
