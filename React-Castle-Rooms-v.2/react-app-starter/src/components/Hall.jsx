import Corridor from "./Corridor";

export default function Hall({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-emerald-700 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <h5 className="font-bold mb-2">Hall</h5>
      <Corridor question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}