import React from 'react';
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';

const AllUsers = () => {
    return (
        <div className="profileInfoContainer container mx-auto px-6 my-16">
            <DashboardRoutes></DashboardRoutes>
            <h1>All Users</h1>
        </div>
    );
};

export default AllUsers;