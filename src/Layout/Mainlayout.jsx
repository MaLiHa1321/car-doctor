import React from 'react';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <h3>Hello</h3>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Mainlayout;