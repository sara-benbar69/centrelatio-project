import { cn } from '../../lib/utils'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-[28px] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#0b1a2a]',
        className,
      )}
      {...props}
    />
  )
}
