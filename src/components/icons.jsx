function Svg({ children, className = 'size-5', strokeWidth = 1.75, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props) {
  return <Svg {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
}

export function ArrowLeft(props) {
  return <Svg {...props}><path d="M19 12H5M11 6l-6 6 6 6" /></Svg>;
}

export function ArrowUp(props) {
  return <Svg {...props}><path d="M12 19V5M6 11l6-6 6 6" /></Svg>;
}

/* Marks a link that leaves the site. */
export function ArrowUpRight(props) {
  return <Svg {...props}><path d="M7 17 17 7M8 7h9v9" /></Svg>;
}

export function Check(props) {
  return <Svg {...props}><path d="m5 12.5 4.5 4.5L19 7.5" /></Svg>;
}

export function LinkIcon(props) {
  return (
    <Svg {...props}>
      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </Svg>
  );
}
