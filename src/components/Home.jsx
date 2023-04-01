import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home =()=>{
    const [roomcode ,setroomcode] =useState('')
    const navigation = useNavigate()
    console.log(roomcode);
    const handleSubmit =()=>{
         console.log("inside");
        if(!roomcode){
            alert("Please Enter room code ")
            console.log(roomcode);
            return
        }else{
            console.log("inside else",roomcode);

               navigation(`/room/${roomcode}`)
        }

    }
    return(
        <>
           <div className="container">
        <div> Enter Your Room ID :</div>
            {/* <label htmlFor="roomid"> </label> */}
            <div><input type="text" placeholder="Enter room id" required id="roomid" onChange={(e)=> setroomcode(e.target.value)} value={roomcode}/></div>
           </div>
           <div>
            <button onClick={()=>handleSubmit()}>Enter Room</button>
           </div>
        </>
    )
}

export default Home 