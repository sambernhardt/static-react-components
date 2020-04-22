import React from 'react';
import { Button } from 'rebass';

export default ({ children, ...props }) => {
    return (
        <Button
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    )
}