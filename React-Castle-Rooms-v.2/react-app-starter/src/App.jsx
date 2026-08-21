import { useState } from "react";
import Castle from "./components/Castle"; //ตรวจสอบ Path ให้ตรงกับโฟลเดอร์เริ่มต้น

export default function App() {
  // 1. ประกาศ State สำหรับเก็บค่าคำถามและคำตอบ
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // 2. ฟังก์ชันจัดการการเปลี่ยนแปลงเมื่อพิมพ์คำถาม
  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  // 3. ฟังก์ชันจัดการการเปลี่ยนแปลงเมื่อ SecretRoom ตอบกลับ
  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-8">
      {/* --- ส่วนแสดงข้อความคำถามที่จะส่งไป Secret Room --- */}
      <p className="text-purple-300">
        Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {question ? `✅ ${question}` : "⌛ Waiting for a message..."}
        </span>
      </p>

      {/* --- ช่องพิมพ์คำถาม (เมื่อกด Enter จะส่งคำถามลงไปยัง SecretRoom) --- */}
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1 my-2"
        placeholder="Type your message here..."
      />

      {/* --- ส่วนแสดงข้อความตอบกลับที่มาจาก Secret Room เมื่อพิมพ์ข้อความลงไปแล้วกด Enter จะเป็นการตอบกลับไปยังกล่องข้อความด้านบน--- */}
      <p className="text-green-300 my-2">
        Reply from the Secret Room:{" "}
        <span className="text-sky-300">
          {answer ? `✅ ${answer}` : "⌛ Waiting for a message..."}
        </span>
      </p>

      {/* --- 4. ส่ง Props ลงไปให้ Castle --- */}
      <Castle 
        question={question} //ตัวแปรที่ประกาศเพื่อเก็บค่าคำถาม
        answer={answer} //ตัวแปรที่ประกาศเพื่อเก็บค่าคำตอบ
        handleAnswer={handleAnswer} //ตัวแปรที่เก็บคำตอบที่ตอบกลับมาจาก SecretRoom
      />
    </div>
  );
}