$ErrorActionPreference = 'Stop'

New-Item -ItemType Directory -Force -Path 'D:/00 - ENDEAVORS/test/vector-flex-react-app/src/pages/Login/components'

Set-Content -Path 'D:/00 - ENDEAVORS/test/vector-flex-react-app/src/pages/Login/components/Title.tsx' -Value @'
export default function Title() {
  return (
    <h1 className="text-3xl font-bold text-center text-[--color-text]">
      Sign In to Vector Flex
    </h1>
  );
}

'@

Set-Content -Path 'D:/00 - ENDEAVORS/test/vector-flex-react-app/src/pages/Login/components/TextInput.tsx' -Value @'
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

'@

Set-Content -Path 'D:/00 - ENDEAVORS/test/vector-flex-react-app/src/pages/Login/components/SignInButton.tsx' -Value @'
interface SignInButtonProps {
  onClick?: () => void;
}

export default function SignInButton({ onClick }: SignInButtonProps) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="w-full bg-[--color-accent] text-[--color-bg] py-3 font-semibold hover:opacity-90 transition"
    >
      Sign In
    </button>
  );
}

'@