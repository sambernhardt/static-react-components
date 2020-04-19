import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
    margin-right: 4px;
`;

export default ({ children, className, icon }) => {
    return (
        <Icon
            className={className + " " + "fa fa-" + icon}
            dangerouslySetInnerHTML={{ __html: children }}
        />
    )
}