import React from 'react'
import Image from 'next/image';
export async function getServerSideProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  // console.log('response', response)
  const data = await response.json();
  return {
    props:{
      data
    }
  };
};

const contact = ({data}) => {
  // console.log('response',data)
  return (
      <div>
        <h1>Welcome to My Page!</h1>
        <p>{data.at(1).title}</p>
        {/* {data.map((element)=>{
          return(
            <p key={element.id}>{element.title}</p>

          )
        })} */}
      </div>
  ); 
}


export default contact