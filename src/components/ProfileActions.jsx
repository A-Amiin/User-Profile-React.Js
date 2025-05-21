import React from 'react';

const ProfileActions = ({ onEditProfile, onToggleSkills, isEditing }) => {
  return (
    <div className="profile-actions flex gap-4 mb-6">
      <button
        onClick={onEditProfile}
        className="btn bg-[#007bff] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3] transition-colors"
      >
        {isEditing ? 'Cancel Edit' : 'Edit Profile'}
      </button>
      <button
        onClick={onToggleSkills}
        className="btn bg-[#007bff] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3] transition-colors"
      >
        Toggle Skills
      </button>
    </div>
  );
};

export default ProfileActions; 