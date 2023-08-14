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
              <Link href="#" className="hover:text-darkBlue">
                Events
              </Link>
              <Link href="/speaker" className="hover:text-darkBlue">
                Speakers
              </Link>
              {/* <Link href="#" className="hover:text-darkBlue">
                Team
              </Link> */}
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
          </div>
        </nav>
      </>
    );
}
 
export default Navbar;