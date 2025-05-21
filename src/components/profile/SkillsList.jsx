import React from 'react';
import SkillItem from './SkillItem';

const SkillsList = ({ skills, isVisible }) => {
  return (
    <div className="skills-section bg-[#f8f9fa] p-6 rounded-lg">
      <h2 className="text-xl font-bold text-[#007bff] mb-4">Skills</h2>
      {isVisible && (
        <ul className="skills-list grid grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillsList; 