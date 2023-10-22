
import React from 'react';
import ReactDOM from 'react-dom'
// const heading = React.createElement("h1", { id: "heading", xyz: "vivek" }, "my name kumar vivek");
 
// console.log(heading);//Object
// const jsxheading=(<h1 id="heading">
//     namate react using jsx</h1>)
// console.log(jsxheading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxheading)
const element="my name is vivek singg";
const num=1000;

const Title=()=>{
    return(<>
        {element}
        <h2>functional compoent sdsac</h2>
       
    </>)
}
const HeadingComponent=()=>{
    return(
        <div id="heading">
           <h2>{Math.floor(num*67.90)}</h2>
           <h3>{console.log("ad,skakDew qfe")}</h3>
           {Title()}
         
           <Title1/>
        <h1>Functional component{element}</h1>
        <Title></Title>
        <Title/>
        
        </div>
        
         )
}
function Title1(){
    return(
        <h2>functional compoent sdsac</h2>
       
    )
}


//const HeadingComponent1=()=><h1>function component</h1>
//the both are same
    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)

//Note:React.createElement=>Object=>when it render inside the dom then its HTMl element
//ReactDom convert this object into Html and push into browser







