import React from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer';
import { useLoaderData } from 'react-router';
import  { useState } from 'react';
const Home = () => {
    // data
    const data = useLoaderData()
   // const [phones, setPhones] = useState(data)
    const [phones, setPhones] = useState(data)

       const handleSearch = (e, text) => {

        e.preventDefault();

        if(text === '') return setPhones(data)

        const searchedPhones = data.filter(phone => {
             phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
             phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())

            }
            )
                         setPhones(searchedPhones);

        setPhones();
    }
       return (
        <div>
            <Hero handleSearch={handleSearch} />
            <PhonesContainer phones={phones}/>
        </div>
    );
};

export default Home;