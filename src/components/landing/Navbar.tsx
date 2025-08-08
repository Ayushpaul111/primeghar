import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span aria-hidden className="h-6 w-6 rounded-md bg-primary" />
          HomePro
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#blog" className="hover:text-foreground transition-colors">Blog</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="soft" className="hidden md:inline-flex">Call us</Button>
          <Button variant="hero" size="lg">Get a quote</Button>
          <button className="md:hidden p-2" aria-label="Open menu">
            <Menu className="text-muted-foreground" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
