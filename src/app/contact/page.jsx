import React from 'react'
import Image from 'next/image';


const contact = ({data}) => {
  return (
      <div>
        <h1>Welcome to My Page!</h1>
        {/* <p>{data.at(1).title}</p> */}
        {/* {data.map((element)=>{
          return(
            <p key={element.id}>{element.title}</p>

          )
        })} */}
      </div>
  ); 
}


export default contact