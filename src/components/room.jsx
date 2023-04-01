import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { useParams} from 'react-router-dom'
const Room =()=>{
   const {roomid} = useParams()
   
    const meeting= async(element)=>{
      const appID = 439770435
      const serverSecret = "7a46539075b7487c762d1bc93f1cb8f4"
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomid,
        Date.now().toString(),
        "Rohit"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken) ;
       zp.joinRoom({
        container : element ,
        scenario : {
            mode : ZegoUIKitPrebuilt.VideoConference
        }, 

       })
    }

    return (
        <>
         <div ref={meeting}></div> 
        </>
    )
}
export default Room