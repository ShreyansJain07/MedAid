import io from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function Community2() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
useEffect(joinRoom, [room]);

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text" className="mx-auto my-[7px]"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
<<<<<<< HEAD
          <input
            type="text" className="mx-auto my-[7px]"
=======
          {/* <input
            type="text"
>>>>>>> 115469c90eb1a368d1da0dc07dba227039cd09d6
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
<<<<<<< HEAD
          />
          <button className="mx-auto my-[7px]" onClick={joinRoom}>Join A Room</button>
=======
          /> */}
          {/* <button onClick={joinRoom}>Join A Room</button> */}
          <div>
            <button onClick={()=> setRoom("1")}>Join room 1</button>
            <button onClick={()=> setRoom("2")}>Join room 2</button>
            <button onClick={()=> setRoom("3")}>Join room 3</button>
          </div>
>>>>>>> 115469c90eb1a368d1da0dc07dba227039cd09d6
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Community2;