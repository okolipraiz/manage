import Footer from '@/components/Footer';
import Location from '@/components/Location';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';

const Events = () => {
  return (
    <>
      <main>
        <Navbar />

        <section id="events" className="container flex flex-col mx-auto pt-11">
          <div className="p-8">
            <h1 className="text-3xl font-semibold mb-4">Upcoming Event</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover object-center"
                src="/img/fliers/coming.jpeg"
                alt="Event"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  August 16th Event
                </h3>
                <p className="text-gray-600">
                  Join us for an exciting event on August 16th!
                </p>
                <Link href="/speaker">
                  <span className="text-gray-600 text-sm py-3">- View Speakers</span>
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">More Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Event 1 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="/img/fliers/later.jpeg"
                  alt="Event 1"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Event 1</h3>
                  <p className="text-gray-600">Join us for an amazing event!</p>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="/img/fliers/later.jpeg"
                  alt="Event 2"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Event 2</h3>
                  <p className="text-gray-600">
                    Don`t miss out on this great event!
                  </p>
                </div>
              </div>
              {/* You can add more events in a similar fashion */}
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Event 1 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="/img/fliers/later.jpeg"
                  alt="Event 1"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Event 1</h3>
                  <p className="text-gray-600">Talk with Joe!</p>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="/img/fliers/later.jpeg"
                  alt="Event 2"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Event 2</h3>
                  <p className="text-gray-600">
                    Opportunity comes but once!
                  </p>
                </div>
              </div>
              {/* Event 2 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="/img/fliers/later.jpeg"
                  alt="Event 2"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Event 2</h3>
                  <p className="text-gray-600">
                  World and Technology
                  </p>
                </div>
              </div>
              {/* You can add more events in a similar fashion */}
            </div>
          </div>
        </section>

        <Location />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default Events;
