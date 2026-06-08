import { cn } from '../../lib/utils'

const tones = {
  green: 'border-[#128c7e]/20 bg-[#e6f5f0] text-[#128c7e] dark:border-[#128c7e]/30 dark:bg-[#128c7e]/15 dark:text-emerald-200',
  amber: 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300',
  blue: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300',
  zinc: 'border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-white/10 dark:bg-white/10 dark:text-zinc-300',
  rose: 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-300',
}

export function Badge({ tone = 'zinc', className, ...props }) {
  return (
    <span
      className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium', tones[tone], className)}
      {...props}
    />
  )
}
