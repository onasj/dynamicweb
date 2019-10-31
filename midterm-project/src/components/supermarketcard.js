import React from 'react';

function SuperCard({superContent}) {
    return (
        <div>
            <p>{superContent.title}</p>
            <p>{superContent.price}</p>
        </div>
    )
};

export default SuperCard;