import React from 'react';

const ProfilePicture = ({ src, alt }) => {
  return (
    <div className="profile-picture">
      <img
        src={src}
        alt={alt}
        className="w-[150px] h-[150px] rounded-full object-cover border-3 border-[#007bff]"
      />
    </div>
  );
};

export default ProfilePicture; 