import PopularClasses from "../PopularClasses/PopularClasses";
import InstructorsPopular from "../InstructorsPopular/InstructorsPopular";
import Slider from "../Slider/Slider";
import WhatDoes from "../WHATDOES/WhatDoes";




const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularClasses></PopularClasses>
           <InstructorsPopular></InstructorsPopular>
           <WhatDoes></WhatDoes>
        </div>
    );
};

export default Home;