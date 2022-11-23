import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import NavScrollExample from '../navbar/NavScrollExample';
const AppLayout = () => {
    return <div style={{
        padding: '0px 0px 0px 100px'
    }}>
        <div>
        <Sidebar />
        <NavScrollExample/>
        </div>
        <Outlet />
    </div>;
};

export default AppLayout;