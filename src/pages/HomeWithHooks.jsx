
import React, { useState } from "react";
import YTservice from "../cmps/YTservice";
import Article from "../cmps/Article";

const HomeWithHooks = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [chosenName, setChosenName] = useState("Jack");
  
  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };
  
  const nameHandler = (name) => {
    setChosenName(name);
  };
  
  const aboutCodota = `In an increasingly ever-moving faster industry, entrepreneurs, frame architects, product managers and developers are always in search of the most powerful instruments out there to help them maintain their front line spot.
  Codota provides AI based code-completion tools that help developers write code faster without wasting precious time on typing and online searches; prevent bugs and errors by using suggestions of proven pre-tested code, and allow developers to discover new open source code without ever leaving their IDE. One of Codota’s main features is TabNine, a cutting-edge yet easy-to-use autocomplete extension which works with any IDE and supports Java, Javascript, TypeScript, Python, PHP, Go, Ruby, C, C++, Rust, C#, and pretty much anything else. The developer is offered full chunks of code suggestions based on their current code production, while keeping the supported project neat, clean and safe. The AI algorithms are sharpened daily and rely on vast-scale open source databases, and Codota’s tools are already used globally by developers at Google, Amazon, Airbnb, Alibaba, Netflix and many others.`;


  let content = (
    <div className="home-page">
      <div className="header">
        <a href="https://www.codota.com/" target="_blank">
          <div className="logo" />
        </a>
      </div>

      <div className="container">
        <div className="yt-section">
          <YTservice />
        </div>

        <div
          className="example-container"
          style={{
            backgroundColor: darkMode ? "#211c1c" : "#efefef",
          }}
        >
          {!darkMode && <button onClick={darkModeHandler}>Go Dark</button>}
          {darkMode && <button onClick={darkModeHandler}>Go Light</button>}
          <div className="name-chooser">
            <div className="name-btns">
              <button onClick={nameHandler.bind(this, "Jack")}>Jack</button>
              <button onClick={nameHandler.bind(this, "Shelly")}>Shelly</button>
              <button onClick={nameHandler.bind(this, "Zoe")}>Zoe</button>
            </div>
            <div
              className="chosen-name"
              style={{
                color: !darkMode ? "#211c1c" : "#efefef",
              }}
            >
              {chosenName}
            </div>
          </div>
        </div>
        <Article />
        <div className="about-codota">
          <h2>Codota</h2>
          {aboutCodota}
        </div>
      </div>

      <div className="footer">
        <a href="https://www.codota.com/" target="_blank">
          <div className="logo" />
        </a>
      </div>
    </div>
  );
  return content;
};

export default HomeWithHooks;
