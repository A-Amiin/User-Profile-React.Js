import React from 'react';
import Button from '../common/Button';

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
      icon: '📞'
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
        >
          <Button variant="link">
            {link.icon} {link.name}
          </Button>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 