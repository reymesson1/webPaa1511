import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ButtonToggle ,CustomInput,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ButtonDropdown } from 'reactstrap';

class CountDownComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            cachingIcon: false
        }
    }

    componentDidMount(){

        console.log(this.props.match.params.id);
    }

    render(){

        return(

            <div>
                <h1>CountDown</h1>
                <div className='row'>
                    <h1>{this.props.match.params.id}</h1>
                </div>
            </div>
        );
    }

}

export default CountDownComponent;