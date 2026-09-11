import React from 'react';

const Step = (props) => {
    return (
        <div className="stepPanel">
            <label htmlFor="">Set Custom Step:</label>
            <input type="number" placeholder="Custom Step Value" onChange={props.handleInputChange} />
        </div>);
}
export default Step;