"use client";

import { useState, useEffect } from "react";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePopular() {
  const [currentView, setCurrentView] = useState("grid");
  const apiKey = localStorage.getItem("TMDb-Key") || "";

  useEffect(() => {
    // Handle potential side effects (e.g., fetching data)
  }, [apiKey]); // Run when apiKey changes

  const setView = (view: any) => {
    setCurrentView(view);
    if (view === "grid") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="text-white h-screen bg-[#2B2B2B] pt-16">
      <ViewToggle currentView={currentView} setView={setView} />
    </div>
  );
}

function ViewToggle({ currentView, setView }: any) {
  const [activeButton, setActiveButton] = useState(currentView);

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
