

import { ScreenWidth } from "../component/screenwidth";
import { whatTechnologyIsClickedState } from "../feature/technologySlice";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../component/header";
import { whatTechnologyIsClickedTemp } from "../feature/technologySlice";


export const Technology = () => {

    const dispatch = useDispatch();
    const screenwidth = ScreenWidth();

    const whatTechnologyIsClicked = useSelector(whatTechnologyIsClickedTemp);

    var { vehicle, vehicleName, vehicleDescription } = '';

    switch (whatTechnologyIsClicked) {
        case 'launchvehicle':
            vehicle = screenwidth <= 450 ? '../assets/technology/image-launch-vehicle-landscape.jpg' : '../assets/technology/image-launch-vehicle-portrait.jpg';
            
            vehicleName = 'LAUNCH VEHICLE';
            vehicleDescription = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!';

            break;

        case 'spaceport':
            vehicle = screenwidth <= 450 ? '../assets/technology/image-spaceport-landscape.jpg' : '../assets/technology/image-spaceport-portrait.jpg';

            vehicleName = 'SPACEPORT';
            vehicleDescription = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';

            break;

        case 'spacecapsule':
            vehicle = screenwidth <= 450 ? '../assets/technology/image-space-capsule-landscape.jpg' : '../assets/technology/image-space-capsule-portrait.jpg';

            vehicleName = 'SPACE CAPSULE';
            vehicleDescription = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where youll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.';

            break;

        default:
            break;
    }

    return (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden font-barlow">
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

            <div className={`${screenwidth <= 780 ? 'flex-col top-[9rem] w-full max-w-full flex-col-reverse' : ''} z-10 absolute bottom-0 right-0 h-[34rem] w-[80rem] max-w-[90%] flex mo:h-[70%]`}>

                <div className="h-full w-full flex flex-col justify-center gap-y-10 mo:items-center">
                    <div className="w-full mo:px-3">
                        <h3 className={`${screenwidth <= 780 ? 'text-xl' : ''} text-3xl text-white text-start`}><span className="text-gray-400 pr-3 font-bold">03</span>SPACE LAUNCH 101</h3>
                    </div>

                    <div className="flex gap-x-14 mo:flex-col">
                        <div className="flex flex-col w-fit gap-y-5 mo:flex-row mo:w-full mo:justify-center mo:gap-x-5 pb-3">
                            <div onClick={() => { dispatch(whatTechnologyIsClickedState('launchvehicle')) }} className={`${whatTechnologyIsClicked === 'launchvehicle' ? 'bg-white text-black' : 'text-white'} h-[5rem] w-[5rem] flex items-center justify-center border border-gray-400 hover:border-white rounded-[50%] text-3xl font-semibold mo:h-[2.5rem] mo:w-[2.5rem] mo:text-xl`}>1</div>
                            <div onClick={() => { dispatch(whatTechnologyIsClickedState('spaceport')) }} className={`${whatTechnologyIsClicked === 'spaceport' ? 'bg-white text-black' : 'text-white'} h-[5rem] w-[5rem] flex items-center justify-center border border-gray-400 hover:border-white rounded-[50%] text-3xl font-semibold mo:h-[2.5rem] mo:w-[2.5rem] mo:text-xl`}>2</div>
                            <div onClick={() => { dispatch(whatTechnologyIsClickedState('spacecapsule')) }} className={`${whatTechnologyIsClicked === 'spacecapsule' ? 'bg-white text-black' : 'text-white'} h-[5rem] w-[5rem] flex items-center justify-center border border-gray-400 hover:border-white rounded-[50%] text-3xl font-semibold mo:h-[2.5rem] mo:w-[2.5rem] mo:text-xl`}>3</div>
                        </div>

                        <div className="flex flex-col gap-y-5 mo:gap-y-2 mo:text-center mo:px-3">
                            <p className="text-gray-200 text-xl">THE TERMINOLOGY...</p>
                            <h3 className={`${screenwidth <= 1180 ? 'text-4 xl' : ''} text-white text-7xl mo:text-4xl`}>{vehicleName}</h3>
                            <p className="text-gray-200 text-xl mo:text-lg">{vehicleDescription}</p>

                        </div>  
                    </div>
                </div>

                <div className={`${screenwidth <= 1180 ? 'bg-cover !bg-center min-h-[10rem]' : ''} h-full w-full bg-contain bg-no-repeat`}
                    style={{ backgroundImage: `url('${vehicle}')`, backgroundPosition: 'right' }}>

                </div>
            </div>
        </section>
    )
}