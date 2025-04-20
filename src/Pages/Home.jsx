import React from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    // data

    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            <Hero/>
            <PhonesContainer phones={data}/>
        </div>
    );
};

export default Home;