'use client'
import { FaSun, FaMoon, FaClock } from 'react-icons/fa';
type Props = {
  timings:{
    Fajr:'06:09',
    Dhuhr: '13:27',
    Asr: '16:36',
    Maghrib: '19:10',
    Isha: '20:24'


  }
}

const prayerTimingClient = ({timings}:Props) => {
  

 
   
  return (
    <div className="  text-center p-2  ">
      <h2 className="text-2xl font-bold mb-4">اوقاة الصلاة </h2>
      <ul className="border border-gray-300  overflow-hidden  gap-4  scroll-auto mb-10 justify-around flex rounded-md shadow-md p-4">
        {Object.entries(timings).map(([prayer, time]) => (
          <li key={prayer} className="flex flex-col justify-between items-center py-2 border-b border-gray-200">
            {getIcon(prayer)} {/* Call a function to determine which icon to display */}
            <span className="font-semibold">{prayer}:</span> 
            <span className="text-gray-700">{time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const getIcon = (prayer:any) => {
  switch (prayer) {
    case 'Fajr':
      return <FaSun className="text-yellow-500" />;
    case 'Dhuhr':
      return <FaSun className="text-red-500" />;
    case 'Asr':
      return <FaSun className="text-green-500" />;
    case 'Maghrib':
      return <FaSun className="text-orange-500" />;
    case 'Isha':
      return <FaMoon className="text-blue-500" />;
    default:
      return <FaClock className="text-gray-500" />;
  }
};

export default prayerTimingClient