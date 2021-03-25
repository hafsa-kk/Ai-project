import React, { useState } from "react";
import Pictures from "./Pictures";
import Chat from "./Chat";

function Intro() {
  const [buttonText, setButtonText] = useState(true);
  const [state, setState] = useState(true);

  function handleClick() {
    setButtonText(prevValue => {
      return !prevValue;
    });
    setState(prevValue => {
      return !prevValue;
    });
  }

  return (
    <div className="intro-card">
      <dl className="container-card">
        <div className="term">
          <dt>
            <span className="emoji" role="img">
              <img src="panda.png" alt="Panda Mono" />
            </span>
            <span>Meet Panda</span>
          </dt>
          <dd>
            A chatbot for "Friends Season". If you haven't watched it you can
            have basic info here. Ask the bot and see if you are interested
          </dd>
        </div>
        <Pictures />
        <div>
          {state ? <Chat /> : null}
          <button onClick={handleClick} className="chat">
            {buttonText ? "Hide Chat" : "Show Chat"}
          </button>
        </div>
      </dl>
    </div>
  );
}

export default Intro;
