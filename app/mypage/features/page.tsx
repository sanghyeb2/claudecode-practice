import type { Metadata } from "next";
import featuresData from "@/data/features.json";

const CATEGORIES = [...new Set(featuresData.map((feature) => feature.category))];

const FIELD_CLASS =
  "rounded-md border border-input bg-background px-inline-md py-field-sm text-body-md text-foreground placeholder:text-tertiary focus:border-ring focus:outline-none";

export const metadata: Metadata = {
  title: "기능 관리 — CLAUDECODE-PRACTICE",
  description: "등록한 기능을 확인하고 관리하는 페이지입니다.",
};

export default function FeaturesPage() {
  return (
    <>
      <header>
        <h1 className="text-title-1 tracking-tight text-foreground">
          기능 관리
        </h1>
        <p className="mt-text-sm text-body-lg text-muted-foreground">
          등록한 기능의 상태를 확인하고 내용을 수정할 수 있습니다.
        </p>
      </header>

      <section aria-labelledby="new-feature" className="mt-section-md">
        <h2 id="new-feature" className="text-title-3 text-foreground">
          새 기능 등록
        </h2>

        <form className="mt-text-sm flex max-w-layout-sm flex-col gap-field-md">
          <div className="flex flex-col gap-field-sm">
            <label htmlFor="name" className="text-label-md text-foreground">
              기능 이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="예: 카카오 로그인"
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex flex-col gap-field-sm">
            <label
              htmlFor="description"
              className="text-label-md text-foreground"
            >
              한 줄 설명
            </label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="예: 카카오 계정으로 클릭 한 번에 로그인하는 소셜 로그인"
              className={FIELD_CLASS}
            />
          </div>

          <div className="flex flex-col gap-field-sm">
            <label htmlFor="category" className="text-label-md text-foreground">
              카테고리
            </label>
            <select
              id="category"
              name="category"
              defaultValue=""
              className={FIELD_CLASS}
            >
              <option value="" disabled>
                카테고리를 선택하세요
              </option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-field-sm">
            <label htmlFor="price" className="text-label-md text-foreground">
              가격 (원)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="9990"
              className={FIELD_CLASS}
            />
          </div>

          <button
            type="button"
            className="mt-field-lg rounded-md bg-primary px-inline-md py-field-sm text-label-lg text-primary-foreground transition-colors hover:bg-primary/90"
          >
            등록하기
          </button>
        </form>
      </section>
    </>
  );
}
