import React from 'react'
import { useNavigate } from "react-router-dom";
import Product from './Product';

const Home = () => {
    const navigate = useNavigate();

// useEfect for categories


    
  return (
    <div>
<Product/>
<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.georgeinstitute.org.au%2Fnews%2Fcelebrating-world-food-day-2020&psig=AOvVaw1EkGnV2zqfSW079rzNkPA7&ust=1712348680600000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPC774myqYUDFQAAAAAdAAAAABAJ'/>
<br></br>
{/* map for categories to make dev for each one */}


<div className='Chicken' onClick={()=>{
    navigate("/Product")
}}>Chicken</div>
<div className='SeaFood'>SeaFood</div>
<div className='Meat'>Meat</div>
<div className='Fruits'>Fruits</div>
    </div>
  
  
  
  
  
  
  
  
    )
}

export default Home