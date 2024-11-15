import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import { cn } from "@/lib/utils"; // Adjust the path for your utility function

export default function LinkHover({ href, children }: {href: string, children: React.ReactNode}) {
  return (
    <Link href={href}  
      
        className={cn(
          "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
        )}
    >
        {children}
    </Link>
  );
};

