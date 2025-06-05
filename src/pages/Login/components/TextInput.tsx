interface TextInputProps {
  type: 'text' | 'password';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ type, placeholder, value, onChange }: TextInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-[--color-text] bg-[--color-bg] text-[--color-text] focus:outline-none focus:ring-2 focus:ring-[--color-accent]"
    />
  );
}

