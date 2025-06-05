// src/components/ui/Layout.tsx
import ThemeToggle from '../ThemeToggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-screen h-screen bg-[--color-bg] text-[--color-text]">
      {/* Global Theme Toggle in top-right corner of screen */}
      <div className="fixed top-2 right-2 z-50">
        <ThemeToggle />
      </div>

      {/* Page content centered */}
      <div className="w-full h-full flex items-center justify-center p-[1px]">
        {children}
      </div>
    </div>
  );
}
