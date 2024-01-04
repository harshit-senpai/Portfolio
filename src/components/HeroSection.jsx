const HeroSection = () => {
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
      </div>
    </div>
  );
};

export default HeroSection;
