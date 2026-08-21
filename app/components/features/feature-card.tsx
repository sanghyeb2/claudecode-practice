const priceFormatter = new Intl.NumberFormat("ko-KR");

export type Feature = {
  name: string;
  description: string;
  category: string;
  price: number;
};

export function FeatureCard({
  name,
  description,
  category,
  price,
}: Feature) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-foreground/25 hover:bg-card">
      <span className="w-fit rounded-full border border-border bg-foreground/5 px-2 py-0.5 text-caption text-muted-foreground">
        {category}
      </span>

      <h2 className="mt-text-xs text-title-3 text-foreground">{name}</h2>
      <p className="mt-text-xs text-body-sm text-muted-foreground">
        {description}
      </p>

      <p className="mt-auto pt-text-md text-title-3 text-foreground">
        {priceFormatter.format(price)}원
      </p>
    </article>
  );
}
