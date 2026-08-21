import SecretRoom from "./SecretRoom";

export default function Nook({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-purple-900 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <span className="font-bold mb-2">Nook</span>
      <SecretRoom question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}