const team = [
  {
    name: 'Egbuna Yossi Ifesinachi',
    role: 'CEO',
    image: '/img/team/ceo.jpeg'
  },
  {
    name: 'ODOEMELAM FEBECHI',
    role: 'CTO',
    image: '/img/team/cto.jpeg'
  },
  {
    name: 'Uduma Jeremiah Obasi',
    role: 'COO',
    image: '/img/team/coo.jpeg'
  },
  {
    name: 'Okoli Agozirim Praise',
    role: 'Team Lead - Frontend Engineer',
    image: '/img/team/fr.JPG'
  },
  {
    name: 'Okpala Chibuzor Promise',
    role: 'Jnr Frontend Engineer',
    image: '/img/team/jnr-fe.jpeg'
  },
  {
    name: 'Ibe Claudio',
    role: 'Backend Engineer',
    image: '/img/team/br.jpeg'
  },
  {
    name: 'Chinweuba Chimdindu C.',
    role: 'Team Lead - Graphics Designer',
    image: '/img/team/gr.jpeg'
  },
  {
    name: 'Chinweuba Chimdindu C.',
    role: 'Intern - Graphics Designer',
    image: '/img/team/intern-gr.jpeg'
  },
  {
    name: 'Achigasim Marycynthia .C',
    role: 'Social Media Manager',
    image: '/img/team/cm.jpeg'
  },
  {
    name: 'Emenahi Fortune Chidubem',
    role: 'Content Writer',
    image: '/img/team/cw.jpeg'
  },
  {
    name: 'Ezinando Callistus Chimuanya',
    role: 'UI designer',
    image: '/img/team/ui.jpeg'
  },
  {
    name: 'Okoro Gabrielle',
    role: 'Event Organizer',
    image: 'https://via.placeholder.com/300'
  }
];

const Cards = () => {
  return (
    <>
     
    
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
  {/* Card 1 */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {team.map((member, index) => (
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden relative group"
        key={index}
      >
        <img
          className="w-full h-72 object-cover object-center transition-transform duration-300 transform group-hover:scale-105"
          src={member.image}
          alt={member.name}
        />
        <div className="overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-70 flex flex-col justify-center items-center text-white">
          <h3 className="text-lg font-semibold mb-2">
            {member.name.toLowerCase()}
          </h3>
          <p className="text-gray-300">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default Cards;
