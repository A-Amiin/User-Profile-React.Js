import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileInfo from './ProfileInfo';
import Button from '../common/Button';

const ProfileHeader = ({ user, isEditing, onEdit, onSave, onCancel }) => {
  return (
    <div className="profile-header flex flex-col md:flex-row gap-8 mb-8">
      <ProfilePicture src={user.profilePicture} alt={user.name} />
      <ProfileInfo user={user} isEditing={isEditing} onEdit={onEdit} />
      {isEditing && (
        <div className="flex gap-2">
          <Button onClick={onSave}>Save</Button>
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader; 