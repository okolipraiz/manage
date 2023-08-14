import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Speakers from "@/components/Speaker";

const Speaker = () => {
    return (
      <>
        <Navbar />

        <div className="container flex flex-col items-center p-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <h4 className="text-center text-4xl font-bold pb-10">
            Conference <span className="text-brightRed">Speaker</span>
          </h4>
          <Speakers />
        </div>

        <div className="container flex flex-col items-center p-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <h4 className="text-center text-4xl font-bold pb-4">
            Conference <span className="text-brightRed">Teams </span> Organizer
          </h4>

          <Cards />
        </div>

        <Location />
        <Newsletter />
        <Footer />
      </>
    );
}
 
export default Speaker;