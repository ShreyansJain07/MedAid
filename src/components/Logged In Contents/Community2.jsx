import io from "socket.io-client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        <div className="joinChatContainer flex flex-row min-h-[90vh]">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="w-1/2"
          >
            <img
              src="https://img.freepik.com/free-vector/community-concept-illustration_114360-1021.jpg?w=2000"
              alt=""
              className="max-h-[90vh] mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="w-1/2"
          >
            <h3 className="text-green-600 font-semibold my-12">
              Join A Community
            </h3>
            <div className="mt-10 text-sm">Please enter your name</div>
            <input
              type="text"
              className="mx-auto mt-[7px] mb-6"
              style={{ padding: "15px" }}
              placeholder="Enter username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            {/* <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          /> */}
            {/* <button onClick={joinRoom}>Join A Room</button> */}
            <div>
              <button
                className="m-3 text-white px-10 py-7 transition ease-in text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700"
                onClick={() => setRoom("1")}
              >
                Join room 1
              </button>
              <button
                className="m-3 text-white px-10 py-7 transition ease-in text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700"
                onClick={() => setRoom("2")}
              >
                Join room 2
              </button>
            </div>
            <div>
              <button
                className="m-3 text-white px-10 py-7 transition ease-in text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700"
                onClick={() => setRoom("3")}
              >
                Join room 3
              </button>
              <button
                className="m-3 text-white px-10 py-7 transition ease-in text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700"
                onClick={() => setRoom("4")}
              >
                Join room 3
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Community2;
