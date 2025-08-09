import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import QuoteDialogButton from "@/components/landing/QuoteDialogButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-elevated">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold font-display"
        >
          <span aria-hidden className="h-6 w-6 rounded-md bg-primary" />
          HomePro
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="/services" className="story-link transition-colors">
            Services
          </Link>
          <Link href="/process" className="story-link transition-colors">
            Process
          </Link>
          <Link href="/contact" className="story-link transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="soft" className="hidden md:inline-flex" asChild>
            <Link href="/call-us">Call us</Link>
          </Button>
          <QuoteDialogButton />
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2" aria-label="Open menu">
                <Menu className="text-muted-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8 flex flex-col gap-4 text-sm">
                <Link href="/services" className="story-link transition-colors">
                  Services
                </Link>
                <Link href="/process" className="story-link transition-colors">
                  Process
                </Link>
                <Link href="/contact" className="story-link transition-colors">
                  Contact
                </Link>
                <Button variant="soft" asChild>
                  <Link href="/call-us">Call us</Link>
                </Button>
                <QuoteDialogButton variant="default" size="lg" />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
