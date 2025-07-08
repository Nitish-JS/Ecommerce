import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

// using flex 1 so that all the components have equal width
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  /* ${mobile({ width: "50px" })} */
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  text-decoration: none;
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
  color: ${(props) => props.theme.text};
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          
        </Left>
        <Center>
          <Logo>VFY.</Logo>
        </Center>
        <Right>
          {!user ? (
            <>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/register">
                <Menu>REGISTER</Menu>
              </Link>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/login">
                <Menu>SIGN IN</Menu>
              </Link>
            </>
          ) : (
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              <Menu
                onClick={() => {
                  localStorage.clear();
                  window.location.replace("/");
                }}
              >
                SIGN OUT
              </Menu>
            </Link>
          )}

          <ThemeToggle onClick={toggleTheme}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </ThemeToggle>

          <Menu>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
