import Link from "next/link";

const Navbar = () => {
    return (
      <>
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="pt-2">
                <img src="/img/logo.svg" alt="logo" />
              </div>
            </Link>

            {/* Menu items */}
            <div className="hidden md:flex space-x-6">
              <Link href="/events" className="hover:text-darkBlue">
                Events
              </Link>
              <Link href="/speaker" className="hover:text-darkBlue">
                Speakers
              </Link>
              <a
                href="https://chat.whatsapp.com/H1IzMsNoExPAnmpSYydpXA"
                className="hover:text-darkBlue"
                target="_blank"
              >
                Community
              </a>
            </div>

            {/* Button */}
            <Link
              href="/register"
              className="hidden p-3 px-6 md:block text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight"
            >
              Register
            </Link>

            {/* Mobile menu */}
            <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          {/* Mobile menu items */}
          <div id="menu" className="absolute flex flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <Link href="#" className="hover:text-darkBlue">
              Events
            </Link>
            <Link href="/speaker" className="hover:text-darkBlue">
              Speakers
            </Link>
            <a
              href="https://chat.whatsapp.com/H1IzMsNoExPAnmpSYydpXA"
              className="hover:text-darkBlue"
              target="_blank"
            >
              Community
            </a>
            <Link
              href="/register"
              className="p-3 px-6 text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight"
            >
              Register
            </Link>
          </div>

        </nav>
      </>
    );
}
 
export default Navbar;