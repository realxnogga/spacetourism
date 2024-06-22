

import { ScreenWidth } from "../component/screenwidth";
import { whatTechnologyIsClickedState } from "../feature/technologySlice";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../component/header";
import { whatTechnologyIsClickedTemp } from "../feature/technologySlice";
import { Title } from "../component/title";

export const Technology = () => {

    const dispatch = useDispatch();
    const screenwidth = ScreenWidth();

    const whatTechnologyIsClicked = useSelector(whatTechnologyIsClickedTemp);

    var { vehicle, vehicleName, vehicleDescription } = '';

    switch (whatTechnologyIsClicked) {
        case 'launchvehicle':
            vehicle = screenwidth <= 1000 ? '../assets/technology/image-launch-vehicle-landscape.jpg' : '../assets/technology/image-launch-vehicle-portrait.jpg';

            vehicleName = 'LAUNCH VEHICLE';
            vehicleDescription = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!';

            break;

        case 'spaceport':
            vehicle = screenwidth <= 1000 ? '../assets/technology/image-spaceport-landscape.jpg' : '../assets/technology/image-spaceport-portrait.jpg';

            vehicleName = 'SPACEPORT';
            vehicleDescription = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';

            break;

        case 'spacecapsule':
            vehicle = screenwidth <= 1000 ? '../assets/technology/image-space-capsule-landscape.jpg' : '../assets/technology/image-space-capsule-portrait.jpg';

            vehicleName = 'SPACE CAPSULE';
            vehicleDescription = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where youll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.';

            break;

        default:
            break;
    }

    return (
        <section className="relative h-screen w-screen flex flex-col items-end justify-start overflow-hidden font-barlow gap-y-2 mo:gap-y-8">
            {
                screenwidth <= 450 ?
                    (
                        <section className="absolute inset-0 animate-zoom bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('../assets/technology/background-technology-mobile.jpg')` }}>
                        </section>
                    )
                    :
                    (
                        <section className="absolute inset-0 animate-zoom bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('../assets/technology/background-technology-desktop.jpg')` }}>
                        </section>
                    )
            }
            <Header />
            <Title design={'mr-auto ml-auto'} />

            <div className={`z-10 h-fit w-[75.8rem] max-w-[100%] flex items-center tab:flex-col tab:flex-col-reverse mo:h-[80%] mini:h-[70%]`}>

                <div className="h-full w-full max-w-[90%] flex flex-col justify-center gap-y-10 tab:items-center tab:justify-start">

                    <div className="flex gap-x-14 tab:flex-col">
                        <div className="flex flex-col w-fit gap-5 tab:flex-row tab:justify-center tab:w-full mo:py-10 mini:py-5">
                            <div onClick={() => { dispatch(whatTechnologyIsClickedState('launchvehicle')) }} className={`${whatTechnologyIsClicked === 'launchvehicle' ? 'bg-white text-black' : 'text-white'} h-[5rem] w-[5rem] flex items-center justify-center border border-gray-400 hover:border-white rounded-[50%] text-3xl font-semibold tab:h-[2.5rem] tab:w-[2.5rem] tab:text-xl`}>1</div>
                            <div onClick={() => { dispatch(whatTechnologyIsClickedState('spaceport')) }} className={`${whatTechnologyIsClicked === 'spaceport' ? 'bg-white text-black' : 'text-white'} h-[5rem] w-[5rem] flex items-center justify-center border border-gray-400 hover:border-white rounded-[50%] text-3xl font-semibold tab:h-[2.5rem] tab:w-[2.5rem] tab:text-xl`}>2</div>
                            <div onClick={() => { dispatch(whatTechnologyIsClickedState('spacecapsule')) }} className={`${whatTechnologyIsClicked === 'spacecapsule' ? 'bg-white text-black' : 'text-white'} h-[5rem] w-[5rem] flex items-center justify-center border border-gray-400 hover:border-white rounded-[50%] text-3xl font-semibold tab:h-[2.5rem] tab:w-[2.5rem] tab:text-xl`}>3</div>
                        </div>

                        <div className="flex flex-col justify-start gap-y-5 tab:text-center">
                            <p className="text-gray-200 text-xl">THE TERMINOLOGY...</p>
                            <h3 className={`text-white text-7xl tab:text-4xl`}>{vehicleName}</h3>
                            <p className="text-gray-200 text-xl tab:text-lg mini:text-sm">{vehicleDescription}</p>

                        </div>
                    </div>
                </div>

                <div className={`bg-[url(${vehicle})] h-fit min-h-[27rem] min-w-[30rem] bg-right bg-contain tab:bg-center bg-no-repeat tab:bg-cover tab:w-full tab:min-h-[15rem] mini:min-h-[10rem]`}>

                </div>

            </div>
        </section>
    )
}