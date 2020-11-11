import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "../../logo.png";
import "./Header.scss";

const StyledMenu = ((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const Header = ({ switchNet }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [network, setNetwork] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDropdown = (main: boolean) => {
    setNetwork(main);
    switchNet(main);
    setAnchorEl(null);
  };

  return (
    <div className="header sticky-top">
      <div className="layout">
        <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
          <a className="navbar-brand mr-0 mr-md-2" href="https://gnosis.io/" target='_blank' rel="noopener noreferrer">
            <span className="logo">
              <img src={logo} height="38px" className="App-logo" alt="logo" />
            </span>
          </a>
          <div className="navbar-nav-scroll d-none d-md-flex">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" href="https://gnosis.io/">
                  Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://gnosis.io/">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              className="dropdown-btn"
              variant="outlined"
              onClick={handleClick}
            >
              {network ? "Mainnet network" : "Rinkeby network"}
              <ExpandMoreIcon fontSize="small" />
            </Button>
            <StyledMenu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem className="menu-item" onClick={() => toggleDropdown(true)}>
                <ListItemText primary="Mainnet network" />
              </MenuItem>
              <MenuItem className="menu-item" onClick={() => toggleDropdown(false)}>
                <ListItemText primary="Rinkeby network" />
              </MenuItem>
            </StyledMenu>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
