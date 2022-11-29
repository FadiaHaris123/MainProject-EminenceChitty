import React from 'react';
import ProfilePage from './ProfilePage';
import Users from './Users';
import Image from './Image';
function Profile() {
  return (
    <div className='home'>
      <h1>Profile</h1>
      <div>
        <ProfilePage/>
        <Image/>
      </div>
    </div>
  );
}

export default Profile;
