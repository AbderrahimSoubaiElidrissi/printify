 import Moment from "react-moment";
import Link from "./Link";

const Layout = (props)=> {
  
    const dateToFormat = new Date();
    return (
      <div className="bg-gray-100  leading-normal tracking-normal ">
        <div className="flex md:flex-row-reverse flex-wrap ">
          <div className=" md:w-4/5 bg-gray-100 ">
            <header className="container md:w-4/5 flex flex-row justify-between items-center bg-gray-100 py-6 px-8  fixed border-solid border-b-2 border-gray-200">
              <h1 className=" hidden md:block font-black text-lg  text-gray-700">
                Welcome Admin !{" "}
                <img
                  src="/images/waving-hand.svg"
                  alt="waving hand"
                  className="inline-block w-8"
                />{" "}
              </h1>
              <h1 className=" md:hidden font-black text-2xl  text-indigo-600">
                Printify
              </h1>
              <div className="">
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-500 ">
                  <Moment date={dateToFormat} format="LL"></Moment>
                </span>
                <i className="fas fa-bell pl-2 md:pl-3  text-indigo-600"></i>
              </div>
            </header>
            <main className="h-screen bg-gray-100 mt-20">
              {props.children}
            </main>
          </div>

          <nav className="w-full md:w-1/5 bg-white  px-2 text fixed bottom-0 md:py-8 md:top-0 md:left-0 h-16 md:h-screen border-r-2 border-gray-200">
            <div className="flex flex-col justify-between h-full md:relative mx-auto  lg:px-6">
              <h1 className="hidden md:block font-black text-2xl  text-indigo-600">
                Printify
              </h1>
              <ul className="list-reset flex flex-row md:flex-col text-center md:text-left ">
                <li className="mr-3 flex-1 ">
                <Link href="/">
                  <a
                   
                    className="group block py-1 md:py-3 pl-1 align-middle  no-underline "
                  >
                    <i className="fas fa-columns pr-0 md:pr-3  text-indigo-400 group-hover:text-indigo-600 group-hover:text-lg" ></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-500  block md:inline-block group-hover:text-indigo-600 group-hover:font-bold group-hover:uppercase">
                      Dashboard
                    </span>
                  </a>
                  </Link>
                </li>
                <li className="mr-3 flex-1  text-indigo-400">
                <Link href="/queue">
                  <a
                   
                    className="group block py-1 md:py-3 pl-1 align-middle  no-underline hover:text-indigo-400 "
                  >
                    <i className="fas fa-print pr-0 md:pr-3 group-hover:text-indigo-600 group-hover:text-lg" ></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-500  block md:inline-block group-hover:text-indigo-600 group-hover:font-bold group-hover:uppercase">
                      Queue
                    </span>
                  </a>
                  </Link>
                </li>
                <li className="mr-3 flex-1">
                <Link href="/analytics">
                  <a
                  
                    className="group block py-1 md:py-3 pl-1 align-middle  no-underline hover:text-indigo-400 "
                  >
                    <i className="fas fa-chart-line pr-0 md:pr-3  text-indigo-400  group-hover:text-indigo-600 group-hover:text-lg"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-500  block md:inline-block group-hover:text-indigo-600 group-hover:font-bold group-hover:uppercase">
                      Analytics
                    </span>
                  </a>
                  </Link>
                </li>
                <li className="mr-3 flex-1">
                <Link href="/setting">
                  <a
                    
                    className="group block py-1 md:py-3 pl-1 align-middle  no-underline hover:text-indigo-400"
                  >
                    <i className="fas fa-cog pr-0 md:pr-3  text-indigo-400 group-hover:text-indigo-600 group-hover:text-lg"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-500  block md:inline-block group-hover:text-indigo-600 group-hover:font-bold group-hover:uppercase">
                      Setting
                    </span>
                  </a>
                  </Link>
                </li>
              </ul>
              <Link href="#" >
                <a className="group hidden md:block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline ">
                  <i className="fas fa-sign-out-alt pr-0 md:pr-3 text-indigo-400 group-hover:text-indigo-600 group-hover:text-lg"></i>
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-500  block md:inline-block group-hover:text-indigo-600 group-hover:font-bold group-hover:uppercase">
                    Sign Out 
                  </span>
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  
}

export default Layout;
