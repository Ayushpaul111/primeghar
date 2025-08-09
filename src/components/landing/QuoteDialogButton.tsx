import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const QuoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(7, "Enter a valid phone")
    .regex(/^[0-9+()\-\s]*$/, "Only numbers and +()- are allowed"),
  service: z.string().min(1, "Select a service"),
});

type QuoteFormValues = z.infer<typeof QuoteSchema>;

interface QuoteDialogButtonProps {
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
}

const serviceOptions = [
  { value: "electrical", label: "Electrical" },
  { value: "painting", label: "Painting" },
  { value: "carpentry", label: "Carpentry" },
  { value: "plumbing", label: "Plumbing" },
  { value: "other", label: "Other" },
] as const;

const QuoteDialogButton = ({ variant = "hero", size = "lg", className }: QuoteDialogButtonProps) => {
  const [open, setOpen] = useState(false);
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: { name: "", phone: "", service: "" },
  });

  const onSubmit = (values: QuoteFormValues) => {
    // In a future step we can persist to Supabase
    console.log("Quote request:", values);
    toast({ title: "Request received", description: "We\'ll contact you shortly to finalize your quote." });
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>Get a quote</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] animate-enter data-[state=closed]:animate-exit">
        <DialogHeader>
          <DialogTitle className="font-display">Request a Quote</DialogTitle>
          <DialogDescription>Fill in your details and we\'ll get back to you quickly.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" autoComplete="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" inputMode="tel" autoComplete="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of service</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="pointer-events-auto">
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2 flex gap-2 justify-end">
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">Request quote</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialogButton;
