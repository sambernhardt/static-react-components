import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinningIcon = styled.i`
  animation: ${spin} 1s infinite linear;
  margin-right: 8px;
`;

export default ({ children, ...props}) => {
    const [ loading, setLoading ] = useState(false);
    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    };

    if (loading) {
        return (
            <Button
                {...props}
            >
                <SpinningIcon className="fa fa-spinner" />
                Loading
            </Button>
        )
    } else {
        return (
            <Button
                dangerouslySetInnerHTML={{ __html: children }}
                {...props}
                onClick={handleClick}
            />
        )
    }
}