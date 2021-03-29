import React, {useState, useEffect} from 'react'
// import { Redirect } from 'react-router-dom';



const Splashscreen = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000)
    }, []);

    let Splash = (
        <h1>This is a splash screen</h1>
    )

    return (
        <div>
            {
            loading 
            ?   Splash
            :   <p>asd</p>
            }
        </div>
    )
}

export default Splashscreen
