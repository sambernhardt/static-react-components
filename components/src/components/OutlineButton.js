import React from 'react';
import styled from 'styled-components';

const OutlineButton = styled.div`
    display: inline-block;
    padding: 12px 16px;
    border-radius: 4px;
    color: black;
    border: 1px solid #cecece;
    transition-duration: .1s;
    cursor: pointer;
    margin-right: 8px;

    &:hover { background: #cecece;}
    &:active { background: #bbb;}

    i {
        margin-right: 8px;
    }
`;

export default ({ children, ...props }) => {
    return (
        <OutlineButton
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    )
}