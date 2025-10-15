
import { Link } from 'react-router';

const SingleApp = ({app}) => {
    // const data=use(app);
    console.log('Sabbir will see',app);
    return (
       <Link to={'/apps'} >
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
                      <img className='w-[20px]' src={``} alt="" />
                      <p className='font-bold'>{app.downloads}</p>
                   </div>
       
              <div className="badge badge-soft badge-warning rounded">
                <img className='w-[20px]' src={``} alt="" />
                   <p className='font-bold'>{app.ratingAvg}</p>
                    </div>
                 </div>
             </div>
                   </div>
       
       </Link>
    );
};

export default SingleApp;