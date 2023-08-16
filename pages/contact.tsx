import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import { useRef } from "react";
import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";

const Contact = () => {

      const form = useRef(null);

      // const handleSubmit = (event: React.FormEvent) => {
      //   event.preventDefault();
      //   emailjs
      //     .sendForm(
      //       `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
      //       `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      //       form.current as HTMLFormElement,
      //       `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
      //     )
      //     .then(
      //       (result: any) => {
      //         toast.success(
      //           'Message sent successfully, we will get back to you soon.'
      //         );
      //         console.log(result.text);
      //         form.current.reset();
      //       },
      //       (error: any) => {
      //         console.log(error.text);
      //       }
      //     );
      // };

    return (
      <>
        <nav className="relative container mx-auto p-6">
          <div className=" md:flex items-center justify-between">
            <Link href="/">
              <div className="pt-2">
                <img src="/img/logo.svg" alt="logo" />
              </div>
            </Link>

            <div className="my-4 md:my-0 flex flex-row  items-center space-x-2">
              <div>
                <Link href="/">
                  <button className="py-2 px-4 block  text-white border border-brightRed bg-brightRed rounded-md baseline hover:bg-brightRedLight">
                    Go back
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/attendees">
                  <button className="border border-brightRed bg-transparent py-2 px-4 rounded-md text-brightRed hover:bg-brightRed hover:text-white hover:border-transparent transition duration-300">
                    View Attendees
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white rounded-md shadow-md p-8 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  name="user_name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  name="user_email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brightRed text-white py-2 px-4 rounded-md hover:bg-brightRedLight"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <Newsletter />
        <Footer />
      </>
    );
}
 
export default Contact;