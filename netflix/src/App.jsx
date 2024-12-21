import React from "react";
import NavBar from "./components/navBar/NavBar";
import {
  originals,
  action,
  comedy,
  horror,
  romance,
  documentary,
} from "./urls";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Original" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentary} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
