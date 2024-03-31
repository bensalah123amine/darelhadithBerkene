"use server"
import { collectGenerateParams } from 'next/dist/build/utils';
import prisma from '../utils/db';


export default async function handler(formData: FormData) {

try{
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() );
  console.log(cutoffDate);
  const oldElements = await prisma.activite.findMany({
    where: {
      createdAt: {
        lt: cutoffDate , // Find elements created before the cutoff date
      },
    },
  });
  const deleteel = await prisma.activite.deleteMany({
    where: {
      id: {
        in: oldElements.map((element) => element.id), // Delete elements by their IDs
      },
    },
  });
  console.log(deleteel)
}catch(e){
  console.log("Error in my db : ----"+ e)

}
 
  
}
