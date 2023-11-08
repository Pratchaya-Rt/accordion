import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleContent = ({title,description}) => {
    const [showContent,setShowContent] = useState(false)

    return (
        <div  className='py-4 p-6 mb-4 border-2 border-slate-300 border-solid rounded-lg shadow-md'>
             <header className='flex justify-between items-center'>
                <h4>{title}</h4>
                <button  onClick={()=>setShowContent(!showContent)} className='bg-slate-200 border-transparent w-8 h-8 flex items-center justify-center rounded-full m-4 self-center min-8'>{ showContent ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
             </header>
             {showContent && <p>{description}</p>}
        </div>
    );
};

export default SingleContent;