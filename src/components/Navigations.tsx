import React from 'react';
import {Link} from "react-router-dom";

const Navigations = () => {
    return (
            <nav
                className="flex justify-between items-center px-5 py-2 bg-gray-500 text-white mx-auto">
                <span>
                    Easy APP
                </span>
                    <span>
                    <Link to="/" className='mr-4'>Products Page</Link>
                    <Link to="/about">About Page</Link>
                </span>
            </nav>
    );
};

export default Navigations;