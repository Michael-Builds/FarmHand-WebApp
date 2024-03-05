import About from "../assets/about.png";
const Main = () => {
  return (
    <div className="h-full p-4 bg-background flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="lg:pr-32 lg:order-2">
        <img
          src={About}
          className="lg:h-[32rem]  lg:h-auto rounded-lg lg:mt-4 mt-8 lg:mt-0"
        />
      </div>

      <div className="font-quicksand lg:ml-16 lg:order-1">
        <h1 className="text-4xl text-white lg:-mt-12 mt-6 font-medium ">
          About us
        </h1>
        <p className="font-quicksand max-w-4xl text-white mt-6 lg:text-lg text-xs">
          FarmHand is dedicated to enhancing agricultural productivity by
          seamlessly connecting farmers with skilled laborers. Our commitment
          lies in providing farmers with top-tier laborers while reducing the
          burden of recruitment. We recognize the pivotal role skilled laborers
          play in farm success, hence our mission to streamline the process for
          farmers. With FarmHand, managing laborers becomes effortless, allowing
          farmers to focus on optimizing farm operations.
        </p>
        <p className="font-quicksand max-w-4xl text-white mt-8 lg:mb-0 mb-4 text-xs lg:text-lg">
          At FarmHand, we believe in fostering strong relationships between
          farmers and laborers, built on trust, reliability, and efficiency.
          Through our platform, farmers can easily access a pool of skilled
          laborers with verified qualifications and experience, ensuring that
          their farm operations run smoothly and efficiently. Join us in
          revolutionizing the agricultural industry and experience the benefits
          of FarmHand today.
        </p>
      </div>
    </div>
  );
};

export default Main;
