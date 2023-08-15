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

        <section id="cta" className="bg-brightRed">
          <div className="container flex flex-col items-center justify-between px-6 md:px-0 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
              Empowering Conferences, Transforming Futures.
            </h2>

            <button className="p-3 px-6 text-brightRed bg-white rounded-md baseline hover:bg-brightRedLight hover:text-white">
              Get Started
            </button>
          </div>
        </section>
      </>
    );
}
 
export default Newsletter;