import { LuPhoneCall } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialmedia = [
  { icon: FaFacebookF, link: "https://www.facebook.com" },
  { icon: FaInstagram, link: "https://www.instagram.com" },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com" },
  { icon: FaXTwitter, link: "https://www.twitter.com" },
];

const Main = () => {
  return (
    <section className="bg-darkbg ">
      <div className="flex flex-col md:flex-row justify-around pt-6 pb-2 w-full">
        <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <div className="flex items-center gap-3">
            <div className="bg-white lg:p-1.5 p-1 rounded-full">
              <LuPhoneCall />
            </div>
            <h1 className="font-quicksand font-medium text-white lg:text-xl">
              Contact Us
            </h1>
          </div>
          <p className="font-quicksand mt-2 text-xs lg:text-sm text-center text-white">
            +233 279 282 372
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mb-4 md:mb-0 lg:mt-0 mt-4">
          <div className="flex items-center gap-3">
            <div className="bg-white lg:p-1.5 p-1 rounded-full">
              <IoLocationSharp />
            </div>
            <h1 className="font-quicksand font-medium text-white lg:text-xl">
              Location
            </h1>
          </div>
          <p className="font-quicksand mt-2 text-xs lg:text-sm  text-center text-white">
            Togbe Tewiah Building
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:mt-0 mt-4">
          <h1 className="font-quicksand text-center font-medium text-white lg:text-xl">
            Follow us
          </h1>
          <div className="flex items-center gap-1.5 mt-2 justify-center">
            {socialmedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white lg:p-1.5 p-1 rounded-full">
                  <item.icon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center pb-8 font-quicksand text-white text-xs mt-4 hover:text-orange-600 cursor-pointer">
        Powered by NodeEight
      </p>
    </section>
  );
};
export default Main;
