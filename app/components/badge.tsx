import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        flutter:
          "border-transparent bg-[#042B59] text-secondary-foreground hover:bg-[#042B59]/80",
          firebase:
          "border-transparent bg-[#c46607] text-secondary-foreground hover:bg-[#c46607]/80",
          php:
            "border-transparent bg-[#8993be] text-secondary-foreground hover:bg-[#8993be]/80",
        wordpress:
          "border-transparent bg-[#245a72] text-secondary-foreground hover:bg-[#245a72]/80",
        mysql:
          "border-transparent bg-[#00758f] text-secondary-foreground hover:bg-[#00758f]/80",
        rust:
          "border-transparent bg-[#281C1C] text-secondary-foreground hover:bg-[#281C1C]/80",
        nextjs:
          "border-transparent bg-neutral-800 text-secondary-foreground hover:bg-[#00758f]/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
