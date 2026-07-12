import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="interior-site">
      <div className="grain-overlay" />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
