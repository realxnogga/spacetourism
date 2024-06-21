

import { Header } from "../component/header";
import { ScreenWidth } from "../component/screenwidth";
import { whatPlanetIsClickedState } from "../feature/planetSlice";
import { useDispatch, useSelector } from "react-redux";
import { whatPlanetIsClickedTemp } from "../feature/planetSlice";
import { useEffect } from "react";

export const Destination = () => {

    const dispatch = useDispatch();
    const screenwidth = ScreenWidth();

    const whatPlanetIsClicked = useSelector(whatPlanetIsClickedTemp);

    var { planet, planetName, planetDescription, planetKm, planetTime } = '';

    switch (whatPlanetIsClicked) {
        case 'moon':
            planet = '../assets/destination/image-moon.png';
            planetName = 'MOON';
            planetDescription = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
            planetKm = '384,400 KM';
            planetTime = '3 DAYS';
            break;

        case 'mars':
            planet = '../assets/destination/image-mars.png';
            planetName = 'MARS';
            planetDescription = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
            planetKm = '225 MIL. KM';
            planetTime = '9 MONTHS';
            break;

        case 'europa':
            planet = '../assets/destination/image-europa.png';
            planetName = 'EUROPA';
            planetDescription = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
            planetKm = '628 MIL. KM';
            planetTime = '3 YEARS';
            break;

        case 'titan':
            planet = '../assets/destination/image-titan.png';
            planetName = 'TITAN';
            planetDescription = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
            planetKm = '1.6 BIL. KM';
            planetTime = '7 YEARS';
            break;
        default:
            break;
    }

    const planetArray = ['moon', 'mars', 'europa', 'titan'];

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            dispatch(whatPlanetIsClickedState(planetArray[index]));

            index >= planetArray.length - 1 ? index = 0 : index++;

        }, 4000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden font-barlow">

            {
                screenwidth <= 450 ?
                    (
                        <section className="absolute inset-0 animate-zoom bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('../assets/destination/background-destination-mobile.jpg')` }}>
                        </section>
                    )
                    :
                    (
                        <section className="absolute inset-0 animate-zoom bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('../assets/destination/background-destination-desktop.jpg')` }}>
                        </section>
                    )
            }

            <Header />

            <div className={`${screenwidth <= 570 ? 'flex-col top-[7rem]' : ''} z-10 absolute top-[10rem] h-[26rem] w-[66rem] max-w-[85%] flex mo:flex-col mo:h-[70%]`}>

                <div className="h-full w-full flex flex-col">
                    <div className="w-full">
                        <h3 className={`${screenwidth <= 780 ? 'text-xl' : ''} text-3xl text-white text-start`}><span className="text-gray-400 pr-3 font-bold">01</span> PICK YOUR DESTINATION</h3>
                    </div>
                    <img src={planet} alt=""
                        className={`${screenwidth <= 780 ? 'h-[8rem] w-[8rem] animate-mobileplanetanimation' : 'animate-desktopplanetanimation'} h-[16rem] w-[16rem] mt-12 mo:h-[10rem] mo:w-[10rem] mo:mt-10`} />

                </div>
                <div className="h-full w-full flex flex-col justify-between mo:items-center ">
                    <nav className="w-full">
                        <ul className="h-[2rem] flex items-center justify-start gap-x-12 mo:gap-x-0 mo:justify-between">
                            <li onClick={() => { dispatch(whatPlanetIsClickedState('moon')) }} className={`${whatPlanetIsClicked === 'moon' ? 'text-gray-400 border-b-2' : ''} py-1 text-gray-200 hover:text-gray-300 hover:border-b-2 cursor-pointer`}>MOON</li>
                            <li onClick={() => { dispatch(whatPlanetIsClickedState('mars')) }} className={`${whatPlanetIsClicked === 'mars' ? 'text-gray-400 border-b-2' : ''} py-1  text-gray-200 hover:text-gray-300 hover:border-b-2 cursor-pointer`}>MARS</li>
                            <li onClick={() => { dispatch(whatPlanetIsClickedState('europa')) }} className={`${whatPlanetIsClicked === 'europa' ? 'text-gray-400 border-b-2' : ''} py-1 text-gray-200 hover:text-gray-300 hover:border-b-2 cursor-pointer`}>EUROPA</li>
                            <li onClick={() => { dispatch(whatPlanetIsClickedState('titan')) }} className={`${whatPlanetIsClicked === 'titan' ? 'text-gray-400 border-b-2' : ''} py-1 text-gray-200 hover:text-gray-300 hover:border-b-2 cursor-pointer`}>TITAN</li>
                        </ul>
                    </nav>
                    <h3 className={`${screenwidth <= 780 ? 'text-[4rem]' : 'text-[7rem]'} text-white`}>{planetName}</h3>
                    <p className="text-[1rem] text-gray-200 mo:text-[.9rem] mo:text-center">{planetDescription}</p>
                    <hr className="h-[1px] bg-gray-300 border-none" />

                    <div className={`flex mo:gap-x-10`}>
                        <div className="flex-grow text-gray-300">
                            <h4>AVG. DISTANCE</h4>
                            <p className={`${screenwidth <= 780 ? 'text-xl' : 'text-4xl'}  text-white font-semibold`}>{planetKm}</p>
                        </div>
                        <div className="flex-grow text-gray-300">
                            <h4>EST. TRAVEL TIME</h4>
                            <p className={`${screenwidth <= 780 ? 'text-xl' : 'text-4xl'} text-white font-semibold`}>{planetTime}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}