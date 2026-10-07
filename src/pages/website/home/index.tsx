import { WbSectionWrapper } from '@/components';
import { ModeToggle } from '@/components/dark-mode/mode-toggle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WbHome = () => {
  return (
    <WbSectionWrapper>
      WbHome
      <div className="flex gap-2">
        <Link to={`/auth/stakeholder-signin`}>
          <Button>Stakeholder Login</Button>
        </Link>
        <ModeToggle />
      </div>
    </WbSectionWrapper>
  );
};
export default WbHome;
