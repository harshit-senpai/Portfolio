import Hero_image from "./../assets/Hero_image.jpg";
import blue_up from "./../assets/blue_up.svg";
import wing_purple_down from "./../assets/wing_purple_down.svg";
import bullet_yellow_left from "./../assets/bullets_yellow_left.svg";
import { useState } from "react";
import linkedin from "./../assets/linkedin.svg";
import twitter from "./../assets/twitter.svg";
import github from "./../assets/github.svg";

const HeroSection = () => {
  const [visible, setVisible] = useState("");

  return (
    <div className="antialiased font-body bg-body text-body">
      <div className="skewed-bottom-right">
        <nav className="relative px-6 py-6 flex justify-between items-center bg-gray-900">
          <a className="text-white text-3xl font-bold leading-none">Harshit</a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-white p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-1-1"
                data-path="0.0.1.0.0"
              >
                <title data-path="0.0.1.0.0.0">Mobile menu</title>
                <path
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                  data-path="0.0.1.0.0.1"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a href="" className="text-sm text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li className="text-gray-600" data-path="0.0.2.1">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-config-id="auto-svg-2-1"
                data-path="0.0.2.1.0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  data-path="0.0.2.1.0.0"
                ></path>
              </svg>
            </li>
            <li>
              <a href="" className="text-sm text-white font-bold">
                Services
              </a>
            </li>
            <li className="text-gray-600" data-path="0.0.2.1">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-config-id="auto-svg-2-1"
                data-path="0.0.2.1.0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  data-path="0.0.2.1.0.0"
                ></path>
              </svg>
            </li>
            <li>
              <a href="" className="text-sm text-gray-300 hover:text-white">
                Technologies
              </a>
            </li>
            <li className="text-gray-600" data-path="0.0.2.1">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-config-id="auto-svg-2-1"
                data-path="0.0.2.1.0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  data-path="0.0.2.1.0.0"
                ></path>
              </svg>
            </li>
            <li>
              <a href="" className="text-sm text-gray-300 hover:text-white">
                Projects
              </a>
            </li>
            <li className="text-gray-600" data-path="0.0.2.1">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-config-id="auto-svg-2-1"
                data-path="0.0.2.1.0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  data-path="0.0.2.1.0.0"
                ></path>
              </svg>
            </li>
            <li>
              <a href="" className="text-sm text-gray-300 hover:text-white">
                Experience
              </a>
            </li>
          </ul>
          <a
            href=""
            className="hidden lg:inline-block py-2 px-6 bg-pink-500 hover:bg-pink-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
          >
            Contact Me
          </a>
        </nav>
        <div className="bg-gray-900 pt-12 lg:pt-20 pb-20 " data-path="0.1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl text-white font-bold">
                      <span>Hi, I'm Harshit a </span>
                      <span className="text-purple-600">
                        Full Stack Developer
                      </span>
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                    <div>
                      <a
                        href=""
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      >
                        Download CV
                      </a>
                      <a
                        href=""
                        className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                <div className="relative">
                  <img
                    src={Hero_image}
                    alt=""
                    className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none z-50 relative"
                  />
                  <img
                    src={blue_up}
                    alt=""
                    className="hidden md:block absolute top-[-48px] right-[-24px] z-100 "
                    data-path="0.1.0.0.1.0.1"
                  />
                  <img
                    src={wing_purple_down}
                    alt=""
                    className="hidden md:block absolute bottom-[-2rem] right-[-2rem] "
                  />
                  <img
                    src="./../assets/bullets-dark-right.svg"
                    alt=""
                    className="hidden md:block absolute"
                  />
                  <img
                    src={bullet_yellow_left}
                    alt=""
                    className="hidden md:block absolute bottom-[40px] left-[-70px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-for-radius" data-path="0.2">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
            data-path="0.2.0"
          >
            <polygon
              fill="currentColor"
              points="0 0 10 0 0 10"
              data-path="0.2.0.0"
            ></polygon>
          </svg>
        </div>
        <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a href="" className="mr-auto text-3xl font-bold leading-none">
                Harshit
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  data-config-id="auto-svg-6-1"
                  data-path="0.3.1.0.1.0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                    data-path="0.3.1.0.1.0.0"
                  ></path>
                </svg>
              </button>
            </div>

            <div>
              <ul>
                <li className="mb-1">
                  <a
                    href=""
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href=""
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href=""
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  >
                    Technologies
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href=""
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  >
                    Projects
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href=""
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  href=""
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                >
                  Download CV
                </a>
                <a
                  href=""
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-pink-600 hover:bg-pink-700 rounded-l-xl rounded-t-xl"
                >
                  Connect
                </a>
              </div>

              <p className="my-4 text-xs text-center text-gray-400">
                <span>@Made with ❤️</span>
              </p>

              <div className="text-center">
                <a href="" className="inline-block px-1">
                  <img src={linkedin} alt="" className="text-purple-600" />
                </a>
                <a href="" className="inline-block px-1">
                  <img src={github} alt="" className="text-purple-600" />
                </a>
                <a href="" className="inline-block px-1">
                  <img src={twitter} alt="" className="text-purple-600" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
