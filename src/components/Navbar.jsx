import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive'
import {  useNavigate } from 'react-router-dom'

const Container = styled.div `
    height: 60px;
    ${mobile({ height: "50px" })}

`;
const Wrapper = styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px
`
const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "50px" })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
    padding: 0 10px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const Navbar = () => {
    const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <Search style={{color: "gray", fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Center>
            <Logo onClick={()=>navigate('/')}>
                SHOPSY
            </Logo>
        </Center>
        <Right>
            <MenuItem onClick={()=>navigate('/register')}>Register</MenuItem>
            <MenuItem onClick={()=>navigate('/login')}>Login</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon onClick={()=>navigate('/cart')}/>
                </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
