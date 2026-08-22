import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `next dev` 는 기본적으로 localhost 이외의 오리진에서 오는
  // 개발 전용 리소스(_next/static 청크, HMR) 요청을 차단한다.
  // 네트워크 주소로 접속하면 클라이언트 컴포넌트 청크가 막혀
  // 폼이 hydration 되지 않으므로 LAN 주소를 허용한다.
  allowedDevOrigins: ["192.168.136.1"],
};

export default nextConfig;
