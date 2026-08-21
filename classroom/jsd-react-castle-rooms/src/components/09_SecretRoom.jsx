export default function SecretRoom({ question, answer, handleAnswer, pokemon }) {
  console.log(question, answer, handleAnswer, pokemon);

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-y-4 bg-gray-700 w-[90%] text-white rounded-lg">
      <h1 className="text-2xl font-bold">SecretRoom</h1>

     <div className="prison-box flex flex-col items-center border-2 border-red-400 p-4 rounded-lg bg-gray-800">
        <p className="text-red-400 font-semibold mb-2">A prisoner is trapped here!</p>
        
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
      {/* ข้อความรับเข้า */}
      <p className="text-purple-300">
        Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {question ? `✅ ${question}` : "⏳ Waiting for a message..."}
        </span>
      </p>

      {/* ช่องส่งข้อความตอบกลับ */}
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1 text-center focus:outline-none"
        placeholder="Type your message here..."
      />

      {/* แสดงข้อความตอบกลับ */}
      <p className="text-green-300">
        Reply to the outside:{" "}
        <span className="text-sky-300">
          {answer ? `✅ ${answer}` : "⏳ Waiting for a reply..."}
        </span>
      </p>
    </div>
  );
}