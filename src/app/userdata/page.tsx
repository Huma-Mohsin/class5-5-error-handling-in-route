async function Userdata(){
    const url="https://jsonplaceholder.typicode.com/user";
    const Fetchdata=await fetch(url);
    const response=await Fetchdata.json();
    console.log(response);

    return(
        <div>

<h1 style={{color:"blue",fontSize:"50px",fontWeight:"bold",textAlign:"center",padding:"20px",margin:"20px"}}>Data Integration</h1>

<br/>

<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[1].username}</h1 >
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[6].company.bs}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[9].phone}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[5].address.suite}</h1 >
        </div>
    )
}
export default Userdata