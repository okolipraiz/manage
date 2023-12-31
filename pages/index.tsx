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
 const [countdownValue, setCountdownValue] = useState(1 * 24 * 60 * 60);


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
                `Conference for a Shared Vision: Building, Discussing, and
                Shaping the Future Together`. We at Manage makes it simple for software
                teams to plan day-to-day tasks while keeping the larger team
                goals in view.
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
                Whats makes Manage Different?
              </h2>
              <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                At Manage, we are dedicated to orchestrating conferences that
                transcend expectations and catalyze growth. With a passion for
                creating immersive and transformative experiences, our mission
                is to unite visionaries, thought leaders, and innovators under
                one roof, fostering connections that drive progress. Through
                meticulous planning, creative engagement, and a commitment to
                excellence, we ensure every conference becomes a stepping stone
                towards success, equipping attendees with the knowledge and
                inspiration to excel in their endeavors.
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
                      Unparalleled Networking
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Unparalleled Networking
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Immerse yourself in a dynamic ecosystem of professionals,
                    influencers, and experts. Forge invaluable connections that
                    extend far beyond the conference.
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
                      Cutting-Edge Insights
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Cutting-Edge Insights
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Dive into the latest trends, innovations, and breakthroughs
                    in your industry. Gain insights that will empower you to
                    stay ahead of the curve.
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
                      Interactive Workshops
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Interactive Workshops
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Elevate your skills and knowledge through hands-on workshops
                    led by industry luminaries. Get ready to roll up your
                    sleeves and engage in practical, actionable learning.
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
