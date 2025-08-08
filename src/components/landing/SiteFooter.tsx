import { Button } from "@/components/ui/button";

const SiteFooter = () => {
  return (
    <footer id="contact" className="border-t">
      <div className="container mx-auto py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2 font-semibold">
              <span aria-hidden className="h-6 w-6 rounded-md bg-primary" />
              HomePro
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Affordable home repair services by certified handymen.</p>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-muted-foreground">(555) 123-4567</p>
            <p className="text-muted-foreground">hello@homepro.example</p>
          </div>
          <div className="flex md:justify-end items-start">
            <Button variant="hero">Get a quote</Button>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} HomePro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
