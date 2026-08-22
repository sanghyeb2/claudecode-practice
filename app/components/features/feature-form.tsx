"use client";

import { useRef, useState } from "react";

const FIELD_CLASS =
  "rounded-md border border-input bg-background px-inline-md py-field-sm text-body-md text-foreground placeholder:text-tertiary focus:border-ring focus:outline-none";

type Status = { kind: "success" | "error"; message: string } | null;

export function FeatureForm({ categories }: { categories: string[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/features", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          description: formData.get("description"),
          category: formData.get("category"),
          price: formData.get("price"),
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "잠시 후 다시 시도해 주세요.");
      }

      formRef.current?.reset();
      setStatus({ kind: "success", message: "등록되었습니다." });
    } catch (reason) {
      const message =
        reason instanceof Error ? reason.message : "잠시 후 다시 시도해 주세요.";
      setStatus({ kind: "error", message: `등록에 실패했습니다. ${message}` });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-text-sm flex max-w-layout-sm flex-col gap-field-md"
    >
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
        <label htmlFor="description" className="text-label-md text-foreground">
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
          {categories.map((category) => (
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
        type="submit"
        disabled={isSubmitting}
        className="mt-field-lg rounded-md bg-primary px-inline-md py-field-sm text-label-lg text-primary-foreground transition-colors hover:bg-primary/90"
      >
        등록하기
      </button>

      {status ? (
        <p
          role="status"
          aria-live="polite"
          className={
            status.kind === "success"
              ? "text-body-sm text-foreground"
              : "text-body-sm text-destructive"
          }
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
