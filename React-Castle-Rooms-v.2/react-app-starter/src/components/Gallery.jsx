import Nook from "./Nook";

export default function Gallery({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-purple-700 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <span className="font-bold mb-2">Gallery</span>
      <Nook question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}