import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import DogsList from "./components/DogsList";
import DogsImages from "./components/DogsImages";


function App() {
    const [images, setImages] = useState(null)
    return (
        <>
        <div>
            <DogsList click={setImages}/>
        </div>
        <div>
            {images && <DogsImages dog={images}/>}
        </div>
        </>
    );
}

export default App;

