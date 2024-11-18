"use client";

import { useState } from "react";

function HomeSearch() {
  const [apiKey, setApiKey] = useState(localStorage.getItem("TMDb-Key") || "");
  const [genreId, setGenreId] = useState("28");
  const [ageId, setAgeId] = useState(-1);
  const [sortId, setSortId] = useState("all");

  const genreCode = {
    "장르 (전체)": 0,
    Action: 28,
    // ...other genre codes
  };

  const sortingCode = {
    "언어 (전체)": "all",
    영어: "en",
    한국어: "ko",
  };

  const ageCode = {
    "평점 (전체)": -1,
    "9~10": 9,
    // ...other age codes
  };

  const handleOptionsChange = (options: any) => {
    // setGenreId(genreCode[options.originalLanguage]);
    // setAgeId(ageCode[options.translationLanguage]);
    // setSortId(sortingCode[options.sorting]);
  };

  return (
    <div className="container-search mt-5 mx-16 bg-[#2B2B2B] text-white ">
      <div className="container-search-bar">
        {/* <MovieSearch onChange={handleOptionsChange} /> */}
      </div>
      <div className="content-search">
        {/* <MovieInfiniteScroll
          apiKey={apiKey}
          genreId={genreId}
          ageId={ageId}
          sortId={sortId}
        /> */}
      </div>
    </div>
  );
}

export default HomeSearch;
