import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Input = styled.input`
    display: block;
    padding: 12px 16px;
    border-radius: 4px;
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    color: black;
    transition-duration: .1s;

    &:focus {
        border-color: #555;
        outline: none;
        background: #eee;
    }
`;

export default ({ children, ...props}) => {
    const [ value, setValue ] = useState('');
    return (
        <Input
            {...props}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    )
}