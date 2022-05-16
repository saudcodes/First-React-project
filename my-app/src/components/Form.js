import React from 'react';

export default function form(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <div className="mb-3">
                <label htmlFor="box" className="form-label"></label>
                <textarea className="form-control" id="box" rows="3"></textarea>
            </div>
            <button className="btn btn-primary">Convert Uppercase</button>
        </>

    )
}

