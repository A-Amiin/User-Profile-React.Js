import React from 'react';

const SkillItem = ({ skill }) => {
  return (
    <li className="bg-[#007bff] text-white px-4 py-2 rounded-full text-sm">
      {skill}
    </li>
  );
};

export default SkillItem; 