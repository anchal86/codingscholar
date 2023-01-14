import Slider from "./layouts/Slider";
import AboutArea from "./layouts/AboutArea";
import PopularCourses from './layouts/PopularCourses';
import CourseSpeciality from "./layouts/CourseSpeciality";
import Newsletter from "./layouts/Newsletter";
import MetaData from "./layouts/MetaData";

const Home = () => {
    return(
        <>
            <MetaData title="Home" canonical="/" />
            <Slider />
            <AboutArea />
            <PopularCourses />
            <CourseSpeciality />
            <Newsletter />
        </>
    );
}
export default Home;