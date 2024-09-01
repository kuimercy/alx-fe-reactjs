
import React, { useState } from 'react';

function ProfileSettings() {
  const [newPassword, setNewPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleNotificationsChange = () => {
    setNotificationsEnabled((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Settings updated:', { newPassword, notificationsEnabled });
  };

  return (
    <div>
      <h3>Profile Settings</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="notifications">Enable Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notificationsEnabled}
            onChange={handleNotificationsChange}
          />
        </div>
        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
}

export default ProfileSettings;
