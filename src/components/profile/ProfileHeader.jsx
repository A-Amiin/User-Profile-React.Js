import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileInfo from './ProfileInfo';

const ProfileHeader = ({ user, isEditing, onEdit, onSave, onCancel }) => {
  return (
    <div className="profile-header flex flex-col md:flex-row gap-8 mb-8">
      <ProfilePicture src={user.profilePicture} alt={user.name} />
      <ProfileInfo 
        user={user} 
        isEditing={isEditing} 
        onEdit={onEdit}
        onSave={onSave}
        onCancel={onCancel}
      />
    </div>
  );
};

export default ProfileHeader; 