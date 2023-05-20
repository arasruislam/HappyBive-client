import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const loadedSingleToyDetails = useLoaderData();
    console.log(loadedSingleToyDetails);
    return (
        <div>
            hello
        </div>
    );
};

export default ToyDetails;