import React, { useState } from 'react'

const AutoCorrection = (props) => {
    //const[taech,wierd,chnage,claen,realy]=props;
    const [text, setText] = useState("");
  return (
    <div>
       
   
    <div className="App">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(text.split(" "));
          const strArr = text.split(" ");
          
          const obj = {
            "taech": "teach",
            "wierd": "weird",
            "chnage": "change",
            "claen": "clean",
            "realy": "really"
            }
            
          const objArr = Object.getOwnPropertyNames(obj);
          
          //console.log(strArr);
          strArr.map((d, i) => {
            const n = objArr.indexOf(d);
            console.log(n);
            if (n !== -1) {
              strArr[i] = obj[objArr[n]];
              console.log(n);
              console.log(strArr[i]);
              setText(strArr.join(" ")+" ");
              console.log(strArr+" ");
            }
            return true;
          });
        }}
      />
    </div>
  
    </div>
  )
}

export default AutoCorrection