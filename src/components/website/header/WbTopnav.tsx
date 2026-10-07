import { ModeToggle } from '@/components/dark-mode/mode-toggle';
import { Button } from '@/components/ui/button';
import { webIcons } from '@/constants';

const WbTopnav = () => {
  return (
    <div className="bg-primary py-2 md:py-1">
      <div className="mx-auto w-full max-w-360 flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-center">
        <div className="flex flex-row justify-start items-center gap-4 md:gap-8">
          <a href="tel:+919123917773" className="flex items-center gap-1">
            <webIcons.phone className="text-card" size={14} />
            <span className="hidden md:block text-card text-xs font-semibold tracking-wider">
              +91 91239 17773
            </span>
          </a>
          <a
            href="mailto:saboojsathi.wb@gmail.com"
            className="flex items-center gap-1"
          >
            <webIcons.email className="text-card" size={14} />
            <span className="hidden md:block text-card text-xs font-semibold tracking-wider">
              saboojsathi.wb@gmail.com
            </span>
          </a>
          <div className="flex items-center gap-2 md:gap-1 border-l-0 md:border-l md:border-l-card/20 pl-0 md:pl-4">
            <webIcons.clock className="text-card" size={12} />
            <span className="text-card text-[10px] font-semibold tracking-wider">
              MON-FRI (11:00 am - 6:00 pm)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button className="h-6 px-1.5 rounded-xs text-[10px] md:text-xs text-card flex gap-0.5 border border-card/30">
            <span>A</span>
            <span>+</span>
          </Button>
          <Button className="h-6 px-1.5 rounded-xs text-[10px] md:text-xs text-card flex gap-0.5 border border-card/30">
            <span>A</span>
            <span>-</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
export default WbTopnav;
