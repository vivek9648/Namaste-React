import React ,{lazy,Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
//import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/Page404';
import RestraMenu from './components/RestraMenu';
//import Grocery from './components/Grocery';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import Cart from './components/Cart';



const Grocery=lazy(()=>import('./components/Grocery'))
const About=lazy(()=>import('./components/About'))
const AppLayout=()=>{
    const[userName,setUserName]=useState()
    //authentication 
    useEffect(()=>{
//make an api call and we send username and password
const data={
    name:"vivek singh"
}
setUserName(data.name)


    },[])
    
  console.log(<Body/>);
    return(
        //default value
        <Provider store={AppStore}>
        <UserContext.Provider value={{ LoggedInUser:userName,setUserName}}>
            {/* vivek singh */}
        <div className='app'>
        {/* <UserContext.Provider value={{ LoggedInUser:"Elon Musk"}}> */}
            {/* sandeep */}
            <Header/>
            {/* </UserContext.Provider> */}
            {/* <Body/> */}
            <Outlet/>
            
           

        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter=createBrowserRouter([

{
path:"/",
element:<AppLayout/>,
children:[
    {
path:"/",
element:<Body/>
    },
    {
    
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
        },
         {
        path:"/contact",
        element:<Contact/>
         },
         {
            path:"/*",
            element:<Page404/>
         },
         {
            path:"/restaurants/:resId",
            element:<RestraMenu/>
         },
        

         {
         path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
        },
        {
            path:"/cart",
            element:<Cart/>
                     },
]}
])



 
     



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)