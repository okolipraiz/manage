const Footer = () => {
    return (
      <>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Manage. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </>
    );
}
 
export default Footer;