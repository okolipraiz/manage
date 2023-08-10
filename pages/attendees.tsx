import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Attendee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: number;
}

interface Data {
  sheet1: Attendee[];
}

const Attendees = () => {
  const [data, setData] = useState<Data>({ sheet1: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="md:flex items-center justify-between">
          <div className="pt-2">
            <img src="/img/logo.svg" alt="logo" />
          </div>

          <div className="my-4 md:my-0 flex flex-row  items-center space-x-2">
            <div>
              <Link href="/register">
                <button className=" py-2 px-4 block  text-white border border-brightRed bg-brightRed rounded-md baseline hover:bg-brightRedLight">
                  Register
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

      <section className="flex flex-col justify-center items-center py-11 ">
        <h2 className="text-2xl text-center font-bold mb-4">
          List of
          <span className="text-brightRed">Attendees</span>
        </h2>

        {isLoading && <p>Loading...</p>}

        {data?.sheet1?.map((attende: Attendee, index: number) => (
          <div
            className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md mb-3"
            key={index}
          >
            {attende?.firstName} {attende?.lastName}
            <br />
            <span className="text-sm">{attende.email}</span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Attendees;
