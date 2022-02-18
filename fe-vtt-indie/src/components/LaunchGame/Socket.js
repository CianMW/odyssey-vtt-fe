import ADDRESS from "./addressSetup.js";
import { io } from "socket.io-client";
import React from "react";

 const socket = io(ADDRESS, { transports: ["websocket"] });
/*
export const SocketManager = ({
    onCallback = () => {},
  }) => {
   const socket = io(ADDRESS, { transports: ["websocket"] })  
    // Callbacks
    socket.on('callback-event-name', (payload) => {
      onCallback && onCallback(payload);
    });
  
    // Emitters
    const emitEvent = (eventPayload) => {
      socket.emit('emit-event-name', eventPayload);
    };
    const emitMessage = (eventPayload) => {

        socket.emit("joinRoom", eventPayload);
    }
  
    //NEW ADDITRIONS 

    // socket.on('connect', () => {
    //     console.log('Connection established!')
    //     dispatch(setInGame(true))
    //     joinRoom(getUrlParams[1])
    //   })
    //   socket.on("recieve_message", setMessage);
    
    //   socket.on("loggedin", () => {
    //     console.log("you're logged in!");
    //     fetchInGameUsers();
    
    //     socket.on("newConnection", () => {
    //       fetchInGameUsers();
    //     });
    //   });
    
    //   socket.on("message", (newMessage) => {
    //     console.log("a new message appeared!");
    //     setChatHistory([...chatHistory, newMessage]);
    //   });
    
    //   socket.on("disconnect", () => {
    //     console.log(`disconnected!`);
    //     dispatch(setInGame(false));
    //   });


    //NEW ADDITRIONS END 




    return {
      socket,
      emitEvent,
      emitMessage
    };
  };
  
*/


