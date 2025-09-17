import type { ReactNode } from "react";

export type HomeLayoutProps = {
  children: ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <main>{children}</main>;
}
