import React from 'react';

const user = ({ name, age }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <style jsx>{`
                div {
                    border: 1px solid #eee;
                    shadow-box: 0 2px 3px #ccc;
                    padding: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
};

export default user;