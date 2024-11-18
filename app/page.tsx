"use client";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[#2B2B2B] text-white pt-24 gap-4 overflow-x-hidden mx-auto">
        <div className="container mx-8">
          <div className="px-8 pb-24 pt-4">
            <h1 className="text-2xl font-bold">인기 영화</h1>
          </div>
        </div>
        <div className="container mx-8">
          <div className="px-8 pb-24 pt-4">
            <h1 className="text-2xl font-bold">최신 영화</h1>
          </div>
        </div>
        <div className="container mx-8">
          <div className="px-8 pb-24 pt-4">
            <h1 className="text-2xl font-bold">액션 영화</h1>
          </div>
        </div>
      </div>
    </>
  );
}
