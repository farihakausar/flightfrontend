import React from "react";
import LeftSection from "../components/LeftSection";

export default function Messeges() {
  return (
    <>
      <LeftSection />
      <main class="p-4 md:ml-64 h-auto pt-20">
        <div class="h-96 mb-4">
          <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Messages</h2>
          <p>No msgs</p>
        </div>
      </main>
    </>
  );
}
