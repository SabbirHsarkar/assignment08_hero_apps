import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TopShowApp from '../../Components/ShowingApps/TopShowApp';
import { useLoaderData } from 'react-router';
import { useNavigation } from 'react-router';
import Loader from '../../Components/Loader/Loader';
import StatesSection from '../../Components/StatesSection/StatesSection';


const Home = () => {
    // const dataJson=useLoaderData();
    const appData=useLoaderData();
    console.log(appData)
   const navigation = useNavigation();

   if (navigation.state === 'loading') {
        return <Loader></Loader>
;
    }

     const popularApp = appData.filter((app) => app.popular === "popular");
  
    return (
        <div>
           <Banner></Banner>
           <StatesSection></StatesSection>
           <TopShowApp popularApp={popularApp}></TopShowApp>

            
            
           
        </div>
    );
};

export default Home;