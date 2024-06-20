
import { useEffect, useState } from "react";

export const ScreenWidth = () => {

    // Get the width of the screen
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (screenWidth)
}


