import React from 'react';
import Logo from '../component/extra/Logo';
import { Link, Outlet } from 'react-router';
import { TfiAlignLeft } from "react-icons/tfi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSendTimeExtension } from "react-icons/md";

const DashBoardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <TfiAlignLeft />
      </label>
      <Logo></Logo>
    </nav>
    {/* Page content here */}
    <div className="p-4">
      <Outlet></Outlet>
    </div>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-64 is-drawer-open:w-64">
      {/* Sidebar content here */}
       <ul className="menu w-full">
         <h1 className='text-secondary text-lg font-bold'>MENU</h1>
        <li>
          <Link to='/' className="font-semibold" data-tip="Homepage">
            {/* Home icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="">Home</span>
          </Link>
        </li>
  <li><Link to='/Dashboard/Send-Service' className="font-semibold" data-tip="Send-Service">
                <MdOutlineSendTimeExtension /> <span> Send-Service </span>
                </Link></li>
   <li>
      <Link className="font-semibold " to='My-Percel' data-tip='My-Percel'><MdOutlineHomeRepairService /><span >My-Percel</span></Link>
   </li>
  <li>
       <Link className="font-semibold" to='All-deliverys' data-tip='All-deliverys'><TbTruckDelivery /> <span>All-deliverys</span></Link>
  </li>
       </ul>
      <ul className="menu w-full ">
        <h1 className='text-secondary text-lg font-bold'>GENERAL</h1>
        <li>
          <Link className="" data-tip="Settings">
            {/* Settings icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span className="">Settings</span>
          </Link>
        
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
};

export default DashBoardLayout;