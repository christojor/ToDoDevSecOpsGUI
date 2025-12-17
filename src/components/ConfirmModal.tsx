import { useEffect } from 'react'

interface ConfirmModalProps {
  isOpen: boolean
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
  variant?: 'danger' | 'warning' | 'info'
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  variant = 'danger'
}: ConfirmModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onCancel])

  if (!isOpen) return null

  const variantStyles = {
    danger: {
      icon: 'delete',
      iconColor: 'text-red-500',
      confirmButton: 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
    },
    warning: {
      icon: 'warning',
      iconColor: 'text-yellow-500',
      confirmButton: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500'
    },
    info: {
      icon: 'info',
      iconColor: 'text-blue-500',
      confirmButton: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
    }
  }

  const styles = variantStyles[variant]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onCancel}/>

      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-scale-in">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 ${styles.iconColor}`}>
            <span className="material-symbols-outlined text-4xl">
              {styles.icon}
            </span>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-6">
              {message}
            </p>
            
            <div className="flex gap-3 justify-end">
              <button
                onClick={onCancel}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                {cancelText}
              </button>
              <button
                onClick={onConfirm}
                className={`px-4 py-2 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.confirmButton}`}>
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
