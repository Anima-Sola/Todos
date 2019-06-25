import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Header = ({ mainMenuItems, setActiveMainMenuItem }) => {
    
    const styledItems = mainMenuItems.map(
    
        (item) => {
            const { id, title, active, link } = item;
            const isSelectedStyles = active ? {fontWeight: 600, color: '#fff'} : {};
            return (
                <MainMenuItem key={id}>
                    <Link to={link} style={isSelectedStyles} onClick={() => setActiveMainMenuItem(id)}>{title}</Link>
                </MainMenuItem>
            );
        }

    );

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo>
                    <Link to="/">WhatToD&#216;?</Link>
                </Logo>
            </LogoContainer>
            <MainMenuContainer>
                <MainMenuList>
                    {styledItems}
                </MainMenuList>
            </MainMenuContainer>
        </HeaderContainer>
    );
}

const mapStateToProps = (state) => {
    return state;
}

const HeaderContainer = styled.header`
    width: 100%;
    //background-color: #349AED;
    border-bottom: 1px solid #fff;
    height: 60px;
`;

const LogoContainer = styled.div`
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
`;

const Logo = styled.div`
    a {
        text-decoration: none;
        font-family: 'Satisfy', cursive;
        color: #fff;
        font-size: 30px;
    }
`;

const MainMenuContainer = styled.nav`
    width: calc(100% - 200px);
    float: right;
`;

const MainMenuList = styled.ul`
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
`;

const MainMenuItem = styled.li`
    a {
        display: inline-block;
        padding-left: 30px;
        text-align: center;
        font-family: 'Nunito Sans', sans-serif;
        cursor: pointer;
        text-decoration: none;
        color: #fff;

        &:hover {
            //color: #8CC6F6;
            text-decoration: underline;
        }
    }
`;

export default connect(mapStateToProps, actions)(Header);