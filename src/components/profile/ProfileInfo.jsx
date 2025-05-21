import React from 'react';
import Input from '../common/Input';

const ProfileInfo = ({ user, isEditing, onEdit }) => {
  if (isEditing) {
    return (
      <div className="profile-info flex-1 space-y-6">
        <div className="space-y-4">
          <Input
            id="name"
            label="Name"
            value={user.name}
            onChange={(e) => onEdit('name', e.target.value)}
            placeholder="Your Name"
          />
          <Input
            id="email"
            type="email"
            label="Email"
            value={user.email}
            onChange={(e) => onEdit('email', e.target.value)}
            placeholder="Your Email"
          />
          <Input
            id="bio"
            type="textarea"
            label="Bio"
            value={user.bio}
            onChange={(e) => onEdit('bio', e.target.value)}
            placeholder="Your Bio"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="profile-info flex-1">
      <h1 className="text-2xl md:text-3xl font-bold text-[#007bff] mb-2">
        {user.name}
      </h1>
      <p className="text-gray-600 mb-2">{user.email}</p>
      <p className="text-gray-600">{user.bio}</p>
    </div>
  );
};

export default ProfileInfo; 