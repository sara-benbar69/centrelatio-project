import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128c7e] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#128c7e] text-white shadow-[0_10px_24px_rgba(18,140,126,0.18)] hover:bg-[#075e54]',
        secondary: 'border border-[#eeeeee] bg-white text-[#0b1a2a] hover:border-[#0b1a2a] hover:bg-[#f9f9f9] dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15',
        ghost: 'text-[#0b1a2a]/75 hover:bg-[#e6f5f0] hover:text-[#0b1a2a] dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white',
        danger: 'bg-rose-600 text-white shadow-[0_10px_24px_rgba(225,29,72,0.14)] hover:bg-rose-500',
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-5',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
