import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-ink">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-navy/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
