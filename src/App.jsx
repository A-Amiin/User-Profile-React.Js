import React, { useState } from 'react';
import ProfileHeader from './components/profile/ProfileHeader';
import SkillsList from './components/profile/SkillsList';
import SocialLinks from './components/profile/SocialLinks';
import ProfileActions from './components/profile/ProfileActions';

const initialUser = {
  name: 'Ahmed Mohamed Amin',
  email: 'ahmed.m.aminn@gmail.com',
  bio: 'Frontend developer passionate about creating beautiful and functional web interfaces.',
  profilePicture: './Abo Amin.jpg',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
};

function App() {
  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(true);
  const [editedUser, setEditedUser] = useState(initialUser);

  const handleEdit = (field, value) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const handleToggleEdit = () => setIsEditing(!isEditing);
  const handleToggleSkills = () => setIsSkillsVisible(!isSkillsVisible);

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center p-4">
      <div className="profile-container max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <ProfileHeader
          user={isEditing ? editedUser : user}
          isEditing={isEditing}
          onEdit={handleEdit}
        />

        <SocialLinks />

        <ProfileActions
          onEditProfile={handleToggleEdit}
          onToggleSkills={handleToggleSkills}
          isEditing={isEditing}
          onSave={handleSave}
          onCancel={handleCancel}
        />

        <SkillsList
          skills={user.skills}
          isVisible={isSkillsVisible}
        />
      </div>
    </div>
  );
}

export default App; 