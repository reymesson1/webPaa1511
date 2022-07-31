import logo from './logo.svg';
import './App.css';
import React, { useState, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import  NavbarComponent  from './NavbarComponent'; 
import  CountDownComponent  from './CountDown'; 
import  NextLaunchesComponent  from './NextLaunches'; 
import { Switch, Route, Routes, Redirect, withRouter } from 'react-router-dom';

let API_URL = "https://api.spacexdata.com/v3"; 

const token = "token";

const API_HEADERS = {

  'Content-Type':'application/json',
  Authentication: 'any-string-you-like'
}


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        URLExternal: 'https://api.spacexdata.com/v3', 
        // URLExternal: 'http://192.168.100.57:8085', 
        // URLExternal: 'http://143.198.171.44:8085', 
          // URLExternal: 'http://localhost:8085',
          showModal: false,
          newest: true,
          filterText: "",
          image: "",
          launches: [],
          images: [],
          orders:[{
            id : "0001",
            orderDetails:[],
            subtotal: "0.00",
            total: "0.00"
          }]
        }

    }

    //Todo metodo que actualice el products debe estar App.js
    componentDidMount(){

      fetch(API_URL+'/launches')
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                launches: responseData
            })
        })
        .catch((error)=>{
            console.log('Error fetching and parsing data', error);
        })
    }

    render(){

      return(

        <div className="container">
          <BrowserRouter>
            <NavbarComponent/>


              <Route path="/" exact element= {<NextLaunchesComponent
                    launches={this.state.launches}
                />}
              />

              <Route 
                path="/countdown/:id" 
                location={this.props.location} 
                render={({ 
                    location, 
                    match 
                }) => (
                    <CountDownComponent match={match} 
                  />
              )} 
          />


          </BrowserRouter>
        </div>

      );
    }
}

export default App;
