import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const variants = {
  success: 'bg-emerald-600 text-white',
  error: 'bg-rose-600 text-white',
}

export function ToastContainer({ toasts, onDismiss }) {
  return (
    <div className="fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3">
      {toasts.map((toast) => (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className={`rounded-3xl px-4 py-4 shadow-2xl ring-1 ring-black/10 ${variants[toast.type] || variants.success}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 text-sm font-semibold leading-6">{toast.message}</div>
            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              className="rounded-full p-1.5 text-white/80 transition hover:text-white"
              aria-label="Fermer la notification"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
