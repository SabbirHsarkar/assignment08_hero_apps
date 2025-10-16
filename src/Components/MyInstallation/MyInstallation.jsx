
import React, { useEffect, useState } from "react";
import download from "../../assets/asset/icon-downloads.png"
import rating from "../../assets/asset/icon-ratings.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigation } from "react-router";
import Loader from "../Loader/Loader";


const MyInstallation = () => {




     const [installedApps, setInstalledApps] = useState([]);
       const [sortOrder, setSortOrder] = useState("none");

     useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);


  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.info("App uninstalled successfully!", {
    position: "top-center",
    autoClose: 2000,
    });
  };

//  sort-handle

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sortedApps = [...installedApps];
    if (order === "low-high") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    } else if (order === "high-low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    }

    setInstalledApps(sortedApps);
  };

    const navigation = useNavigation();
    if (navigation.state === "loading") {
  return <Loader />;
}

    return (
        

        <div className="w-11/12 mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2 text-center">Your Installed Apps</h1>
      <p className="text-gray-500 text-center mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/*Sort */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">
          {installedApps.length} Apps Found
        </h3>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-gray-600">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
            className="select select-bordered select-sm"
          >
            <option value="none">Default</option>
            <option value="low-high">Low → High</option>
            <option value="high-low">High → Low</option>
          </select>
        </div>
      </div>



      {/* Installed Apps  */}
      {installedApps.length === 0 ? (
        <p className="text-gray-500 text-center">No installed apps found.</p>
      ) : (
        installedApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center bg-base-200 p-5 mb-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{app.title}</h2>
                <div className="flex flex-col md:flex-row md:flex-wrap  md:items-center gap-3 text-sm text-gray-600">
                 <span className="flex items-center gap-1 text-[#00D390] font-semibold">
    <img src={download} alt="download icon" className="w-4 h-4" />
    {app.downloads}M
  </span>

  <span className="flex items-center gap-1 text-orange-500 font-semibold ">
    <img src={rating} alt="rating icon" className="w-4 h-4" />
    {app.ratingAvg}
  </span>

  <span className="flex items-center gap-1 font-medium text-gray-800">
     {app.size} MB
  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="btn  text-white btn-sm bg-[#00D390]"
            >
              Uninstall
            </button>
          </div>
        ))
      )}
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default MyInstallation;