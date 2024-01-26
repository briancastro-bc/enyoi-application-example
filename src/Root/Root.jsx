import { Outlet, } from 'react-router-dom';

import Sidebar from '../layout/Sidebar';

const Root = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <main className='w-full h-screen overflow-hidden'>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;