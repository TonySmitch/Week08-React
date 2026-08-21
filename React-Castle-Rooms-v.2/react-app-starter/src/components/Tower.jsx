import Chamber from "./Chamber";

export default function Tower({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-amber-500 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <h2 className="text-xl font-bold mb-2">Tower</h2>
      <Chamber question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}