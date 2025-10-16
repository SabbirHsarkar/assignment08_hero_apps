import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import SingleApp from '../App/SingleApp';
import Searching from '../../Pages/ErrorPage/Searching';
import AppsNotFound from '../../Pages/ErrorPage/AppsNotFound';
import Loader from '../Loader/Loader';


const Apps = () => {
    const apps=useLoaderData();
    console.log(apps);


  // states
  const [searchValue, setSearchValue] = useState('');
  const [filteredApps, setFilteredApps] = useState(apps);
  const [isSearching, setIsSearching] = useState(false);

  // search
  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredApps(apps);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const filtered = apps.filter(app =>
        app.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredApps(filtered);
      setIsSearching(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue, apps]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
      const navigation = useNavigation();

if (navigation.state === "loading") {
  return <Loader />;
}
   

    return (
       <div className="p-4 md:p-10 mx-auto">
      <div className="flex flex-col justify-center items-center mb-6">
        <h3 className="font-bold text-3xl text-center">Our All Applications</h3>
        <p className="text-[#627382] my-4 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
        <h1 className="text-xl font-semibold">
        (  <span className="text-primary">{filteredApps.length}</span>)
         Apps Found
        </h1>
        <input
          type="text"
          placeholder="Search apps..."
          value={searchValue}
          onChange={handleSearch}
          className="input input-bordered w-full sm:w-72"
        />
      </div>

      
      {isSearching && <Searching />}
      {!isSearching && filteredApps.length === 0 && <AppsNotFound />}

     
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredApps.map(app => (
          <SingleApp key={app.id} app={app} />
        ))}
      </div>
    </div>
    );
};

export default Apps;