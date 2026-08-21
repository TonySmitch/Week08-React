export default function SecretRoom({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-gray-600 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <h1 className="text-lg font-bold mb-2">SecretRoom</h1>

      {/* ข้อความคำถามที่ส่งลงมาจาก App */}
      <p className="text-purple-300 text-sm mb-1">
        Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {question ? `✅ ${question}` : "⌛ Waiting for a message..."}
        </span>
      </p>

      {/* ช่องพิมพ์ตอบกลับ (ส่งค่ากลับไปหา App ผ่าน handleAnswer) */}
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1 my-2 w-full text-sm"
        placeholder="Type your message here..."
      />

      {/* ข้อความตอบกลับที่มาจากช่อง พิมพ์ด้านบน */}
      <p className="text-green-300 text-sm">
        Reply from the Secret Room:{" "}
        <span className="text-sky-300">
          {answer ? `✅ ${answer}` : "⌛ Waiting for a message..."}
        </span>
      </p>
    </div>
  );
}