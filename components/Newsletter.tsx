const Newsletter = () => {
    return (
      <>
        <div className="container flex flex-col md:items-center p-6 mx-auto my-10 space-y-0 md:space-y-0 ">
          <h2 className="text-2xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-4">
            Stay up-to-date with our latest news and updates.
          </p>
          <div className="flex flex-col md:flex-row my-2 md:space-x-4">
            <input
              type="email"
              className="w-full md:w-2/3 px-4 py-2 rounded-md border border-gray-300 mb-4 md:mb-0"
              placeholder="Your Email"
            />
            <button className="w-full md:w-1/3 px-4 py-2 bg-brightRed text-white rounded-md hover:bg-brightRedLight">
              Subscribe
            </button>
          </div>
        </div>
      </>
    );
}
 
export default Newsletter;