import { SVGProps } from "react";

import { cn } from "@/app/_lib/utils";

export const ExternalLink = ({
  href,
  className,
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) => (
  <a
    href={href}
    target="_blank"
    className={cn("inline-flex flex-nowrap items-center", className)}
    {...props}
  >
    {children}
    <ExternalIcon className="ml-0.5 fill-current" />
  </a>
);

const ExternalIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={cn("ml-1 mt-0.5 h-3.5 w-3.5", className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
  </svg>
);
