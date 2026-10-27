import type { Metadata } from "next";
import { az } from "@/i18n/az";

export const metadata: Metadata = { title: az.success.title };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
