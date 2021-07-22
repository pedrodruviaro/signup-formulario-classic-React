import styled from "styled-components";
import Box from "../Box";

const FormSignup = styled(Box).attrs({as: 'form'})`
    width: 550px;
    height: 375px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (max-width: 620px){
        width: 350px;
        margin: 0 auto;
    }
`;

export default FormSignup