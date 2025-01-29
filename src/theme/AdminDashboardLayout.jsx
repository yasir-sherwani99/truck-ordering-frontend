import React from 'react';

import TopBar from './TopBar';
import SideBar from './SideBar';

const AdminDashboardLayout = ({data, children}) => {
    return (
        <>
            <TopBar />            
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <SideBar
                            data={data}
                        />
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default AdminDashboardLayout;