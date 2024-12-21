import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import { imageUrl, API_KeY } from "../../components/constants/constants";
import axios from "../../axios";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlid] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        //alert('Network error')
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KeY}`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlid(response.data.results[0]);
      } else {
        console.log("Trailer is not available");
      }
    });
  };

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="Poster"
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
