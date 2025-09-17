import type { ReactNode } from "react";

export type HomeLayoutProps = {
  children: ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <main className="mx-auto w-full max-w-[1920px] bg-white">
        {children}
      </main>
    </div>
  );
}
