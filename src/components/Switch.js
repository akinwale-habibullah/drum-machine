import React from 'react';

class PowerSwitch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: false
    }

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(e){
    this.setState((state, props) => ({
      status: !state.status
    }));
  }

  render(){
    return (
      <div className="switch-container" style={this.props.containerStyle}>
        <div style={this.props.style}>
          <div>{this.props.label}</div>
          <div className="switch" onClick={this.handleSwitch}>
            {
              this.state.status === true 
              ?<div className="switch-button" style={{justifySelf: "right"}}></div> 
              :<div className="switch-button"></div> 
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PowerSwitch;
