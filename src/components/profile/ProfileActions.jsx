import React from 'react';
import Button from '../common/Button';

const ProfileActions = ({ onEditProfile, onToggleSkills, isEditing, onSave, onCancel }) => {
  return (
    <div className="profile-actions flex gap-4 mb-6">
      {isEditing ? (
        <>
          <Button onClick={onSave} className="flex-1">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Button onClick={onEditProfile} className="flex-1">
            Edit Profile
          </Button>
          <Button onClick={onToggleSkills} className="flex-1">
            Toggle Skills
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfileActions; 