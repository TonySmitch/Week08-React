import Nook from "./08_Nook";

export default function Gallery({ question, answer, handleAnswer, pokemon})  {
 
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-indigo-500 w-[90%]">
      <h1>Gallery</h1>
      {/* Render Nook here */}
      <Nook 
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
