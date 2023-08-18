import React from 'react';

const ProfileUpdate = () => {
    return (
        <div>
            <h2>Update Profile</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default ProfileUpdate;