import React, {Component} from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const C1 = {
      padding: '2%',
      maxWidth: '41%',
      border: '2px solid rgba(255,255,10,.5)',
      overflow: 'hidden',
      wordBreak: 'break-word',
      borderRadius: '4px',
      backgroundColor: 'rgba(255,255,0,.5)',
      color: 'purple',
    };
    const C2 = {
      padding: '2%',
      maxWidth: '41%',
      minWidth: '41%',
      border: '2px solid rgba(0,0,105,.5)',
      overflow: 'hidden',
      wordBreak: 'break-word',
      borderRadius: '4px',
      backgroundColor: 'rgba(0,0,105)',
      color: '#fdffd5',
      marginLeft: '60%',
    };

    return (
      <div id="DispDiv" className="container-fluid">
        {this.props.words.map((word) => (
          <h6 style={word.user === this.props.use ? C2 : C1}><sup>{word.user === this.props.use ? 'you' : word.user}</sup>{word.message}</h6>
        ))}
      </div>
    );
  }
}

export default Display;
