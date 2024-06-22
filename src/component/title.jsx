
import { whatIsClickedInNavbarTemp } from "../feature/navbarSlice"
import { useSelector } from "react-redux"



export const Title = ({ design }) => {

    const whatIsClickedInNavbar = useSelector(whatIsClickedInNavbarTemp);

    var { num, text } = '';

    switch (whatIsClickedInNavbar) {
        case 'destination':
            ({ num, text } = { num: '01', text: 'PICK YOUR DESTINATION' })
            break;
        case 'crew':
            ({ num, text } = { num: '02', text: 'MEET YOUR CREW' })
            break;
        case 'technology':
            ({ num, text } = { num: '03', text: 'SPACE LAUNCH 101' })
            break;

        default:
            break;
    }

    return (
        <h3 className={`${design} z-10 w-[66rem] max-w-[100%] text-3xl text-white text-start tab:px-8 mo:text-center mo:text-2xl`}><span className="text-gray-400 pr-3 font-bold"> {num} </span>{text}</h3>
    )
}