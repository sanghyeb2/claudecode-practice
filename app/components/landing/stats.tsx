const STATS = [
  { value: "120+", label: "풀스택 블록" },
  { value: "45k+", label: "주간 설치 수" },
  { value: "12.4k", label: "GitHub 스타" },
  { value: "300+", label: "기여자" },
];

export function Stats() {
  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
