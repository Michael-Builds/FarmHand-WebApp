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
      <h1 className="text-center text-3xl font-quicksand font-semibold mt-8 lg:mb-0 -mb-8">
        Why FarmHand?
      </h1>
      <div className="flex flex-col items-center justify-center lg:mt-8 mt-16 p-2">
        <div className="flex flex-col sm:flex-row items-center gap-4 md:pl-4 md:pr-4 ">
          <img src={About1} className="rounded-lg" />
          <div className="flex flex-col items-center sm:items-start">
            {textBlocks1.map((block, index) => (
              <div
                key={index}
                className="font-quicksand max-w-4xl mt-4 sm:mt-0 flex items-center gap-4"
              >
                <IoCheckmarkDone className="lg:h-6 lg:w-6 h-8 w-8 text-green-600" />
                <p className="lg:text-lg text-sm">{block.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center gap-4 mt-12 mb-12 md:pr-4 md:pl-4">
          <div className="flex flex-col items-center w-full">
            {textBlocks2.map((block, index) => (
              <div
                key={index}
                className="font-quicksand mt-10 max-w-4xl flex items-center gap-4"
              >
                <IoCheckmarkDone className="lg:h-6 lg:w-6 h-8 w-8 text-green-600" />
                <p className="lg:text-lg text-sm">{block.text}</p>
              </div>
            ))}
          </div>

          <img src={About2} className="rounded-lg sm:w-auto w-full" />
        </div>
      </div>
    </div>
  );
};
export default Main;
