import PopularClasses from "../PopularClasses/PopularClasses";
import InstructorsPopular from "../InstructorsPopular/InstructorsPopular";
import Slider from "../Slider/Slider";




const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularClasses></PopularClasses>
           <InstructorsPopular></InstructorsPopular>
        </div>
    );
};

export default Home;