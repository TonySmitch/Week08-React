import Corridor from "./06_Corridor";

export default function Hall({ question, answer, handleAnswer, pokemon})  {

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-emerald-500 w-[90%]">
      <h1>Hall</h1>
      {/* Render Corridor here */}
      <Corridor
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        pokemon={pokemon}
        /*handleRescue={handleRescue}
        rainbowEffect={rainbowEffect}
        prisoner={prisoner}
        showModal={showModal}
        handleReset={handleReset}*/
        />
    </div>
  );
}
