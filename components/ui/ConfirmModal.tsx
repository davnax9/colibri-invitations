"use client"

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { ExclamationTriangleIcon, TrashIcon, InformationCircleIcon} from "@heroicons/react/24/outline"

type ConfirmModalVariant = "danger" | "warning" | "default"

type Props = {
  open: boolean
  onClose: () => void
  onConfirm: () => void | Promise<void>
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
  variant?: ConfirmModalVariant
  loading?: boolean
}

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title = "¿Estás seguro?",
  message = "Esta acción no se puede deshacer.",
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  variant = "danger",
  loading = false,
}: Props) {

  const variantStyles = {
    danger: {
      icon: TrashIcon,
      iconContainer: "bg-red-50",
      iconColor: "text-red-600",
      button: "bg-red-600 hover:bg-red-700",
    },

    warning: {
      icon: ExclamationTriangleIcon,
      iconContainer: "bg-amber-50",
      iconColor: "text-amber-600",
      button: "bg-amber-600 hover:bg-amber-700",
    },

    default: {
      icon: InformationCircleIcon,
      iconContainer: "bg-[#2F5D50]/10",
      iconColor: "text-[#2F5D50]",
      button: "bg-[#2F5D50] hover:bg-[#244A40]",
    },
  }

  const styles = variantStyles[variant]
  const Icon = styles.icon

  return (
    <Dialog open={open} onClose={loading ? () => {} : onClose} className="relative z-100">
      {/* OVERLAY */}
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" aria-hidden="true"/>
      {/* CONTENEDOR */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
          {/* CONTENIDO */}
          <div className="p-6">
            <div className="flex items-start gap-4">
              {/* ICONO */}
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.iconContainer} ${styles.iconColor}`}>
                <Icon className="h-6 w-6" />
              </div>
              {/* TEXTO */}
              <div className="min-w-0">
                <DialogTitle className="text-lg font-semibold text-[#263832]">{title}</DialogTitle>
                <p className="mt-2 text-sm leading-6 text-[#687A72]">{message}</p>
              </div>
            </div>
          </div>
          {/* BOTONES */}
          <div className="flex justify-end gap-3 border-t border-[#E5E9E5] bg-[#FAF8F3] px-6 py-4">
            <button type="button" onClick={onClose} disabled={loading} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700
                transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 "
            >
              {cancelText}
            </button>
            <button type="button" onClick={onConfirm} disabled={loading} className={`rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed
                disabled:opacity-50 ${styles.button}`}
            >
              {loading ? "Procesando..." : confirmText}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}