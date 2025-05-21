import React from 'react';

const SkillsList = ({ skills, isVisible }) => {
  return (
    <div className="skills-section bg-[#f8f9fa] p-6 rounded-lg">
      <h2 className="text-xl font-bold text-[#007bff] mb-4">Skills</h2>
      {isVisible && (
        <ul className="skills-list flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-[#007bff] text-white px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillsList; 