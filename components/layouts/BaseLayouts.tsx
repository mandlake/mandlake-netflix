"use client";

import Header from "@/app/header/page";
import { usePathname } from "next/navigation";

const BaseLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname(); // 현재 경로 가져오기

  return (
    <>
      {/* 현재 경로가 '/signin'이 아닌 경우에만 Header를 렌더링 */}
      {pathname !== "/signin" && <Header />}
      <div className="">
        <div>{children}</div>
      </div>
    </>
  );
};

export default BaseLayout;
