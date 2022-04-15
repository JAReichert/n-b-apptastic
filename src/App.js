import "./App.css";
import nba1 from "./assets/nba1.jpeg";
import nba2 from "./assets/nba2.jpeg";
import nba3 from "./assets/nba3.jpg";
import nba4 from "./assets/nba4.jpg";
import nba5 from "./assets/nba5.jpeg";
import React from "react";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Navbar2 from "./components/Navbar2";
import NewButton from "./components/NewButton";

const navbarLinks = [
  { url: "http://localhost:3000/home", title: "Home" },
  { url: "http://localhost:3000/versus", title: "Compare Players" },
  { url: "http://localhost:3000/comp", title: "Search for Articles" },
];

export default function App() {
  return (
    <>
      <div className="App">
        <Navbar2 navbarLinks={navbarLinks} />
        <Main imageSrc={nba4} />
        <Slider
          imageSrc={nba1}
          title={
            "Are you tired of getting into endless debates with friends and family over who had the best season in the NBA?"
          }
        />
        <Slider
          imageSrc={nba2}
          title={
            "If only there was a way to settle the debate, once and for all....."
          }
          flipped={true}
        />
        <Slider
          imageSrc={nba3}
          title={
            "Well, now there is a way!  Introducing the N-B-Apptastic!!!!!"
          }
        />
        <Slider
          imageSrc={nba5}
          title={"How does it work??????"}
          subtitle={"Click the button below and find out!"}
          flipped={true}
        />
      </div>
      <div className="buttonContainer">
        <NewButton />
      </div>
    </>
  );
}
