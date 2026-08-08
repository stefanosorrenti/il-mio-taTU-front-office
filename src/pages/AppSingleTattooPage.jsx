//IMPORTS
import {useParams} from "react-router-dom";

export default function AppSingleTattooPage( {tattoo} ) {
const {id} = useParams();

    return (
        <>
            <h2 className="text-primary">SINGLE TATTOO PAGE</h2>
            <p>Id tattoo: {id}</p>
            <p>Array tattoo: {tattoo}</p>
        </>
    )
}