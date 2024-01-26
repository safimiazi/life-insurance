import { useEffect, useState } from "react";

const Sidebar = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("latestNews.json")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err.message));
  }, []);

  return (
   <div className="bg-gray-100 p-10">
     <div>
      <div className="">
        <div className="p-2 bg-violet-900 text-white text-2xl text-center">Latest News</div>
      </div>
      <div>
        {data?.map((singleData, index) => (
          <div key={index} className="mt-5">
            <h4>{singleData.event}</h4>
            <p>{singleData.date}</p>
            <hr/>
          </div>
          
        ))}
      </div>
    </div>
   </div>
  );
};

export default Sidebar;
