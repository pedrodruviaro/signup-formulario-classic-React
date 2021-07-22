import styled from "styled-components";

const Title = styled.h1`
    color: #fff;
    font-weight: 400;
    font-size: 35px;
    text-align: center;
    font-family: var(--ff-pressstart);
    text-shadow: 4px 4px black;
    padding: 2rem;

    @media (max-width: 620px){
        font-size: 20px;
    }
`;

export default Title;