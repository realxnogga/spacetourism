import { Header } from "../component/header";
import { ScreenWidth } from "../component/screenwidth";

export const Home = () => {

    const screenwidth = ScreenWidth();

    return (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden font-barlow">
            {
                screenwidth <= 450 ?
                    (
                        <section className="absolute inset-0 animate-zoom bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('../assets/home/background-home-mobile.jpg')` }}>
                        </section>
                    )
                    :
                    (
                        <section className="absolute inset-0 animate-zoom bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('../assets/home/background-home-desktop.jpg')` }}>
                        </section>
                    )
            }

            <Header />

            <div className={`${screenwidth <= 570 ? 'flex-col top-[7rem]' : ''} z-10 absolute top-[10rem] h-[26rem] w-[66rem] max-w-[85%] flex mo:flex-col mo:h-[70%]`}>

                <div className="h-full w-full flex flex-col justify-end mo:items-center ">
                    <p className={`text-[1.4rem] text-gray-200 font-semibold mo:text-[1rem]`}>SO, YOU WANT TO TRAVEL TO</p>
                    <h3 className={`${screenwidth <= 780 ? 'text-[5rem]' : ''} text-[9rem] text-white`}>SPACE</h3>
                    <p className="text-[1.2rem] text-gray-200 mo:text-[.9rem] mo:text-center">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="h-full w-full flex items-end justify-end mo:justify-center">
                    <img src="../assets/shared/rotatingearth.gif" alt=""
                        className={`${screenwidth <= 780 ? 'h-[12rem] w-[12rem]' : ''} h-[16rem] w-[16rem]`} />

                </div>
            </div>

        </section >
    );
};
