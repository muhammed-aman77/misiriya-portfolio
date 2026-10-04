import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { personal } from '../data/portfolioData';

/* -------------------------------------------------------
   SocialLinks — icon row linking to social profiles
   size: 'sm' | 'md' | 'lg'
   light: boolean (for dark backgrounds)
------------------------------------------------------- */
export default function SocialLinks({ size = 'md', light = false, showPhone = false, showEmail = false }) {
  const iconSize = { sm: 16, md: 20, lg: 24 }[size];
  const cls = `social-links social-links--${size} ${light ? 'social-links--light' : ''}`;

  const links = [
    { href: personal.linkedin,  icon: <LinkedinIcon size={iconSize} />, label: 'LinkedIn profile' },
    { href: personal.github,    icon: <GithubIcon   size={iconSize} />, label: 'GitHub profile' },
    // Instagram — only shown when URL is provided in portfolioData
    ...(personal.instagram ? [{ href: personal.instagram, icon: <InstagramIcon size={iconSize} />, label: 'Instagram profile' }] : []),
    ...(showEmail ? [{ href: `mailto:${personal.email}`, icon: <Mail   size={iconSize} />, label: 'Send email' }] : []),
    ...(showPhone ? [{ href: `tel:${personal.phone}`,   icon: <Phone  size={iconSize} />, label: 'Call' }]       : []),
  ];

  return (
    <ul className={cls} role="list">
      {links.map(({ href, icon, label }) => (
        <li key={label}>
          <motion.a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className="social-links__item"
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {icon}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}
