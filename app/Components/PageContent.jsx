import {Route, Routes,useNavigate,Navigate  } from 'react-router-dom';
import HomePage from '../Pages/HomePage.jsx';
import RedirectPage from '../Pages/Redirect.jsx';
import Projects from '../Pages/Projects.jsx';
import FAQS from "../Pages/FAQs.jsx";
import Contact from "../Pages/Contact.jsx";
import React,{useEffect} from 'react'

function PageContent(){
    const navigate = useNavigate();
    return(
        <Routes>
            <Route path='/' element={<Navigate to="/Home" /> }/>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/FAQS' element={<FAQS/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/*' element={<RedirectPage/>}/>
        </Routes>
    );
}
function Index() {
    const navigate = useNavigate();
  
    useEffect(() => {
      setTimeout(() => {
        // 👇 Redirects to about page, note the `replace: true`
        navigate('/Home', { replace: true });
      }, 1000);
    }, []);
  
    return <div style={{height:"100%"}}>Redirecting...</div>;
  }

export default PageContent;