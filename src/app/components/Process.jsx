// Process.js
import { FaPenFancy, FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import { IoCreateOutline, IoBuildOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export default function Process({ size = "normal", spacing = "normal" }) {
  const iconSize = size === "small" ? "text-3xl" : "text-5xl";
  const textSize = size === "small" ? "text-xl" : "text-2xl";
  const descriptionSize = size === "small" ? "text-xs" : "text-sm";
  const arrowSize = size === "small" ? "text-4xl" : "text-6xl";
  const spacingX = spacing === "condensed" ? "space-x-4" : "space-x-10";
  const spacingY = spacing === "condensed" ? "space-y-1" : "space-y-2";

  const headerSize =
    size === "small" ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl";
  const headerAlignment = size === "small" ? "text-center" : "text-left";

  return (
    <section className="bg-white pt-4 pb-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <h2
          className={`${headerSize} font-bold text-[#255036] mb-4 ${headerAlignment}`}
        >
          Our Process
        </h2>
        <div className={`flex justify-center items-center ${spacingX}`}>
          <div
            className={`flex flex-col items-center ${spacingY} hover:scale-110 transition-all duration-300`}
          >
            <FaPenFancy className={`${iconSize} text-current`} />
            <p className={`${textSize} text-black`}>Sign Up</p>
            <p className={`${descriptionSize} text-gray-600 text-center`}>
              Create an account to get started with our services.
            </p>
          </div>
          <FaLongArrowAltRight className={`${arrowSize} text-yellow-400`} />
          <div
            className={`flex flex-col items-center ${spacingY} hover:scale-110 transition-all duration-300`}
          >
            <FaSearch className={`${iconSize} text-current`} />
            <p className={`${textSize} text-black`}>Research</p>
            <p className={`${descriptionSize} text-gray-600 text-center`}>
              We conduct thorough research to understand your requirements.
            </p>
          </div>
          <FaLongArrowAltRight className={`${arrowSize} text-yellow-400`} />
          <div
            className={`flex flex-col items-center ${spacingY} hover:scale-110 transition-all duration-300`}
          >
            <IoCreateOutline className={`${iconSize} text-current`} />
            <p className={`${textSize} text-black`}>Design</p>
            <p className={`${descriptionSize} text-gray-600 text-center`}>
              Our team designs a solution tailored to your needs.
            </p>
          </div>
          <FaLongArrowAltRight className={`${arrowSize} text-yellow-400`} />
          <div
            className={`flex flex-col items-center ${spacingY} hover:scale-110 transition-all duration-300`}
          >
            <IoBuildOutline className={`${iconSize} text-current`} />
            <p className={`${textSize} text-black`}>Build</p>
            <p className={`${descriptionSize} text-gray-600 text-center`}>
              We develop and implement the designed solution.
            </p>
          </div>
          <FaLongArrowAltRight className={`${arrowSize} text-yellow-400`} />
          <div
            className={`flex flex-col items-center ${spacingY} hover:scale-110 transition-all duration-300`}
          >
            <MdOutlineRocketLaunch className={`${iconSize} text-current`} />
            <p className={`${textSize} text-black`}>Launch</p>
            <p className={`${descriptionSize} text-gray-600 text-center`}>
              Your solution is launched and ready to use.
            </p>
          </div>
          <FaLongArrowAltRight className={`${arrowSize} text-yellow-400`} />
          <div
            className={`flex flex-col items-center ${spacingY} hover:scale-110 transition-all duration-300`}
          >
            <BiSupport className={`${iconSize} text-current`} />
            <p className={`${textSize} text-black`}>Support</p>
            <p className={`${descriptionSize} text-gray-600 text-center`}>
              We provide ongoing support and maintenance for your solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
