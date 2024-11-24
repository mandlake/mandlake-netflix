"use client";

import { useState, useEffect } from "react";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// "grid"와 "list" 타입을 Union 타입으로 정의
type ViewType = "grid" | "list";

interface ViewToggleProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

function HomePopular() {
  const [currentView, setCurrentView] = useState<ViewType>("grid");

  // localStorage에서 API 키를 안전하게 가져옴.
  // const apiKey = (() => {
  //   try {
  //     return localStorage.getItem("TMDb-Key") || "";
  //   } catch (error) {
  //     console.error("Error accessing localStorage:", error);
  //     return "";
  //   }
  // })();

  useEffect(() => {
    // DOM 조작을 useEffect로 이동
    document.body.style.overflow = currentView === "grid" ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [currentView]);

  const setView = (view: ViewType) => {
    setCurrentView(view);
  };

  return (
    <div className="text-white h-screen bg-[#2B2B2B] pt-16">
      <ViewToggle currentView={currentView} setView={setView} />
    </div>
  );
}

function ViewToggle({ currentView, setView }: ViewToggleProps) {
  const [activeButton, setActiveButton] = useState<ViewType>(currentView);

  useEffect(() => {
    setActiveButton(currentView);
  }, [currentView]);

  return (
    <div className="view-toggle flex justify-end mt-5 mx-16 md:mt-8">
      <button
        className={`px-4 py-2 rounded-md text-white ${
          activeButton === "grid" ? "bg-[#535bfe]" : "bg-[#333333]"
        }`}
        onClick={() => setView("grid")}
      >
        <FontAwesomeIcon icon={faTh} />
      </button>
      <button
        className={`px-4 py-2 rounded-md text-white ${
          activeButton === "grid" ? "bg-[#333333]" : "bg-[#535bfe]"
        }`}
        onClick={() => setView("list")}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default HomePopular;
