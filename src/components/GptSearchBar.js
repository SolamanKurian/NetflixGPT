import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import client from "../utils/openai";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addgptMovieResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  let langkey = useSelector((store) => store.config.lang);
  let searchText = useRef(null);
  let dispatch = useDispatch();

  let searchMovieTMDB = async (movie) => {
    let data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      MOVIE_API_OPTIONS
    );
    let json = await data.json();
    return;
  };

  let handleGPTSearchClick = async () => {
    // make an api call with the searchText data
    let gptQuery =
      "Act asa a Movie Recomendation system and suggest movies for the query" +
      searchText.current.value +
      ". only give names of 5 movies, coma separated like the example result given ahead. Exaple Result: Gadar, Don, Golmal, Koi mil gaya";
    let gptResult = async function main() {
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      if (!chatCompletion) {
        //write error handling
      }
      console.log(chatCompletion.choices?.[0]?.message?.content);
      let gptMovies = chatCompletion.choices?.[0]?.message?.content.split(","); //it give array of mivies sugeested by AI
      //for each we have to call tmdb search api
      let promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // it will give an array of promises
      let tmdbResult = await Promise.all(promiseArray); // promise.all take the array and waits to complete all the promose tobe resolved
      dispatch(addgptMovieResults(tmdbResult));
    };
  };
  return (
    <div className="pt-[10%]">
      <form
        className=" bg-black w-full  md:w-1/2 m-auto grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langkey]?.gptSearchPlaceHolder}
          className="m-2 col-span-8 bg- "
        ></input>
        <button
          className="py-2  bg-red-700  text-white col-span-4 m-2 "
          onClick={handleGPTSearchClick}
        >
          {lang[langkey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
