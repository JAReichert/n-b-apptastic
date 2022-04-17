import React, { Component } from "react";
import "./Versus.css";
import axios from "axios";
import Plot from "react-plotly.js";
import Navbar2 from "./components/Navbar2";

const navbarLinks = [
  { url: "http://localhost:3000/home", title: "Home" },
  { url: "http://localhost:3000/versus", title: "Compare Players" },
  { url: "http://localhost:3000/comp", title: "Search for Articles" },
];

class Versus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "Player 1",
      playerName2: "Player 2",
      playerStats1: {},
      playerStats2: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId();
    console.log(this.state.playerName);
  };

  handleChange = (event) => {
    const replace = event.target.value;
    if (replace.length > 0) {
      this.setState({ playerName: replace });
    } else {
      alert("Please type players name!");
    }
  };

  handleSubmit2 = (e) => {
    e.preventDefault();
    this.getPlayerId2();
    console.log(this.state.playerName2);
  };

  handleChange2 = (event) => {
    const replace = event.target.value;
    if (replace.length > 0) {
      this.setState({ playerName2: replace });
    } else {
      alert("Please type players name!");
    }
  };

  getPlayerId = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players/?search=${this.state.playerName}`
      )
      .then(async (res) => {
        if (res.data.data[0] === undefined) {
          alert(
            "This player has either not registered a stat this season or the name is misspelled!"
          );
        } else if (res.data.data.length > 1) {
          alert("Please specifiy the name of the player");
        } else {
          await this.getPlayerStats(res.data.data[0].id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPlayerStats = (playerId) => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId}`
      )
      .then(async (res) => {
        console.log(res.data.data);
        this.setState({ playerStats1: res.data.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPlayerId2 = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players/?search=${this.state.playerName2}`
      )
      .then(async (res) => {
        if (res.data.data[0] === undefined) {
          alert(
            "This player is either injured or hasn't played yet this season!"
          );
        } else if (res.data.data.length > 1) {
          alert("Please specifiy the name of the player");
        } else {
          await this.getPlayerStats2(res.data.data[0].id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPlayerStats2 = (playerId2) => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId2}`
      )
      .then(async (res) => {
        console.log(res.data.data);
        this.setState({ playerStats2: res.data.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  state = {
    divcontainer: false,
  };

  state2 = {
    divcontainer2: false,
  };

  render() {
    console.log(Object.keys(this.state.playerStats1));

    const handleChange3 = (e) => {
      this.setState({ divcontainer: !this.state.divcontainer });
    };

    const handleChange4 = (e) => {
      this.setState2({ divcontainer2: !this.state2.divcontainer2 });
    };

    const x = this.state.divcontainer;

    const { pts, ast, reb, blk } = this.state.playerStats1;
    const newDataType = {
      Points: pts,
      Assist: ast,
      Rebounds: reb,
      Blocks: blk,
    };

    const newDataType2 = {
      Points: this.state.playerStats2.pts,
      Assist: this.state.playerStats2.ast,
      Rebounds: this.state.playerStats2.reb,
      Blocks: this.state.playerStats2.blk,
    };
    const player1x = Object.keys(newDataType);
    const player1y = Object.values(newDataType);
    const player2x = Object.keys(newDataType2);
    const player2y = Object.values(newDataType2);

    const plot1 = {
      x: player1x,
      y: player1y,
      type: "bar",
      name: this.state.playerName,
    };

    const plot2 = {
      x: player2x,
      y: player2y,
      type: "bar",
      name: this.state.playerName2,
    };

    const data = [plot1, plot2];
    return (
      <>
        <Navbar2 navbarLinks={navbarLinks} />

        <div className="upper">
          <div className="playerOne">
            <form onSubmit={this.handleSubmit}>
              <label className="playerOneName">
                Name
                <input
                  type="text"
                  className="playerOneTextBox"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="please enter players name"
                ></input>
                <input
                  type="submit"
                  className="clickMe1"
                  onClick={handleChange3}
                  value="Submit"
                />
              </label>
            </form>
            <br></br>
            {x && (
              <div className="statsPlayerOne">
                games played: {this.state.playerStats1["games_played"]}
                <br></br>
                points averaged: {this.state.playerStats1["pts"]}
                <br />
                rebounds averaged: {this.state.playerStats1["reb"]}
                <br />
                assists averaged: {this.state.playerStats1["ast"]}
                <br></br>
                blocks: {this.state.playerStats1["blk"]}
              </div>
            )}
          </div>
          <div className="vs">
            <h1>vs.</h1>
          </div>
          <div className="playerTwo">
            <form onSubmit={this.handleSubmit2}>
              <label className="playerTwoName">
                Name
                <input
                  className="playerTwoTextBox"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange2}
                  placeholder="please enter players name"
                ></input>
                <input
                  type="submit"
                  className="clickMe2"
                  onClick={handleChange4}
                  value="Submit"
                />
              </label>
            </form>
            {x && (
              <div className="statsPlayerTwo">
                games played: {this.state.playerStats2["games_played"]}
                <br></br>
                points averaged: {this.state.playerStats2["pts"]}
                <br />
                rebounds averaged: {this.state.playerStats2["reb"]}
                <br />
                assists averaged: {this.state.playerStats2["ast"]}
                <br></br>
                blocks: {this.state.playerStats2["blk"]}
              </div>
            )}
          </div>
        </div>

        <div className="Plot">
          <Plot
            data={data}
            layout={{
              width: 500,
              height: 500,
              title: `${this.state.playerName} versus ${this.state.playerName2}`,
            }}
          />
        </div>
      </>
    );
  }
}

export default Versus;
