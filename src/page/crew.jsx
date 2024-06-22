

import { ScreenWidth } from "../component/screenwidth";
import { whatTechnologyIsClickedState } from "../feature/technologySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Header } from "../component/header";
import { whatTechnologyIsClickedTemp } from "../feature/technologySlice";
import { whatCrewIsClickedState } from "../feature/crewSlice";
import { whatCrewIsClickedTemp } from "../feature/crewSlice";
import { Title } from "../component/title";

export const Crew = () => {

    const dispatch = useDispatch();
    const screenwidth = ScreenWidth();

    const whatCrewIsClicked = useSelector(whatCrewIsClickedTemp);

    var { crew, crewRole, crewName, crewDescription } = '';

    switch (whatCrewIsClicked) {
        case 'doulashurley':
            crew = '../assets/crew/image-douglas-hurley.png';
            crewRole = 'COMMANDER';
            crewName = 'DOUGLAS HURLEY';
            crewDescription = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
            break;

        case 'markshuttleworth':
            crew = '../assets/crew/image-mark-shuttleworth.png';
            crewRole = 'MISSION SPECIALIST';
            crewName = 'MARK SHUTTLEWORTH';
            crewDescription = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
            break;

        case 'victorglover':
            crew = '../assets/crew/image-victor-glover.png';
            crewRole = 'PILOT';
            crewName = 'VICTOR GLOVER';
            crewDescription = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.';
            break;

        case 'anoushehansari':
            crew = '../assets/crew/image-anousheh-ansari.png';
            crewRole = 'FLIGHT ENGINEER';
            crewName = 'ANOUSHEH ANSARI';
            crewDescription = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.';
            break;

        default:
            break;
    }

    // const crewArray = ['doulashurley', 'markshuttleworth', 'victorglover', 'anoushehansari'];

    // useEffect(() => {
    //     let index = 0;

    //     const interval = setInterval(() => {
    //         dispatch(whatCrewIsClickedState(crewArray[index]));

    //         index >= crewArray.length - 1 ? index = 0 : index++;

    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-start overflow-hidden font-barlow gap-y-2 mo:gap-y-8">
            {
                screenwidth <= 450 ?
                    (
                        <section className="absolute inset-0 animate-zoom bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('../assets/crew/background-crew-mobile.jpg')` }}>
                        </section>
                    )
                    :
                    (
                        <section className="absolute inset-0 animate-zoom bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('../assets/crew/background-crew-desktop.jpg')` }}>
                        </section>
                    )
            }

            <Header />
            <Title />

            <div className={`z-10 h-[28rem] w-[66rem] max-w-[85%] flex absolute bottom-0 tab:h-[80%] mini:h-[75%] tab:flex-col mo:flex-col-reverse`}>

                <div className="h-full w-full flex flex-col justify-evenly mo:flex-col-reverse mo:justify-end">
                    <div className="flex flex-col gap-y-5 tab:gap-y-7 tab:text-center mo:gap-y-2 mini:gap-y-0">
                        <h3 className="text-gray-200 text-3xl mo:text-2xl">{crewRole}</h3>
                        <h2 className="text-white text-6xl mo:text-3xl">{crewName}</h2>
                        <p className="text-gray-200 text-xl h-[8rem] mini:text-sm mini:pt-5">{crewDescription}</p>
                    </div>

                    <div className="mo:py-5 mini:py-3">
                        <nav className="flex gap-x-5 tab:justify-center">
                            <li onClick={()=> {dispatch(whatCrewIsClickedState('doulashurley'))}} className={`${whatCrewIsClicked === 'doulashurley' ? 'bg-white' : ''} h-[1rem] w-[1rem] list-none bg-gray-400 rounded-[50%] hover:bg-gray-300 cursor-pointer`}></li>
                            <li onClick={()=> {dispatch(whatCrewIsClickedState('markshuttleworth'))}} className={`${whatCrewIsClicked === 'markshuttleworth' ? 'bg-white' : ''} h-[1rem] w-[1rem] list-none bg-gray-400 rounded-[50%] hover:bg-gray-300 cursor-pointer`}></li>
                            <li onClick={()=> {dispatch(whatCrewIsClickedState('victorglover'))}} className={`${whatCrewIsClicked === 'victorglover' ? 'bg-white' : ''} h-[1rem] w-[1rem] list-none bg-gray-400 rounded-[50%] hover:bg-gray-300 cursor-pointer`}></li>
                            <li onClick={()=> {dispatch(whatCrewIsClickedState('anoushehansari'))}} className={`${whatCrewIsClicked === 'anoushehansari' ? 'bg-white' : ''} h-[1rem] w-[1rem] list-none bg-gray-400 rounded-[50%] hover:bg-gray-300 cursor-pointer`}></li>
                        </nav>
                    </div>

                </div>

                <div className={`h-full w-full flex flex-col items-start justify-between gap-y-4 mo:gap-y-2 mo:items-center mo:border-b mini:gap-y-1 bg-[url(${crew})] bg-contain bg-center bg-no-repeat bg-right tab:bg-center`}>
                </div>

            </div>
        </section>
    )
}