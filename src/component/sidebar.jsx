
import { useSelector } from "react-redux"
import { isSidebarOpenTemp } from "../feature/navbarSlice"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { whatIsClickedInNavbarState } from "../feature/navbarSlice";
import { whatIsClickedInNavbarTemp } from "../feature/navbarSlice";
import { clearIsSidebarOpenState } from "../feature/navbarSlice";

export const Sidebar = () => {

    const dispatch = useDispatch();

    const isSidebarOpen = useSelector(isSidebarOpenTemp);
    const whatIsClickedInNavbar = useSelector(whatIsClickedInNavbarTemp);

    return (
        <aside className={`${isSidebarOpen ? 'w-[15rem]' : 'w-0'} absolute top-0 right-0 bg-white bg-opacity-5 backdrop-blur-lg h-screen  duration-300 flex items-start justify-center pt-40`}>

            <nav className="h-fit w-full">
                <ul className="flex flex-col gap-y-7">
                    <NavLink to={'/'} className={'h-full'}>
                        <li
                            onClick={() => { 
                                dispatch(whatIsClickedInNavbarState('home'));
                                dispatch(clearIsSidebarOpenState());
                                
                            }}
                            className={`${whatIsClickedInNavbar === 'home' ? 'border-l-4 text-white' : ''} pl-8 text-lg text-gray-200 text-nowrap hover:border-l-4 hover:text-white`}><strong className="pr-2">00</strong> HOME
                        </li>
                    </NavLink>

                    <NavLink to={'/destination'} className={'h-full'}>
                        <li
                            onClick={() => { 
                                dispatch(whatIsClickedInNavbarState('destination'));
                                dispatch(clearIsSidebarOpenState()); 
                            }}
                            className={`${whatIsClickedInNavbar === 'destination' ? 'border-l-4 text-white' : ''} pl-8 text-lg text-gray-200 text-nowrap hover:border-l-4 hover:text-white`}><strong className="pr-2">01</strong> DESTINATION
                        </li>
                    </NavLink>

                    <NavLink to={'/crew'} className={'h-full'}>
                        <li 
                         onClick={() => { 
                            dispatch(whatIsClickedInNavbarState('crew'));
                            dispatch(clearIsSidebarOpenState()); 
                        }}
                        className={`${whatIsClickedInNavbar === 'crew' ? 'border-l-4 text-white' : ''} pl-8 text-lg text-gray-200 text-nowrap hover:border-l-4 hover:text-white`}><strong className="pr-2">02</strong> CREW
                        </li>
                    </NavLink>

                    <NavLink to={'/technology'} className={'h-full'}>
                        <li 
                         onClick={() => { 
                            dispatch(whatIsClickedInNavbarState('technology'))
                            dispatch(clearIsSidebarOpenState()); 
                        }}
                        className={`${whatIsClickedInNavbar === 'technology' ? 'border-l-4 text-white' : ''} pl-8 text-lg text-gray-200 text-nowrap hover:border-l-4 hover:text-white`}><strong className="pr-2">03</strong> TECHNOLOGY
                        </li>
                    </NavLink>
                </ul>
            </nav>

        </aside>
    )
}