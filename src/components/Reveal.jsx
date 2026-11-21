import { useInView } from 'react-intersection-observer';

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * `delay` (ms) staggers siblings. Motion is disabled for reduced-motion users in CSS.
 */
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const Tag = as;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -8% 0px',
  });

  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
