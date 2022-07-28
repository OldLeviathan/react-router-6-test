import React from 'react';
import styled from "styled-components";
import {Link, Outlet} from "react-router-dom";

const StyledHeader = styled.header`
  width: 100vw;
  height: 20vh;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Layout = () => {
    return (
        <>
            <StyledHeader>
                <Link to="/">Home</Link>
                <Link to="/something">Something</Link>
                <Link to="/about">About</Link>
            </StyledHeader>
        </>
    );
};

export default Layout;