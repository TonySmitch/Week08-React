import { useState, useEffect } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    async function fetchPokemon() {
      const randomId = Math.floor(Math.random() * 151) + 1; // 👈 สุ่ม ID โปเกมอนตรงนี้
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-100 p-6 gap-y-6 text-center">
      {/* หัวข้อหลัก */}
      <h1 className="text-4xl font-bold text-yellow-400">Outside the Castle</h1>

      {/* แสดงรูปโปเกมอน */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-slate-400 text-lg">Pokemon outside:</p>

        {/* แสดงผลรูปภาพโปเกมอน */}
        {pokemon && (
          <div className="flex flex-col items-center justify-center mt-2">
            <img
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
              className="w-24 h-24 object-contain"
            />
            <p className="capitalize font-medium text-slate-300 mt-1"> 
              {pokemon.name}
            </p>
          </div>
        )}
      </div>

      {/* ส่งข้อความถึง Secret Room */}
      <p className="text-purple-300 font-medium">
        Message to the Secret Room:{" "}
        <span className="text-yellow-300">
          {question ? `✅ ${question}` : "Waiting..."}
        </span>
      </p>

      {/* กล่องข้อความ */}
      <textarea
        value={question}
        onChange={handleQuestion}
        className="w-full max-w-sm rounded-lg bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-teal-400 text-center"
        placeholder="Type your message here..."
        rows={3}
      />

      {/* ข้อความตอบกลับ */}
      <p className="text-emerald-400 font-medium">
        Reply from the Secret Room:{" "}
        <span className="text-yellow-300">
          {answer ? `✅ ${answer}` : "Waiting for a reply..."}
        </span>
      </p>

      {/* Component Castle */}
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} pokemon={pokemon}/>
    </div>
  );
}