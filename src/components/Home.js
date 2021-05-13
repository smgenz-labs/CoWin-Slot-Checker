import React, {useState} from 'react'
 const api = {
    key: "c0b4b07a00e2c3db10fd7f42473c0da7",
    call: "https://api.openweathermap.org/data/2.5/",
  };
const Home = () => {
              const	[dat,setDat] = useState();
			  const [q,setQ] = useState("");
const CoWinData = (qq) =>{
console.log('lol')
	fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${qq}&date=10-05-2021`)
	.then((res)=>res.json())
	.then((result)=>{setDat(result)
		
	});
  }
	const fun = () =>{
		
	}
//  CoWinData(333026,'12-05-2021');
  return <div><p>{`${dat}`}</p>
  <input type="text" onChange={(e)=>setQ(e.target.value)} placeholder='name'/>
	<button onClick={CoWinData(q)}>click</button>
  </div>;
}

export default Home
