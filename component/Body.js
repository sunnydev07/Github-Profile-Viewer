import { useState,useEffect, use } from "react";
function Body(){
   const [Profile, setProfile] = useState([]);
   const [count, setCount] = useState("");
   async function generateProfile(){
      const randm = Math.floor(1+Math.random()*1000);
     try{
       const response = await fetch(`https://api.github.com/users?since=${randm}&per_page=${count}`);
       const data = await response.json();
       setProfile(data);
     }catch(err){
      console.log("Error: ",err);
     }
   }
   useEffect(()=>{
      generateProfile();
   },[])
   return (
      <><div className="countbutton">
            <input placeholder="Enter the no. of profile" type="number" value={count} onChange={(e)=>setCount(e.target.value)} onKeyDown={(e)=>{
               if(e.key === "Enter")
                  generateProfile(e);
            }}/>
            <button onClick={(e)=>generateProfile(e)}>View</button>
        </div>

      <div className="profile">
            {              // js code likhne ke liye curly breackets lagana padega
               Profile.map((value)=>{
                  return (
                   <div key={value.id} className="card">
                        <img src={value.avatar_url}/>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank"  style={{color:"red",
                            textDecoration:"none",fontSize:"25px"
                           }}>Profile</a>
                  </div>
               // <div key={value.id} className="card">
               //    <a href={value.html_url} style={{color:"red",
               //       textDecoration:"none",fontSize:"25px"
               //    }} target="_blank">
               //       <div >
               //          <img src={value.avatar_url}/>
               //          <h2>{value.login}</h2>
               //       </div>
               // </a>
               // </div>
               )      
            })}

         </div>
      </>
   )
}
export default Body;
