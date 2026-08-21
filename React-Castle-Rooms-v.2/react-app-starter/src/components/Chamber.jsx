import Room from "./Room";

export default function Chamber({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-yellow-500 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <h3 className="text-lg font-bold mb-2">Chamber</h3>
      <Room question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}