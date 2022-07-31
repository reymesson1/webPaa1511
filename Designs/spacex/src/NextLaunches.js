import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ButtonToggle ,CustomInput,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ButtonDropdown } from 'reactstrap';

class NextLaunchesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            cachingIcon: false
        }
    }

    render(){

        let launches = this.props.launches;

        console.log(launches)

        launches.sort(function(a, b){
            if(a.launch_date_local.toLowerCase() > b.launch_date_local.toLowerCase()) { return -1; }
            if(a.launch_date_local.toLowerCase() < b.launch_date_local.toLowerCase()) { return 1; }
            return 0;
        })

        return(

            <div>
                
                <h1>Upcoming - Next Launches</h1>

                <br/>

                <Table>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Mission</th>
                            <th>Date(UTC)</th>
                            <th>Launchpad</th>
                            </tr>
                        </thead>
                        <tbody>
                        {launches.map(
                            (data, index) => 
                                <tr>
                                    <td>{index+1}</td>                                                    
                                    <td>{data.mission_name}</td>                                                    
                                    <td>{data.launch_date_local}</td>                                                    
                                    <td>{data.launch_site.site_name}</td>                                                    
                                </tr>
                         )}
                        </tbody>
                </Table>
                
            </div>
        );
    }

}

export default NextLaunchesComponent;