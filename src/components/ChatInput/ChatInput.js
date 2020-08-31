import React, { useState } from "react";
import { db, timestamp } from "../../firebase";
import { useStateValue } from "../ContextApi/StateProvider";
import "./ChatInput.css";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (event) => {
    event.preventDefault();
    if (channelId) {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .add({
          message: input,
          timestamp: timestamp,
          user: user.displayName,
          userImage: user.photoURL,
        })
        .then(() => {
          setInput("");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          placeholder={`Message #${channelName?.toLowerCase()}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
