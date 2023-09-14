
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useNavigate } from 'react-router-dom'
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    cursor: pointer;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`
const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={()=>navigate('/product-list')}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem