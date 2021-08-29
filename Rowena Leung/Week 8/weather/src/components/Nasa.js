import React, {Component} from 'react';
import axios from 'axios';

class Nasa extends Component{
  constructor(){
    super();
    this.state = {
      images: [],
      explanation: '',
      title: ''
    }
    this.getASOP = this.getASOP.bind(this)
  }
  getASOP(data) {
    const spaceURL = "https://api.nasa.gov/planetary/apod?api_key=flcdOfNRdmdrqXL650S43svQRnZA3UBU9Q2VAQkn"
    axios(spaceURL).then((response) => {
      console.log(response)
      this.setState({ image: response.data.hdurl, explanation: response.data.explanation, title: response.data.title})
    })
  }

  componentDidMount(){ //to get image on screen
    this.getASOP();
  }

render(){
  return(
    <div>
    <h3>Astronomy Picture of the Day:</h3>
    <h5>{this.state.title}</h5>
    <img src={this.state.image} key={this.state.image} width="500px" alt="Copyright NASA"/ >
    <p> Explanation: <br/>
    <small>{this.state.explanation}</small></p>
    </div>
    )
  };
}


export default Nasa;
