import Gallery from "./Gallery";

export default function Corridor({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-blue-700 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <h6 className="font-bold mb-2">Corridor</h6>
      <Gallery question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}