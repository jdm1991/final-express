import { FaPenFancy, FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import { IoCreateOutline, IoBuildOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export default function Process() {
  return (
    <>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
            Our Process:
          </h2>
          <div className="flex justify-center items-center space-x-10">
            <div className="flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300">
              <FaPenFancy className="text-5xl text-current" />
              <p className="text-2xl text-black">Sign Up</p>
              <p className="text-sm text-gray-600 text-center">
                Create an account to get started with our services.
              </p>
            </div>
            <FaLongArrowAltRight className="text-6xl text-yellow-400" />
            <div className="flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300">
              <FaSearch className="text-5xl text-current" />
              <p className="text-2xl text-black">Research</p>
              <p className="text-sm text-gray-600 text-center">
                We conduct thorough research to understand your requirements.
              </p>
            </div>
            <FaLongArrowAltRight className="text-6xl text-yellow-400" />
            <div className="flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300">
              <IoCreateOutline className="text-5xl text-current" />
              <p className="text-2xl text-black">Design</p>
              <p className="text-sm text-gray-600 text-center">
                Our team designs a solution tailored to your needs.
              </p>
            </div>
            <FaLongArrowAltRight className="text-6xl text-yellow-400" />
            <div className="flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300">
              <IoBuildOutline className="text-5xl text-current" />
              <p className="text-2xl text-black">Build</p>
              <p className="text-sm text-gray-600 text-center">
                We develop and implement the designed solution.
              </p>
            </div>
            <FaLongArrowAltRight className="text-6xl text-yellow-400" />
            <div className="flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300">
              <MdOutlineRocketLaunch className="text-5xl text-current" />
              <p className="text-2xl text-black">Launch</p>
              <p className="text-sm text-gray-600 text-center">
                Your solution is launched and ready to use.
              </p>
            </div>
            <FaLongArrowAltRight className="text-6xl text-yellow-400" />
            <div className="flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300">
              <BiSupport className="text-5xl text-current" />
              <p className="text-2xl text-black">Support</p>
              <p className="text-sm text-gray-600 text-center">
                We provide ongoing support and maintenance for your solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
