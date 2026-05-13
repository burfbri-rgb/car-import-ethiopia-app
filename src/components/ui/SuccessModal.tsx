interface SuccessModalProps {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export default function SuccessModal({ open, title, message, onClose }: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
