import { motion } from 'framer-motion';

/* -------------------------------------------------------
   Button — premium reusable button with variants
   variant: 'primary' | 'secondary' | 'ghost' | 'outline'
------------------------------------------------------- */
export default function Button({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
  download,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconRight,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`;

  const inner = (
    <>
      {icon && <span className="btn__icon btn__icon--left" aria-hidden="true">{icon}</span>}
      <span className="btn__text">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right" aria-hidden="true">{iconRight}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.025 },
    whileTap:   { scale: disabled ? 1 : 0.975 },
    transition: { duration: 0.18, ease: 'easeOut' },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className={classes}
        aria-disabled={disabled}
        {...motionProps}
        {...rest}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...motionProps}
      {...rest}
    >
      {inner}
    </motion.button>
  );
}
