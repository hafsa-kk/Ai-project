import React from "react";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="chat-window-wrapper"
        style={{
          width: "200px",
          padding: "20px",
          backgroundColor: "#393e46",
          marginLeft: "20px"
        }}
      >
        <div className="messages">
          <div
            className="user-msg-wrapper"
            style={{ textAlign: "right", color: "white" }}
          >
            <span className="user-msg">hello beta</span>
          </div>
          <div style={{ color: "white" }}>
            <span className="bot-msg">han beta?</span>
          </div>
        </div>

        <div className="input-thing" style={{ marginTop: "20px" }}>
          <input typeName="text" style={{ width: "100%" }} />
        </div>
      </div>
    );
  }
}

export default Chat;
