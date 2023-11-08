import { useState } from 'react'
import './App.css'
import data from './data'
import SingleContent from './components/SingleContent'

function App() {
  const [content, setContent] = useState(data)
  

  return (
    
    <div className='flex h-screen justify-center items-center'>
      <div className='w-10/12 mx-auto my-20 bg-white rounded-lg p-8 max-w-4xl'>
         <h3 className='m-8 text-center text-2xl font-semibold'>เครื่องมือพัฒนาเว็บ 2023</h3>
         <section>
            {content.map((data)=>{
              return <SingleContent key={data.id} {...data}/>
            })
            }
         </section>
      </div>
    </div>
   
  )
}

export default App
