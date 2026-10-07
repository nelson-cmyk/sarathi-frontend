import { cn } from 'cn';

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const WbSectionWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-360', className)}>{children}</div>
  );
};
export default WbSectionWrapper;
