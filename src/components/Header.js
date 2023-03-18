import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isNavOpen: false,
//     };
//     this.toggleNav = this.toggleNav.bind(this);
//   }

//   toggleNav() {
//     this.setState({
//       isNavOpen: !this.state.isNavOpen
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Navbar dark expand="md">
//           <div className="container" style={{marginBottom: "50px"}}>
//             <NavbarToggler onClick={this.toggleNav} />
//             <Collapse isOpen={this.state.isNavOpen} navbar >
//               <Nav navbar>
//                 <NavbarBrand className="mr-auto" href="/">喵喵的日誌</NavbarBrand>
//                 <NavItem >
//                   <NavLink className="nav-link me-auto" to='/aboutme'><span className="fa fa-info fa-lg"></span> 關於我</NavLink>
//                 </NavItem>
//               </Nav>
//             </Collapse>
//           </div>
//         </Navbar>
//       </div>
//     );
//   }
// }

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container" style={{ marginBottom: "20px" }}>
      <div className="row">
      <Navbar dark expand="md" {...args}>
        <NavbarBrand className="mr-auto" href="/">
          喵喵的日誌
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span className="fa fa-info fa-lg"></span> 關於我
              </DropdownToggle>
              <DropdownMenu end href="https://github.com/reactstrap/reactstrap">
                <DropdownItem href="/aboutme">個人介紹</DropdownItem>
                <DropdownItem href="/timeline">大事記</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/liaojason2">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    </div>
  );
}

export default Header;
