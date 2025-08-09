import clsx from 'clsx';

export default function Card({ className, children }) {
  return (
    <div className={clsx('bg-white rounded-xl shadow-card border border-black/5', className)}>
      {children}
    </div>
  );
}