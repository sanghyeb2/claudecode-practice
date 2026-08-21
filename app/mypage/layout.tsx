import { MypageSideNav } from "@/app/components/mypage/side-nav";

export default function MypageLayout({ children }: LayoutProps<"/mypage">) {
  return (
    <div className="mx-auto flex w-full max-w-layout-lg flex-1 flex-col gap-grid-gutter-x px-(--safe-padding-x) py-section-md md:flex-row">
      <MypageSideNav />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
