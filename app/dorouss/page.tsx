"use server"
import Image from 'next/image';
import Link from 'next/link';




type Props = {}


const books =[
  {id:1,href:"https://www.ferkous.com/home/?q=tahara-1",link:"https://www.ferkous.com/home/sites/default/files/rotor/QAWL-SADID.jpeg",name:"الصفوة من الفتاوى المبوبة (الزواج 2)"},
  {id:2,href:"https://www.ferkous.com/home/?q=syam-8",link:"https://tse1.mm.bing.net/th?id=OIP.8IQ7isg8BccNyTQxgTRv4wAAAA&pid=Api&P=0&h=180",name:"ffff"},
  {id:3,href:"https://www.ferkous.com/home/?q=safwa-zawadj2", link:"https://tse4.mm.bing.net/th?id=OIP.qOyjkfpdiG2tP_3iocOj2QAAAA&pid=Api&P=0&h=180",name:" الالتمام قول"},
]  

const dorouss = (props: Props) => {



  return (
    <div  className="mt-10 text-center   " >
      <div className="  outline-4 outline mb-10 inline-block">
      <h1 className="text-blue-600 text-2xl ">كتب المشاييخ الاعلام</h1>
      </div>
     
     
     <div className="lg:flex lg:flex-row   p-6  gap-20  justify-center  sm:flex sm:flex-col  ">
      
   {books.map((item)=>
   <div key={item.id} className="  w-46 h-72">
    <Link   href={item.href}  > <Image width={100} height={100} className="h-full rounded-xl w-full   mt-8  hover:scale-110 " src={item.link} alt={item.name} /> </Link>
   </div>
   )}



     </div>
    
      </div>
  )
}

export default dorouss
