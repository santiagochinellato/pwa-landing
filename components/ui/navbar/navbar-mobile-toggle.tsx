import { Menu, X } from "lucide-react";

interface NavbarMobileToggleProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function NavbarMobileToggle({
  isOpen,
  setIsOpen,
}: NavbarMobileToggleProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle mobile menu"
      className="relative z-50 md:hidden text-light-fg dark:text-white w-12 h-12 flex items-center justify-center rounded-full bg-light-surface/50 dark:bg-white/5 border border-light-border dark:border-white/10 active:scale-95 transition-all"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
}
