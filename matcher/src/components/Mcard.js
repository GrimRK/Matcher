
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from "./axios";
function Mcard() {

    const [people,setPeople]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req= await axios.get("/matcher/cards");
            setPeople(req.data);
        }
        fetchData();
        // console.log(people);
    },[])

const swiped = (direction,name2Delete)=>{
    console.log("removing :"+ name2Delete);
};
const outOfFrame=(pname)=>{
    console.log(pname+" left!");
};


  return (
    <div className='mcards'>
        <div className='mcard_container'>
            
                {people.map((person)=>(
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div
                        style={{backgroundImage:`url(${person.imgUrl})`}}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            
            
        </div>
        
    </div>
  );
}

export default Mcard;

