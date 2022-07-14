import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import acnhLogo from '../Images/acnhLogo.jpg'
export default NavBar

function NavBar({user, onLogout}){

    

        function handleLogout() {
          fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout(user));
        }
    
       


    return(
    <Navbar bg="light" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand href="/">
            <img src={acnhLogo} alt="acnh-flowers logo" width="200"> 
            </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home/About</Nav.Link>
                {user ? (
            <div>
              <p>Welcome, {user.name}!</p>
              <button onClick={handleLogout}>Logout</button>
              </div>
          ):(
        <Nav.Link href="/login">Login</Nav.Link>
          )}
         <Nav.Link href="/flowers">Flowers</Nav.Link>


                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown> */}

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
    }
