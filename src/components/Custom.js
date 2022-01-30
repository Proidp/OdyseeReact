import React, {useState, useEffect} from 'react';

function useWindowSize(){
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
}


function Custom(){
    const [height, width] = useWindowSize();
    return(
        <>
            height:{height}, width: {width}
        </>
    )
}

export default Custom;

