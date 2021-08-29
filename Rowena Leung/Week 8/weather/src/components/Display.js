import React, {Component} from 'react';

class  Display extends Component {
  render(){
    return(
      <div>
      <h3>Astronomy Picture of the Day:</h3>
        
      <img src={this.props.image} key={this.props.image} alt="Copyright NASA"/ >
      <p>{this.props.explanation}</p>
      </div>
    )
  }
}

export default Display;
