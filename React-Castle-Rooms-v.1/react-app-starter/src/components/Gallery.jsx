import Nook from "./Nook";

export default function Gallery() {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-purple-700 text-white w-[95%] rounded-lg my-2 shadow-inner">
      <span className="font-bold mb-2">Gallery</span>
      <Nook />
    </div>
  );
}