import React, { Component } from 'react'
import { 
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    Collapse, 
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        this.setState({
            isOpen: !this.state.isOpen
          });
    }

    render() {
        return (
            <div>
        <Navbar className="navbar-header" expand="md">
          <NavbarBrand href="/">Lorem Ipsum</NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <i className="fas fa-bars"></i>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="header-menu">
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/restaurant">
                                        Restaurant
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/rooms">
                                        Rooms
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown className="nav-dropdown" nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Apps
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/apps/todo">
                                                ToDo
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/apps/weather">
                                                Weather
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to="/apps/quiz">
                                                Quiz
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/readme">
                                        ReadMe
                                    </NavLink>
                                </NavItem>
                            </Nav>
          </Collapse>
        </Navbar>
      </div>
        );
    }
}


export default Header;