// src/components/ui/Layout.tsx
import ThemeToggle from '../ThemeToggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-screen h-screen bg-[--color-bg] text-[--color-text]">
      {/* Fixed Theme Toggle in top-right corner with spacing */}
      <div className="fixed top-0 right-0 p-2 z-50">
        <ThemeToggle />
      </div>

      {/* Page content centered */}
      <div className="w-full h-full flex items-center justify-center p-[1px]">
        {children}
      </div>
    </div>
  );
}
