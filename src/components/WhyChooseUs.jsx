import About1 from "../assets/abt1.png";
import About2 from "../assets/abt2.png";
import { IoCheckmarkDone } from "react-icons/io5";

const textBlocks2 = [
  {
    text: "Our platform connects you with reliable laborers possessing expertise to ensure timely and purpose-driven farm work completion.",
  },
  {
    text: "Simplify the process of hiring quality laborers with FarmHand, alleviating the stress and time drain of recruitment.",
  },
];

const textBlocks1 = [
  {
    text: "Our platform connects you with reliable laborers possessing expertise to ensure timely and purpose-driven farm work completion.",
  },
  {
    text: "Simplify the process of hiring quality laborers with FarmHand, alleviating the stress and time drain of recruitment.",
  },
];
const Main = () => {
  return (
    <div className="justify-center align-center">
      <h1 className="text-center text-3xl font-quicksand font-semibold mt-8">
        Why FarmHand?
      </h1>
      <div className="flex flex-col items-center justify-center mt-8 p-2">
        <div className="flex items-center gap-4">
          <img src={About1} className="rounded-lg"/>
          <div className=" flex-col items-center">
            {textBlocks1.map((block, index) => (
              <div
                key={index}
                className="font-quicksand max-w-4xl mt-10 flex items-center gap-4"
              >
                <IoCheckmarkDone className="h-6 w-6 text-green-600" />
                <p className="text-lg">{block.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12 mb-12">
          <div className=" flex-col items-center">
            {textBlocks2.map((block, index) => (
              <div
                key={index}
                className="font-quicksand mt-10 max-w-4xl flex items-center gap-4"
              >
                <IoCheckmarkDone className="h-6 w-6 text-green-600" />
                <p className="text-lg">{block.text}</p>
              </div>
            ))}
          </div>

          <img src={About2} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default Main;
