interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({ label, error, id, ...props }: TextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={textareaId}
        className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 resize-vertical min-h-[100px] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
