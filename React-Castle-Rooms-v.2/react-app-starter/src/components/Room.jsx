import Hall from "./Hall";

export default function Room({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-green-600 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <h4 className="font-bold mb-2">Room</h4>
      <Hall question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}