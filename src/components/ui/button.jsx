export function Button({ children, className = '', variant = 'default' }) {
  const baseClass = variant === 'outline'
    ? 'border border-black'
    : 'bg-black text-white';
  return (
    <button className={`${baseClass} px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  );
}
