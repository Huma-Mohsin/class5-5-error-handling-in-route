"use client"  // Indicates that this is a client component
const ErrorPage=()=>{
return(
    <div>
    <h1 style={{color:"red",fontWeight:"bolder",fontSize:"20px",padding:"20px",margin:"20px"}}>Oops... Error Occured<br/>Invalid URL</h1>
    
    </div>
    )

}
export default ErrorPage 
{/**you should use "use client" in your component to ensure it behaves as a client component, allowing you to utilize React hooks and client-side functionality without errors. If you’re solely using server-side features and don’t need client-side interactivity, you can omit this directive and keep the component as a server component. */}