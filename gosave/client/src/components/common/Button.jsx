import clsx from 'clsx';

export default function Button({ variant = 'primary', className, children, ...props }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const styles = {
    primary: 'bg-primary text-white shadow-card hover:scale-[1.02] focus:ring-primary',
    accent: 'bg-accent text-white shadow-card hover:scale-[1.02] focus:ring-accent',
    outline: 'border border-text/15 text-text hover:border-primary hover:text-primary focus:ring-primary',
  };
  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}