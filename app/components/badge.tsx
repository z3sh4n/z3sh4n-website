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
          "border-transparent bg-[#934c05] text-secondary-foreground hover:bg-[#934c05]/80",
        php:
          "border-transparent bg-[#5F6685] text-secondary-foreground hover:bg-[#5F6685]/80",
        wordpress:
          "border-transparent bg-[#245a72] text-secondary-foreground hover:bg-[#245a72]/80",
        mysql:
          "border-transparent bg-[#005D72] text-secondary-foreground hover:bg-[#005D72]/80",
        rust:
          "border-transparent bg-[#722417] text-secondary-foreground hover:bg-[#722417]/80",
        nextjs:
          "border-transparent bg-neutral-800 text-secondary-foreground hover:bg-neutral-800/80",
        python:
          "border-transparent bg-[#B39429] text-secondary-foreground hover:bg-[#B39429]/80",
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
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
