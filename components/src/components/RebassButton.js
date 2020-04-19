import React from 'react';
import { Button } from 'rebass';

export default ({ children, ...props }) => {
    return (
        <Button
            mb="8px"
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    )
}