import React from 'react';

class PowerSwitch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'off'
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
      <div className="switch-container" style={{paddingLeft: "20%"}}>
        <div style={{alignItems: "center",display: "grid", gridTemplateColumns: "0.8fr 1.2fr", height: "100%", justifyItems: "right"}}>
          <div>Power</div>
          <div className="switch" onClick={this.handleSwitch}>
            {this.state.status === true ? <div className="switch-button" style={{justifySelf: "right"}}></div> : <div className="switch-button"></div> }
          </div>
        </div>
      </div>
    );
  }
}

export default PowerSwitch;
