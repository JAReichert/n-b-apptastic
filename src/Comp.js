import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar2 from "./components/Navbar2";
import { useState } from "react";
import "./components/Comp.css";

const navbarLinks = [
  { url: "http://localhost:3000/home", title: "Home" },
  { url: "http://localhost:3000/versus", title: "Compare Players" },
  { url: "http://localhost:3000/comp", title: "Search for Articles" },
];

const DisplayArticles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const [input, setInput] = useState("");

  const fetchArticles = async () => {
    const article = await fetch(
      `https://nba-stories.herokuapp.com/news/player/${input}?limit=10`
    );
    const articleJson = await article.json();
    console.log(articleJson);
    dispatch({ type: "ADD", articles: articleJson });
  };
  return (
    <>
      <Navbar2 navbarLinks={navbarLinks} />
      <h1 className="oskee">
        Type in any player's name to get the latest news!
      </h1>
      <div className="pictureContainer">
        <img
          className="pete"
          src="https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/002/090/937/pistol-pete-maravich_crop_north.jpg"
          alt="Pistol Pete KILLING it!"
        />
        <img
          className="celtics"
          src="https://cdn.vox-cdn.com/thumbor/Wh0o4X7jwW_ri6RW8LSO3K9HY1o=/0x0:3000x2218/1200x800/filters:focal(1803x295:2283x775)/cdn.vox-cdn.com/uploads/chorus_image/image/52902067/usa_today_9818982.0.jpg"
          alt="Knick blowing by a Celtic for an easy hoop"
        />
        <img
          className="sixers"
          src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200812202252/sixers-raptors-1.jpg"
          alt="Embiid getting ready to block Pascal into another century!"
        />
        <img
          className="larry"
          src="https://ca-times.brightspotcdn.com/dims4/default/137d68d/2147483647/strip/true/crop/1569x882+0+0/resize/840x472!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbf%2Fac%2F6b032a8e5683c5c70ff4edd5533e%2Fla-1557946636-ysybbh37ad-snap-image"
          alt="Larry and Magic tusseling for a rebound"
        />
        <img
          className="orl"
          src="https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https://orlandomagicdaily.com/wp-content/uploads/getty-images/2017/07/1183132809-850x560.jpeg"
          alt="Orlando player taking it to the route past a Wizard"
        />
        <img
          className="green"
          src="https://s.hdnux.com/photos/01/24/20/44/22087943/3/1200x0.jpg"
          alt="Jalen Green missing another dunk"
        />
      </div>
      <div className="mainContainer">
        <input
          type="text"
          className="nameFieldArticle"
          onChange={(e) => setInput(e.target.value)}
          placeholder="please enter players name"
        ></input>
        <button className="One" onClick={() => fetchArticles()}>
          Submit
        </button>

        {articles?.map((article) => (
          <>
            <br></br>
            <p>{article.title}</p>
            <a href={article.url}>{article.url}</a>
            <br></br>
          </>
        ))}
        <form>
          <button className="Two" onSubmit={() => dispatch({ type: "CLEAR" })}>
            Clear
          </button>
        </form>
      </div>
    </>
  );
};
export default DisplayArticles;
