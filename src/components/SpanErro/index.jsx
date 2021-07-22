import React from 'react'
import styled from 'styled-components'

const SpanErroStyled = styled.span`
    font-size: .9rem;
    color: var(--fc-error);
`

export default function SpanErro(props) {
    return (
        <SpanErroStyled>
            {props.children}
        </SpanErroStyled>
    )
}
