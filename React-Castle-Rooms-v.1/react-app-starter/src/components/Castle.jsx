import Tower from "./Tower";

export default function Castle() {
  return (
    
      <div className="flex flex-col justify-center items-center p-4 bg-red-500 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <h1 lassName="text-lg font-bold mb-2">Castle</h1>

      <Tower />
    </div>
  );
}