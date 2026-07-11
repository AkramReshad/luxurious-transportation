import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display">{title}</h2>
      {copy && <div className="section-heading__copy">{copy}</div>}
    </div>
  );
}
