

import { ScreenWidth } from "../component/screenwidth";
import { whatTechnologyIsClickedState } from "../feature/technologySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Header } from "../component/header";
import { whatTechnologyIsClickedTemp } from "../feature/technologySlice";
import { whatCrewIsClickedState } from "../feature/crewSlice";
import { whatCrewIsClickedTemp } from "../feature/crewSlice";

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

    const crewArray = ['doulashurley', 'markshuttleworth', 'victorglover', 'anoushehansari'];

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            dispatch(whatCrewIsClickedState(crewArray[index]));

            index >= crewArray.length - 1 ? index = 0 : index++;

        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden font-barlow">
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

            <div className={`${screenwidth <= 780 ? 'flex-col top-[9rem] w-full max-w-full flex-col-reverse justify-center' : ''} z-10 absolute bottom-0 right-0 h-[34rem] w-[80rem] max-w-[90%] flex mo:h-[70%]`}>

                <div className={`${screenwidth <= 780 ? 'px-6' : ''} h-full w-full flex flex-col justify-between py-14 gap-y-10 mo:items-center mo:flex-col-reverse mo:gap-y-5 mo:px-3`}>
                    <div className="w-full mo:px-3 flex justify-start mo:items-center mo:justify-center">
                        <h3 className={`${screenwidth <= 780 ? 'text-xl' : ''} text-3xl text-white text-start`}><span className="text-gray-400 pr-3 font-bold">02</span>MEET YOUR CREW</h3>
                    </div>

                    <div className={`flex flex-col gap-y-5 mo:gap-y-1 mo:text-center`}>
                        <h4 className="text-gray-400 text-4xl mo:text-2xl   ">{crewRole}</h4>
                        <h2 className="text-white text-6xl mo:text-3xl">{crewName}</h2>
                        <p className="text-gray-400 text-2xl mo:text-xl ">{crewDescription}</p>
                    </div>

                    <div className="flex gap-x-7">
                        <div
                            onClick={() => { dispatch(whatCrewIsClickedState('doulashurley')) }}
                            className={`${whatCrewIsClicked === 'doulashurley' ? 'bg-white' : ''} h-[1.1rem] w-[1.1rem] bg-gray-400 rounded-[50%] hover:bg-gray-100 `}>

                        </div>
                        <div
                            onClick={() => { dispatch(whatCrewIsClickedState('markshuttleworth')) }}
                            className={`${whatCrewIsClicked === 'markshuttleworth' ? 'bg-white' : ''} h-[1.1rem] w-[1.1rem] bg-gray-400 rounded-[50%] hover:bg-gray-100 `}>

                        </div>
                        <div
                            onClick={() => { dispatch(whatCrewIsClickedState('victorglover')) }}
                            className={`${whatCrewIsClicked === 'victorglover' ? 'bg-white' : ''} h-[1.1rem] w-[1.1rem] bg-gray-400 rounded-[50%] hover:bg-gray-100 `}>

                        </div>
                        <div
                            onClick={() => { dispatch(whatCrewIsClickedState('anoushehansari')) }}
                            className={`${whatCrewIsClicked === 'anoushehansari' ? 'bg-white' : ''} h-[1.1rem] w-[1.1rem] bg-gray-400 rounded-[50%] hover:bg-gray-100 `}>

                        </div>
                    </div>
                </div>

                <div className={`${screenwidth <= 1180 ? 'min-h-[15rem]' : ''} h-full w-full bg-contain bg-center bg-no-repeat`}
                    style={{ backgroundImage: `url('${crew}')` }}>

                </div>
            </div>
        </section>
    )
}