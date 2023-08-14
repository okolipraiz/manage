import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import Location from '@/components/Location';
import Newsletter from '@/components/Newsletter';

export default function Home() {

//  const initialCountdownValue =
//    parseInt(localStorage.getItem('countdownValue')) || 10;
 const [countdownValue, setCountdownValue] = useState(21 * 24 * 60 * 60);


    useEffect(() => {
      if (countdownValue <= 0) {
        // Countdown reached 0, do something here
        return;
      }

      // localStorage.setItem('countdownValue', countdownValue.toString());

      const interval = setInterval(() => {
        setCountdownValue((prevValue) => prevValue - 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [countdownValue]);

    const formatTime = (seconds: number) => {
      const days = Math.floor(seconds / (24 * 60 * 60));
      const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((seconds % (60 * 60)) / 60);
      const remainingSeconds = seconds % 60;

      return `${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
    };

  return (
    <>
      <Head>
        <title>Manage Landing Page</title>
        <meta
          name="description"
          content="Learning to be better at what I do is key"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        {/* Hero */}
        <section id="hero">
          <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            {/* Left side */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h1 className="md:pt-12 max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                Bring everyone together to{' '}
                <span className="text-brightRed">build</span> &{' '}
                <span className="text-brightRed">discuss</span> the future.
              </h1>
              <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/register"
                  className="p-3 px-6 text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Right side */}
            <div>
              <img src="/img/illustration-intro.svg" alt="illustration" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features">
          <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                Whats different about Manage?
              </h2>
              <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>

            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* List items 1 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-4 md:flex-row">
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-md md:py-1 bg-brightRed">
                      01
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Track company-wide progress
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Track company-wide progress
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    ab iste nesciunt illum atque excepturi? Ex, pariatur iure
                    sequi assumenda doloribus laboriosam fugiat voluptates
                    veritatis dolor quia. Eius, repellat saepe.
                  </p>
                </div>
              </div>

              {/* List items 2 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-4 md:flex-row">
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-md md:py-1 bg-brightRed">
                      02
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      company-wide progress across
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Track company-wide progress
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    ab iste nesciunt illum atque excepturi? Ex, pariatur iure
                    sequi assumenda doloribus laboriosam fugiat voluptates
                    veritatis dolor quia. Eius, repellat saepe.
                  </p>
                </div>
              </div>

              {/* List items 3 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-4 md:flex-row">
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-md md:py-1 bg-brightRed">
                      03
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Only God can do it
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Only God can do it
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    ab iste nesciunt illum atque excepturi? Ex, pariatur iure
                    sequi assumenda doloribus laboriosam fugiat voluptates
                    veritatis dolor quia. Eius, repellat saepe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="countdown">
          <div className="px-4 pt-11">
            <h1 className="text-2xl font-bold text-center md:text-4xl">
              CountDown to <span className="text-brightRed">Event</span>
              <br />
              {countdownValue > 0 ? (
                <span> {formatTime(countdownValue)}</span>
              ) : (
                <span>0 days (Countdown has ended)</span>
              )}
            </h1>
            <div className="flex justify-center pt-4 pb-12">
              <Link
                href="/register"
                className="p-3 px-6 text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight"
              >
                Register
              </Link>
              <Link
                href="/attendees"
                className="ml-2 p-3 px-6 text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight"
              >
                Attendees
              </Link>
            </div>
          </div>
        </section>

        <Location />

        <Newsletter />

        <Footer />
      </main>
    </>
  );
}
