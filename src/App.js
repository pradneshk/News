import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  
  api = process.env.REACT_APP_API_KEY
  // API ="fcd3533582ed4992acd8be6c88696fe4"

  static propTypes = {

  }

  state = {
    progress : 0
  }

  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        height = {4}
        color='#f11946'
        progress={this.state.progress}                
        />
        <NavBar/>
       
        <Switch>
          <Route exact path="/"><News key="general" setProgress={this.setProgress} api={this.api} pagesize={5} country='in' category="general"/></Route>   
          <Route exact path="/business"><News key="business" setProgress={this.setProgress} api={this.api} pagesize={5} country='in' category="business"/></Route> 
          <Route exact path="/entertainment"><News key="entertainment" setProgress={this.setProgress} api={this.api} pagesize={5} country='in' category="entertainment"/></Route> 
          <Route exact path="/general"><News key="general" pagesize={5} setProgress={this.setProgress} api={this.api} country='in' category="general"/></Route>         
          <Route exact path="/health"><News key="health'"pagesize={5} setProgress={this.setProgress} api={this.api} country='in' category="health"/></Route> 
          <Route exact path="/science"><News key="science" pagesize={5} setProgress={this.setProgress} api={this.api} country='in' category="science"/></Route> 
          <Route exact path="/sports"><News key="sports'"pagesize={5} setProgress={this.setProgress} api={this.api} country='in' category="sports"/></Route> 
          <Route exact path="/technology"><News key="technolgy" setProgress={this.setProgress} pagesize={5} api={this.api} country='in' category="technology"/></Route> 
        </Switch>
        
        </Router>
      </div>
    )
  }
}

export default App
