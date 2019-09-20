import React from 'react';

export default function TextBlock({type, data}) {
    if(type === "p") {
        return <p>{data}</p>
    } else if (type === "h2") {
        return <h2>{data}</h2>
    } else {
        return <p>{data}</p>
    }
}