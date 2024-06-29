import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Login } from "./Login";
import { Register } from "./Register";
import image from "../../assets/pfp.jpg";
import "./index.css";
//yuze 

import {getFavorites} from "../../assets/favoriteData";
import PopWindow from '../popWindow/popWindow';
import {setLogin, getLogin} from '../../isLogin';
//

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentForm, setCurrentForm] = useState("login");
  const [favouritesDropdownOpen, setFavouritesDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  //yuze
  const [favourites, setFavourites] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [clicked, setClicked] = useState(false);
  
  
  //yuze
  useEffect(() => {
    setFavourites(getFavorites());
  })

  const handleClose = () => {setClicked(false);}
  const handleClicked = (item) => {
    setSelectedItem(item);
    setClicked(true);
  };
  const toggleForm = (formName) => {
    setCurrentForm(formName);
    // Close the login dropdown when switching forms
    setLoginDropdownOpen(false);
  };


   //yuze************
   const renderFavouritesDropdown = () => {
    if (favourites.length === 0) {
      return <NavDropdown.Item>No Favourite</NavDropdown.Item>;
    }

    return favourites.map((favourite) => (
      <NavDropdown.Item key={favourite.id} onClick={() => handleClicked(favourite)}>
        {favourite.name}
      </NavDropdown.Item>
    ));
  };
  //yuze************


  // Handle login action
  const onLogin = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
    console.log("User logged in:", isLoggedIn);
    setFavouritesDropdownOpen(false);
    setLoginDropdownOpen(false);
    //
    setLogin(true);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="mx-3">
        Website Name
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end login-dropdown"
      >
        <Nav>
          {!isLoggedIn ? (
            // Display login button if not logged in
            <NavDropdown
              align="end"
              title="Login"
              id="login-dropdown"
              className="mx-3"
              show={loginDropdownOpen}
              onToggle={(isOpen) => setLoginDropdownOpen(isOpen)}
            >
              <div className="login-and-register">
                {currentForm === "login" ? (
                  <Login onFormSwitch={toggleForm} onLogin={onLogin} />
                ) : (
                  <Register onFormSwitch={toggleForm} onLogin={onLogin} />
                )}
              </div>
            </NavDropdown>
          ) : (
            // Display other buttons if logged in
            <>
                <PopWindow show={clicked} item={selectedItem} onHide={handleClose}></PopWindow>
              <NavDropdown
                title="Favourites"
                id="favourites-dropdown"
                align="end"
                show={favouritesDropdownOpen}
                onToggle={(isOpen) => setFavouritesDropdownOpen(isOpen)}
              >
                 {renderFavouritesDropdown()}
                {/* Add more items as needed */}
              </NavDropdown>
              <NavDropdown title="Settings" id="settings-dropdown" align="end">
                {/* Add items for the Settings dropdown */}
                <NavDropdown.Item>Setting 1</NavDropdown.Item>
                <NavDropdown.Item>Setting 2</NavDropdown.Item>{" "}
              </NavDropdown>
              {/* Move logout button away from settings dropdown */}
              <Nav.Link href="#profile" className="mx-3">
                Profile
              </Nav.Link>
              <NavDropdown id="profile-dropdown" align="end">
                <div className="profile-dropdown-content">
                  <Image
                    src={image}
                    alt="Profile"
                    roundedCircle
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                  />

                  {/* Hardcoded profile details */}
                  <div>
                    <strong>John Doe</strong>
                  </div>
                  <div>email@example.com</div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
