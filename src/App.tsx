import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-red-600">
        Hello Tailwind v4.1 🎉
      </h1>
      <button className="mt-4 px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700">
        Button
      </button>
    </div>
  );
}

export default App;
