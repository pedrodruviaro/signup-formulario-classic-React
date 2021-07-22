import styled from "styled-components";

const Button = styled.button`
    width: 40%;
    margin: 0 auto;
    color: #fff;
    background-color: ${props => props.application ? "#9146FF": "#F25A70"};
    box-shadow: 5px 5px 0px #000000;
    font-size: 20px;
    padding: .5rem;
    border: none;
    cursor: pointer;
    font-weight: 700;
    position: relative;
    transition: all .3s ease-in-out;

    &:hover, &:focus{
        width: 100%;
    }   
`

export default Button;