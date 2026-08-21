import Tower from "./Tower";

export default function Castle({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-red-600 text-white w-full max-w-xl rounded-lg my-4 shadow-inner">
      <h1 className="text-2xl font-bold mb-2">Castle</h1>
      
      {/* ส่งต่อ Props ทั้ง 3 ตัวไปให้ Tower */}
      <Tower question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}