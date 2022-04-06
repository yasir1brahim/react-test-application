import React from "react";
import pause from "./pause.jpg"
import play from "./play.jpg"




function Home(){
    const getValue=(event)=>{
        console.log(event.nativeEvent.data)
    }

    return(
        <div class="layout-page">
        <div class="row-box">
           <div class="col-box-3">
              <div class="border-box">
                 <h2 class="date_time">2022-01-20 10:26:20</h2>
                 <form action="#" post="method">
                    <div class="form-control">
                       <label>Dscription</label>
                       <input type="text" name="desciption" /> 
                    </div>
                    <div class="form-control">
                       <label>User</label>
                       <input type="text" name="user" onChange={getValue} /> 
                    </div>
                    <div class="form-control">
                       <label>Status</label>
                    </div>
                    <div class="form-control">
                       <label>Time Remaining</label>
                    </div>
                 </form>
              </div>
           </div>
           <div class="col-box-2">
              <div class="box-button">
                 <ul>
                    <li>
                    <img src={play} title="play" /> 
                    </li>
                    <li>
                    <img src={pause} title="pause" /> 
                    </li>
                 </ul>
              </div>
           </div>
          
        </div>
     </div>
    );
}

export default Home;