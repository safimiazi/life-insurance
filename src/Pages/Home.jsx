import Banner from "../Components/Home/Banner";
import PhotoSection from "../Components/Home/PhotoSection";
import TabSection from "../Components/Home/Tabs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <TabSection/>
            <PhotoSection/>
        </div>
    );
};

export default Home;