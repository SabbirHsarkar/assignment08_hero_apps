


import { Link } from 'react-router';
import downloadImg from "../../assets/asset/icon-downloads.png";
import ratingIcon from "../../assets/asset/icon-ratings.png"

const SingleApp = ({app}) => {
    // const data=use(app);
    

    return (
        
    //    
    // <Link to={''} >
    //    <div className="card bg-base-200 shadow-sm">
    //           <figure>
    //              <img className='h-[150px] w-[150px] m-3 '
    //                   src={app.image}
    //                    alt="Apps" />
    //                    </figure>
    //         <div className="card-body">
    //             <h2 className="card-title">
    //                 {app.title}
    //            </h2>
    //              <div className="flex justify-between">
       
    //            <div className="badge badge-soft badge-success rounded">
    //                   <img className='w-[20px]' src={``} alt="" />
    //                   <p className='font-bold'>{app.downloads}</p>
    //                </div>
       
    //           <div className="badge badge-soft badge-warning rounded">
    //             <img className='w-[20px]' src={``} alt="" />
    //                <p className='font-bold'>{app.ratingAvg}</p>
    //                 </div>
    //              </div>
    //          </div>
    //                </div>
       
    //    </Link>
<Link to={`/apps/${app.id}`}>
      <div className="card bg-base-200 shadow-sm">
             <figure>
                <img className='h-[150px] w-[150px] m-3 '
                     src={app.image}
                      alt="Apps" />
                      </figure>
           <div className="card-body">
               <h2 className="card-title">
                   {app.title}
              </h2>
                <div className="flex justify-between">
      
              <div className="badge badge-soft badge-success rounded">
                     <img className='w-[20px]' src={downloadImg} alt="" />
                     <p className='font-bold'>{app.downloads}</p>
                  </div>
      
             <div className="badge badge-soft badge-warning rounded">
               <img className='w-[20px]' src={ratingIcon} alt="" />
                  <p className='font-bold'>{app.ratingAvg}</p>
                   </div>
                </div>
            </div>
                  </div>
    </Link>
    );
};

export default SingleApp;