import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ButtonToggle ,CustomInput,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ButtonDropdown } from 'reactstrap';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            cachingIcon: false
        }
    }

    render(){

        return(

            <Navbar style={{'height':'150px','color':'#000000'}}>
                <div className="col-md-3">
                    <div style={{'color':'#ffffff', 'font-size':'36px'}} href="/"> {''} </div>
                    <div style={{'color':'#ef8d09', 'font-size':'38px'}} >

                         <Link to={'/'} style={{ textDecoration: 'none' }} >
                                    <NavLink style={{'color':'#ef8d09', 'font-size':'38px'}} >SpaceX</NavLink>
                        </Link>

                    </div>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <h1>&nbsp;</h1>
                    </div>
                    <div className="row">
                        <Nav>
                            <NavItem>
                                <Link to={'/'} style={{ textDecoration: 'none' }}>                                
                                    <NavLink style={{'color':'#ef8d09','text-decoration':'none !important'}}>Browse</NavLink>
                                </Link>
                                {/* <NavLink style={{'color':'#ef8d09'}} href="/">Browse</NavLink> */}
                            </NavItem>
                            <NavItem>
                                {/* <Link to={'/'} > */}
                                    <NavLink style={{'color':'#ef8d09'}} >|</NavLink>
                                {/* </Link> */}
                            </NavItem>
                            <NavItem>
                                <Link to={'/countdown'} style={{ textDecoration: 'none' }} >
                                    <NavLink style={{'color':'#aaafaf'}} >Products</NavLink>
                                    {/* <NavLink style={{'color':'#aaafaf'}} href="/product/">Products</NavLink> */}
                                </Link>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
                
            </Navbar>
        );
    }

}

export default NavbarComponent;