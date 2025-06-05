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

