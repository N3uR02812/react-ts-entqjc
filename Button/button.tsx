import * as React from 'react';

class Button extends React.Component {
  //Props eingabe
  //State current values state
  public text = 'Hallo';

  constructor(props) {
    super(props);

    this.state = {
      name: 'Welt',
      count: 0,
    };

    this.onClick = this.onClick.bind(this);

    setTimeout(() => {
      this.setState({
        name: 'BAM',
      });
      //this.state = { name: 'Ä' };
      //this.text = 'Ö';
    }, 3000);
  }

  onClick() {
    let count = this.state.count + 1;
    this.setState({
      name: 'clicked',
      count: count,
    });
  }

  render() {
    return (
      <div className="app-button">
        <h1>{this.state.name}</h1>
        <p>{this.props.value}</p>
        <p>{this.state.count}</p>
        <p>{this.text}</p>
        <button onClick={this.onClick}>Click me</button>
      </div>
    );
  }
}

export default Button;
