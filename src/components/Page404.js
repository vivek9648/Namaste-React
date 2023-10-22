import React from 'react';
import { useRouteError } from 'react-router-dom';

const Page404 = () => {
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!!!!!!</h1>
            <h2>Something went wrong</h2>
            <h2>{err.error}</h2>
        </div>
    );
}

export default Page404;
