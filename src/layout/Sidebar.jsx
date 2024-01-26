import { Link, } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-screen w-[350px] bg-white flex flex-col py-6 px-7">
      <h1 className="text-2xl font-bold text-orange-500">
        Dashboard
      </h1>
      <div className="pt-7 flex flex-col gap-2">
        <Link to={'/dashboard/characters'} className='w-full py-5 px-4 bg-orange-500 text-white rounded-lg'>
          Personajes
        </Link>
        <Link to={'/email'} className='w-full py-5 px-4 bg-orange-500 text-white rounded-lg'>
          Enviar email
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;