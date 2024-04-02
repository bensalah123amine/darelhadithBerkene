'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getData } from '../utils/getData';


type Props = {}


const Anchita = () => {
  const [dd, setDd] = useState([{ title: '', description: '', url: '' }]);

  const get = async () => {
    const myData = await getData();
    setDd(myData);
  };

  useEffect(() => {
    get();
    

  }, []);



  return (
    <div className='h-screen'>
  <div className='p-10 bg-slate-400 min-h-full'>
    {dd.map((item, idx) =>
      <div className='w-full p-5 flex  items-center flex-col bg-green-400 mt-5 rounded-sm' key={idx}>
        <h1 className='text-bgTitle'>{item.title}</h1>
        <p>{item.description}</p>
        <div className='h-auto'> 
          <Image
            src={item.url}
            width={400}
            height={200}
            className=' h-96 w-96' 
            alt="Picture of the author"
          />
        </div>
        سلام عليكم
      </div>
    )}
  </div>
</div>

    
  )

}
export default Anchita;