import React from 'react';
import Button from '../common/Button';

const ProfileActions = ({ onEditProfile, onToggleSkills, isEditing }) => {
  return (
    <div className="profile-actions flex gap-4 mb-6">
      <Button onClick={onEditProfile}>
        {isEditing ? 'Cancel Edit' : 'Edit Profile'}
      </Button>
      <Button onClick={onToggleSkills}>
        Toggle Skills
      </Button>
    </div>
  );
};

export default ProfileActions; 