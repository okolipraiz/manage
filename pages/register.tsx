import Link from 'next/link';
import { IoCopy } from 'react-icons/io5';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [settings, setSettings] = useState('');

  const saveSettings = (settings: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setSettings(settings);
        resolve(settings);
      }, 2000);
    });
  };

  const randomID = Math.random();

  const { firstName, lastName, email, phone } = formData;

  const handleChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const url = `${process.env.NEXT_PUBLIC_API_URL}`;
    const body = {
      sheet1: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      }
    };

    try {
      setIsSubmitting(true);
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
          //  Authorization: "Bearer your-access-token", // Replace with your actual token
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not OK');
      }

      const json = await response.json();

      // Do something with the response object
      console.log(json.sheet1);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000); // Delay of 5000 milliseconds (5 seconds)
    } catch (error) {
      console.error('Error:', error);
      toast.promise(saveSettings(settings), {
        loading: 'Registering...',
        success: <b>Registration Complete!</b>,
        error: <b>Could not save.</b>
      });
    } finally {
      setIsSubmitting(false); // Set submitting state to false after request completes
      toast.promise(saveSettings(settings), {
        loading: 'Registering...',
        success: <b>Registration Complete!</b>,
        error: <b>Could not save.</b>
      });
    }
  };

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className=" md:flex items-center justify-between">
          <div className="pt-2">
            <img src="/img/logo.svg" alt="logo" />
          </div>

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

      <section className="flex flex-col justify-center items-center h-screen">
        {!isSubmitted && (
          <h2 className="text-2xl text-center font-bold mb-4">
            Register for Conference <br /> Using{' '}
            <span className="text-brightRed">Manage</span>
          </h2>
        )}

        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  onChange={handleChange}
                  value={firstName}
                  name="firstName"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  onChange={handleChange}
                  value={lastName}
                  name="lastName"
                  required
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  onChange={handleChange}
                  value={email}
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone"
                >
                  phone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-phone"
                  onChange={handleChange}
                  value={phone}
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="p-4 w-full text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Register for Event'}
            </button>
          </form>
        ) : (
          <section className="flex flex-col justify-center items-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">
                Event Registration{' '}
                <span className="text-brightRed">Successful</span>!
              </h2>
              <p className="text-gray-600 mb-8">
                Thank you for registering for the event. Here is your ticket:
              </p>
              <div className="bg-gray-200 p-4 rounded-lg relative">
                <p className="text-2xl font-semibold">User ID:</p>

                <p className="text-2xl font-bold text-slate-600">
                  AZ {randomID}
                </p>
                <CopyToClipboard
                  text={`AZ ${randomID}`}
                  onCopy={() =>
                    toast.success('User ticket Id copied successfully')
                  }
                >
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-indigo-500 focus:outline-none">
                    <IoCopy />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Register;
