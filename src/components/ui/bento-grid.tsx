import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-neutral-200/80 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:border-neutral-300",
      className
    )}
    {...props}
  >
    {/* Background Preview Graphic Layer */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {background}
    </div>

    {/* Bottom Content Area */}
    <div className="pointer-events-none relative z-10 mt-auto flex flex-col gap-1.5 transition-all duration-300 lg:group-hover:-translate-y-8">
      <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200/70 flex items-center justify-center text-neutral-800 shadow-xs mb-1 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
        {name}
      </h3>
      <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
        {description}
      </p>
    </div>

    {/* CTA Action Button on Hover */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-5 left-6 hidden transform-gpu flex-row items-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex z-20"
      )}
    >
      <a
        href={href}
        className="pointer-events-auto inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        <span>{cta}</span>
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
