
const PhotoSection = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-32">
              <div className="relative md:left-52">
      <img
        className='w-64 rounded-full absolute transition-transform transform hover:scale-90 hover:z-10'
        src="https://source.unsplash.com/1200x1200/?nature/?4"
        alt=""
      />
      <img
        className='w-64 rounded-full absolute top-40 transition-transform hover:scale-90 transform hover:z-10'
        src="https://source.unsplash.com/1200x1200/?nature/?4"
        alt=""
      />
      <img
        className='w-64 rounded-full absolute left-40 top-20 transition-transform hover:scale-90 transform hover:z-10'
        src="https://source.unsplash.com/1200x1200/?nature/?4"
        alt=""
      />
    </div>
            <div className="md:ml-24 ">
                <div className="card w-96 bg-blue-100 hover:shadow-xl mb-5 z-10 transition-transform transform hover:scale-110">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-orange-200 hover:shadow-xl z-10 transition-transform transform hover:scale-110">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoSection;