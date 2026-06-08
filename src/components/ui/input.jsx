import { cn } from '../../lib/utils'

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500',
        className,
      )}
      {...props}
    />
  )
}
