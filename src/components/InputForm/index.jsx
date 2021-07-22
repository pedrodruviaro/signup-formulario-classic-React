import styled from "styled-components";


const InputForm = styled.input`
    width: 100%;
    font-size: 1.15rem;
    padding: .5rem;
    margin-top: .25rem;
    background-color: #fff;
    color: black;
    outline: ${props => props.error === true ? `2px solid var(--fc-error)` : null};
`;

export default InputForm;