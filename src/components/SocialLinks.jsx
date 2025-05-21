import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-amin-a15981248/',
      icon: '🔗'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/A-Amiin',
      icon: '🐙'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@AhmedAmin-gp6hy',
      icon: '📺'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+201063538149',
      icon: '💬'
    }
  ];

  return (
    <div className="links flex gap-4 justify-end mb-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#007bff] bg-[#f8f9fa] px-4 py-2 rounded-lg hover:bg-[#007bff] hover:text-white transition-colors"
        >
          {link.icon} {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 