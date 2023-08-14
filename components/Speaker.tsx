const Speakers = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src="/img/speakers/speaker-1.png"
              alt="Card Image"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 p-4 md:pt-14">
            <h3 className="text-xl font-semibold mb-2">Mr Amadi</h3>
            <p className="text-gray-600 py-10">
              A lecturer at the Federal University of Technology Owerre ,
              Nigeria. He is a seasoned software developer and a tech
              enthusiast. He is currently the head of the department of Computer
              Science, Federal University of Technology Owerre.
            </p>

            <span className="text-gray-600">Topic: Tech and Light</span>
            <br />
            <span className="text-gray-600">Time: 12:00PM</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;
