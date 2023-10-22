import React from 'react'
class UserClass extends React.Component{
    constructor(props){
       
        super(props);
        console.log(props);
        this.state={
            userInfo:{
name:"sandeep",
location:"delhi",
avatar_url:"https//dummy.jpg"
            }
// count:0,
// count2:2,
// count2:3

        }
        //console.log(this.props.name+"Child constructor");
        
    }
    async componentDidMount(){
        //console.log(this.props.name+"child  compoennetdidmount");
        //API call
        let data=await fetch(" https://api.github.com/users/vivek9648");
        let result=await data.json();
        this.setState({
            userInfo:result,
        })
        console.log(result);
        console.log("com did mount")
      }
      componentDidUpdate(){
        console.log("component did update")
      }
      componentWillUnmount(){
        console.log("componentWillUnmount");
      }
    
    
    render(){
        console.log("render");
       // console.log(this.props.name+" child render"); 
        //const{name,location}=this.props
         const{count,count2}=this.state
        const{name,login,node_id,avatar_url}=this.state.userInfo;
        //debugger;
        return(
            <div className='user-cart'>
                {/* <h1>Count:{count}</h1>
                <h1>Count2:{count2}</h1> */}
             <img src= {avatar_url} alt=""/>   
            <h2>Name:{name}</h2>
            <h3>Location:{login}</h3>
            <h4>Node id:{node_id}</h4>
            
            <h4>Contact:@Vivek9648</h4>
            
            {/* <button onClick={()=>
                {this.setState({count:this.state.count+1,
                    count2:this.state.count2+2
                })
                }}>countInc</button> */}
            
        </div>
        )
    }
}
export default UserClass