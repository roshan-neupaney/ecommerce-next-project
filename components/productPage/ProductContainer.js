import React from 'react'
import ItemCard from './ItemCard'



const ProductCont = (props) => {
  // console.log('response',props.data)
  let data = props.data;

  // let index = props.index
  // console.log("data of category",data)
  
  return (
    <>

<div className='productList  grid grid-cols-4 mx-auto mt-8 w-11/12 gap-6  ' >
      {data.map((element)=>{
        return(
          <div key={element.id}>
          <ItemCard 
          title={element.title}
          price={element.price}
          image={element.image}
          id={element.id}
           />
      {/* {index.map((element)=>{
        return(
          <div key={element.id}>
          <ItemCard 
          title={element.title}
          price={element.price}
          image={element.image}
           /> */}
    
    </div>
        )
      })}
      {/* <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/> */}
      </div>
    </>
  )
}

export default ProductCont