import React from 'react';

const ProfileHeader = ({ user, isEditing, onEdit, onSave, onCancel }) => {
  return (
    <div className="profile-header flex flex-col md:flex-row gap-8 mb-8">
      <div className="profile-picture">
        <img
          src={user.profilePicture}
          alt="Profile Picture"
          className="w-[150px] h-[150px] rounded-full object-cover border-3 border-[#007bff]"
        />
      </div>
      <div className="profile-info flex-1">
        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={user.name}
              onChange={(e) => onEdit('name', e.target.value)}
              className="w-full p-2 border-2 border-[#007bff] rounded-lg outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              value={user.email}
              onChange={(e) => onEdit('email', e.target.value)}
              className="w-full p-2 border-2 border-[#007bff] rounded-lg outline-none"
              placeholder="Your Email"
            />
            <textarea
              value={user.bio}
              onChange={(e) => onEdit('bio', e.target.value)}
              className="w-full p-2 border-2 border-[#007bff] rounded-lg outline-none"
              rows="3"
              placeholder="Your Bio"
            />
            <div className="flex gap-2">
              <button
                onClick={onSave}
                className="btn bg-[#007bff] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3]"
              >
                Save
              </button>
              <button
                onClick={onCancel}
                className="btn bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-[#007bff] mb-2">
              {user.name}
            </h1>
            <p className="text-gray-600 mb-2">{user.email}</p>
            <p className="text-gray-600">{user.bio}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader; 