import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-semibold font-display">
              <span aria-hidden className="h-6 w-6 rounded-md bg-primary" />
              HomePro
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">Affordable home repair services by certified handymen.</p>
          </div>
          <nav className="text-sm">
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><Link to="/services" className="story-link">Services</Link></li>
              <li><Link to="/process" className="story-link">Process</Link></li>
              <li><Link to="/contact" className="story-link">Contact</Link></li>
            </ul>
          </nav>
          <div className="text-sm">
            <h4 className="font-semibold">Get Help</h4>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><Link to="/call-us" className="story-link">Call Us</Link></li>
            </ul>
            <div className="mt-4">
              <Button variant="hero" asChild>
                <Link to="#contact">Get a quote</Link>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm">Follow</h4>
            <div className="mt-3 flex gap-3 text-muted-foreground">
              <a href="#" aria-label="Visit our Twitter" className="p-2 rounded-md border hover-scale">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Visit our Facebook" className="p-2 rounded-md border hover-scale">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Visit our Instagram" className="p-2 rounded-md border hover-scale">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} HomePro. All rights reserved.</p>
          <div className="text-xs text-muted-foreground flex gap-4">
            <a href="#" className="hover:underline underline-offset-4">Privacy</a>
            <a href="#" className="hover:underline underline-offset-4">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
