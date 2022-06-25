import React from 'react';
import Banner from '../Banner/Banner';
import CovidUpdate from '../CovidUpdate/CovidUpdate';
import List from '../List/List';
import UpCommingApp from '../UpCommingApp/UpCommingApp';
import Vitals from '../Vital/Vitals';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Vitals></Vitals>
            <List></List>
            <UpCommingApp></UpCommingApp>
           <CovidUpdate></CovidUpdate>
        </div>
    );
};

export default Home;