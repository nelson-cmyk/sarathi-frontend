import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/dark-mode/theme-provider';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const icon =
    theme === 'dark' ? <Sun className="size-3" /> : <Moon className="size-3" />;

  return (
    <Button
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
      className="h-6 px-1.5 rounded-xs text-card/90 flex gap-0.5 border border-card/30"
    >
      {icon}
    </Button>
  );
}
