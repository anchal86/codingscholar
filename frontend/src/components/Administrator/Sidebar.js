import { Link } from "react-router-dom";
const Sidebar=()=>{
    return(
        <>
            {/* sidebar-start */}

          <div className="col-lg-3 sidebar-bg">
            <div className="list-group">
                <Link to="/administrator/course" className="list-group-item">Course</Link>
                <Link to="/administrator/post" className="list-group-item">Post</Link>
                <Link to="#" className="list-group-item">Subscribers</Link>
                <Link to="#" className="list-group-item">Contact</Link>
                <Link to="#" className="list-group-item">1 Column Portfolio</Link>
                <Link to="#" className="list-group-item">2 Column Portfolio</Link>
                <Link to="" className="list-group-item">3 Column Portfolio</Link>
                <Link to="" className="list-group-item">4 Column Portfolio</Link>
                <Link to="" className="list-group-item">Single Portfolio Item</Link>
                <Link to="" className="list-group-item">Blog Home 1</Link>
                <Link to="" className="list-group-item">Blog Home 2</Link>
                <Link to="" className="list-group-item">Blog Post</Link>
                <Link to="" className="list-group-item">Full Width Page</Link>
                <Link to="" className="list-group-item">Sidebar Page</Link>
                <Link to="" className="list-group-item">FAQ</Link>
                <Link to="" className="list-group-item">404</Link>
                <Link to="" className="list-group-item">Pricing Table</Link>
            </div>
          </div>
{/*sidebar-end */}
        </>
    );
}
export default Sidebar;