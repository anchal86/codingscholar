import Header from "./Header/Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const AdminLayout=({setRefresh})=>{
    return(
        <>
            <Header setRefresh={setRefresh} />
            <section className="">
                <div className="container-fluid p-0">
                    {/* Content Row */}
                    <div className="row admin-layout">
                    
                        <Outlet/>
                       
                    </div>
                    {/* /.row */}
               
                </div>
            </section>
            <footer id="sticky-footer" className="flex-shrink-0 py-4 admin-footer-bg text-white-50">
                <div className="container text-center">
                <small>Copyright &copy; Coding Scholar</small>
                </div>
            </footer>
            
        </>
    );
}
export default AdminLayout;