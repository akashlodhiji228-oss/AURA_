import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const OPEN_PROJECT_BRIEF = "aura:open-project-brief";

type PackageSelection = {
  name: string;
  price: string;
};

export function openProjectBrief(packageSelection?: PackageSelection) {
  window.dispatchEvent(new CustomEvent<PackageSelection | undefined>(OPEN_PROJECT_BRIEF, { detail: packageSelection }));
}

const packages: PackageSelection[] = [
  { name: "Starter", price: "₹7,999" },
  { name: "Starter + Admin", price: "₹14,999" },
  { name: "Growth", price: "₹17,999" },
  { name: "Business Pro", price: "₹49,999" },
  { name: "Custom Solutions", price: "₹80,000+" },
];
const timelines = ["ASAP", "1–2 months", "3–6 months", "Flexible"];

export function ProjectBrief() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [packageSelection, setPackageSelection] = useState<PackageSelection | null>(null);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const selection = (event as CustomEvent<PackageSelection | undefined>).detail;
      if (selection) {
        setPackageSelection(selection);
        setService(selection.name);
        setBudget(selection.price);
        setStep(2);
      }
      setOpen(true);
    };
    window.addEventListener(OPEN_PROJECT_BRIEF, handleOpen);
    return () => window.removeEventListener(OPEN_PROJECT_BRIEF, handleOpen);
  }, []);

  const message = useMemo(
    () =>
      `Hi AURA_FORGE, mujhe yeh package chahiye.\n\nPackage: ${service}\nPrice: ${budget}\nTimeline: ${timeline}`,
    [budget, service, timeline],
  );

  const reset = () => {
    setStep(1);
    setService("");
    setBudget("");
    setTimeline("");
    setPackageSelection(null);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) window.setTimeout(reset, 250);
      }}
    >
      <DialogContent className="max-h-[92svh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto border-border bg-background p-0 shadow-2xl sm:rounded-none">
        <div className="border-b border-border px-6 py-5 md:px-9">
          <div className="flex items-center justify-between gap-8 pr-8">
            <p className="label-mono text-primary">Package enquiry / 0{step}</p>
            <div className="flex gap-2" aria-label={`Step ${step} of 2`}>
              {[1, 2].map((item) => (
                <span
                  key={item}
                  className={cn("h-px w-8 bg-border transition-colors", item <= step && "bg-primary")}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 py-8 sm:px-6 sm:py-10 md:px-9 md:py-12">
          <DialogTitle className="display-xl text-2xl sm:text-4xl md:text-5xl">
            {step === 1 ? "Choose your package" : "When do we start?"}
          </DialogTitle>
          <DialogDescription className="mt-3 max-w-md font-editorial text-lg leading-snug">
            {step === 1
              ? "Select the package your business needs. Its name and price will be included in your WhatsApp enquiry."
              : "Choose your preferred timeline, then send the complete requirement directly on WhatsApp."}
          </DialogDescription>

          {packageSelection && step === 2 ? (
            <div className="mt-7 grid grid-cols-[1fr_auto] gap-4 border-y border-border py-4">
              <div>
                <p className="label-mono text-muted-foreground">Selected package</p>
                <p className="mt-1 font-display text-lg font-bold uppercase">{packageSelection.name}</p>
              </div>
              <div className="text-right">
                <p className="label-mono text-muted-foreground">Investment</p>
                <p className="mt-1 font-display text-lg font-bold text-primary">{packageSelection.price}</p>
              </div>
            </div>
          ) : null}

          <div className={cn("grid gap-3 sm:grid-cols-2", packageSelection && step === 2 ? "mt-6" : "mt-9")}>
            {step === 1
              ? packages.map((item) => (
                  <Button
                    key={item.name}
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setPackageSelection(item);
                      setService(item.name);
                      setBudget(item.price);
                    }}
                    className={cn(
                      "h-16 justify-between rounded-none border-border bg-transparent px-5 font-mono text-xs uppercase hover:border-primary hover:bg-transparent hover:text-primary",
                      packageSelection?.name === item.name && "border-primary text-primary",
                    )}
                  >
                    <span className="text-left">{item.name}<span className="mt-1 block text-[10px] text-muted-foreground">{item.price}</span></span>
                    {packageSelection?.name === item.name ? <Check aria-hidden /> : <span aria-hidden>↗</span>}
                  </Button>
                ))
              : timelines.map((choice) => (
                  <Button
                    key={choice}
                    type="button"
                    variant="outline"
                    onClick={() => setTimeline(choice)}
                    className={cn(
                      "h-16 justify-between rounded-none border-border bg-transparent px-5 font-mono text-xs uppercase hover:border-primary hover:bg-transparent hover:text-primary",
                      timeline === choice && "border-primary text-primary",
                    )}
                  >
                    {choice}
                    {timeline === choice ? <Check aria-hidden /> : <span aria-hidden>↗</span>}
                  </Button>
                ))}
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setStep(1);
                setTimeline("");
              }}
              disabled={step === 1}
              className="rounded-none px-0 font-mono text-xs uppercase"
            >
              <ArrowLeft aria-hidden /> Back
            </Button>
            {step === 1 ? (
              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!packageSelection}
                className="h-11 rounded-none px-6 font-mono text-xs uppercase"
              >
                Continue <ArrowRight aria-hidden />
              </Button>
            ) : (
              <div className="flex flex-wrap justify-end gap-2">
                <Button asChild variant="outline" className="h-11 rounded-none font-mono text-xs uppercase">
                  <a href={`mailto:officialauraforge@gmail.com?subject=${encodeURIComponent("New AURA_FORGE project brief")}&body=${encodeURIComponent(message)}`}>
                    <Mail aria-hidden /> Email
                  </a>
                </Button>
                <Button asChild disabled={!timeline} className="h-11 rounded-none font-mono text-xs uppercase">
                  <a href={`https://wa.me/917869461895?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden /> WhatsApp
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectBriefButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <Button type="button" onClick={() => openProjectBrief()} className={className} data-cursor="FORGE">
      {children}
    </Button>
  );
}