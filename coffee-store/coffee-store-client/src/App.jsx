import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadedCoffees);


  return (
    <div className='m-20'>
      <img src="https://www.flickr.com/photos/crinau/23690571009/" alt="" />
      <h1 className='text-5xl text-center my-20 text-purple-600'>Coffee Hub: {loadedCoffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
