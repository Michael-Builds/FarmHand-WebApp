import About1 from "../assets/abt1.png";
import { useInView } from 'react-intersection-observer';
import { IoCheckmarkDone } from "react-icons/io5";

const textBlocks1 = [
  {
    text: "Affordable local farm laborers available for you.",
  },
  {
    text: "Easing the stress of recruiting quality farm laborers.",
  },
  {
    text: "Sourced and vetted laborers for farms readily.",
  },
  {
    text: "On-demand specialized farm professionals, reliable always.",
  },
];


const Main = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <div id="whychooseus" className="justify-center align-center">
      <h1 className="text-center font-bold text-3xl font-quicksand mt-8 lg:mb-0 xl:-mb-2 -mb-10">
        Farmhand gives you access to :
      </h1>
      <div className="flex flex-col items-center justify-center lg:mt-8 mt-16 p-2 xl:pl-[15%]">
        <div className="flex flex-col sm:flex-row items-center gap-4 md:p-4 w-full xl:mb-6">
          <img
            ref={ref}
            src={About1}
            alt="Description"
            className={`rounded-lg sm:w-auto w-full xl:mb-0 -mb-6 ${inView ? 'fade-in-right' : ''}`} />
          <div className="flex flex-col items-center sm:items-start w-full xl:p-0 p-4">
            {textBlocks1.map((block, index) => (
              <div key={index} className="font-quicksand max-w-3xl mt-4 flex items-center gap-4">
                <IoCheckmarkDone className="lg:h-6 lg:w-6 h-8 w-8 text-green-600" />
                <p className="lg:text-lg text-sm xl:mt-0">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
