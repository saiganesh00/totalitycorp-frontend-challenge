import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from "../responsive";

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;
    font-weight: 600;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`
    
`
const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Poducts:
                </FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Poducts:
                </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
            
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList