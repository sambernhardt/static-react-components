import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: black;
    margin-bottom: 8px;
    ${({inlineStyles}) => inlineStyles}
`;

export default ({ children, inlineStyles, ...props}) => {
    return (
        <Label
            inlineStyles={inlineStyles}
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    )
}