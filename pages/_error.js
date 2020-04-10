import React from 'react';
import Link from 'next/link';

const errorPage = () => {
    return (
        <div>
            <h1>Oops! something went wrong...</h1>
            <p>try go back <Link href='/'><a>here</a></Link></p>
        </div>
    )
};

export default errorPage;