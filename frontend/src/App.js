import React,{useEffect,useState} from 'react';
import{BrowserRouter as Router,Routes,Route,Outlet} from "react-router-dom"
// CSS File (components)
import './style.css'

// Components (components/)


import MainLayout from './components/layouts/MainLayout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import PostLayout from './components/layouts/PostLayout';
import SingleCourse from './components/SingleCourse';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

// Administrator Components

import Signin from './components/Administrator/Signin';
import AdminLayout from './components/Administrator/AdminLayout';
import Header from './components/Administrator/Header/Header';
import Dashboard from './components/Administrator/Dashboard';
import NewPost from './components/Administrator/Post/NewPost';
import ViewPosts from './components/Administrator/Post/ViewPosts';
import UpdatePost from './components/Administrator/Post/UpdatePost';
import NewCourse from './components/Administrator/Course/NewCourse';
import ViewCourses from './components/Administrator/Course/ViewCourses';
import FullCourse from './components/Administrator/Course/FullCourse';
import UpdateCourse from './components/Administrator/Course/UpdateCourse';
import ViewSubscribers from './components/Administrator/Subscribers/ViewSubscribers';
import ViewRequests from './components/Administrator/Requests/ViewRequests';
const App=()=> {
  const[refresh,setRefresh]=useState('')
  let user=localStorage.getItem('user');
  useEffect(()=>{
    user=localStorage.getItem('user');
  },[refresh])
  
    console.log(user)
    console.log(setRefresh);
    return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="courses" element={<Courses/>}/>
          
          <Route path="/course" element={<PostLayout/>}>
          <Route path=":cname/:slug" element={<SingleCourse/>}/>
          </Route>
          
          <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="terms-conditions" element={<TermsAndConditions/>}/>

         
        </Route>
        {user ?
        <Route path="/administrator" element={<AdminLayout setRefresh={setRefresh} />}>
          <Route index element={<Dashboard/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="post" element={<NewPost/>}/>
          <Route path="post/view" element={<ViewPosts/>}/>
          <Route path="post/update/:id" element={<UpdatePost/>} />
          <Route path="course" element={<NewCourse/>}/>
          <Route path="course/view" element={<ViewCourses/>} />
          <Route path="course/:id" element={<FullCourse/>} />
          <Route path="course/update/:id" element={<UpdateCourse/>} />
          <Route path="subscribers/view" element={<ViewSubscribers/>} />
          <Route path="requests/view" element={<ViewRequests/>} />
        
          
        </Route>
        :
        
        <Route path="administrator/signin" element={<Signin setRefresh={setRefresh} />}></Route>
        }
      </Routes>

    </Router>
    

    
  );
}

export default App;
