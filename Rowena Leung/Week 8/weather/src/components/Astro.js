import React, {Component} from 'react';

import Weather from './Weather'
import Nasa from './Nasa'

class Astro extends Component{
render(){
  return(
    <div>
    <h1>Daily Meterology</h1>
    <Weather />
    <Nasa />
    </div>
  )
}
}

export default Astro;
