import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    display: inline-block;
    padding: 12px 16px;
    border-radius: 4px;
    margin-right: 8px;
    background: black;
    color: white;
    transition-duration: .1s;
    cursor: pointer;

    &:hover { background: #232323;}
    &:active { background: #333;}
`;

export default ({ children, ...props}) => {
    return (
        <Button
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    )
}