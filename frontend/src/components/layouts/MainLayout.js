import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return(
        <>
            {/* <h1>hello</h1> */}
            <Header/>
                <Outlet/>
            <Footer/> 
        </>
    );
}
export default MainLayout;