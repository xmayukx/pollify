"use client";
import { ChangeEvent, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  const socket = io("http://localhost:3001");
  return (
    <main className="">
      
    </main>
  );
}
