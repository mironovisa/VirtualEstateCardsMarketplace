import React from 'react';
import '../../Styles/AdminPage.css'; 

const AdminPage = () => {
    return (
        <div className="admin-container">
            <h1>Admin Page</h1>
            <div className="button-container">
                <button className="generate-button">Generate Image</button>
            </div>
        </div>
    )
}

export default AdminPage;