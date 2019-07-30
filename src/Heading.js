import React from 'react';

const Heading = (props) => {

    // console.log(props);
    return (<h1 className={props.class}>{props.title}</h1>);
}

export default Heading;