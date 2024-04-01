import React from 'react';
import PrayerTiming from './componants/PrayerTiming/PrayerTiming';


function App() {
  return (
    <div className="  w-screen h-screen  ">
     
    <div className='w-screen'>

 
     {/* <Slider/> */}
    <div className=' relative p-1'>
    <div  className='bg-white z-100  h-32'>
     <h1 className='   font-bold   shadow-l text-2xl absolute top-10 -right-20  w-full -translate-x-2/4 z-10  text-green-600'>موقع دار الحديث</h1>
     <h3 className=' absolute top-20  font-bold -right-40  text-xl w-full -translate-x-2/4 z-10 text-blue-500'>بمدينة  بركان بالمملكة المغربية حرسها الله</h3>
     </div>
      <img src = "https://images2.alphacoders.com/538/538101.jpg" className='w-full  h-96' />
    </div>
     <PrayerTiming/>
     
    </div>
   
    </div>
  );
}

export default App;
