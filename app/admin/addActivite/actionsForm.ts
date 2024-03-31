'use server'
import handler from "@/app/anchita/deleteAnchita";
import prisma from "@/app/utils/db";
import { revalidatePath } from "next/cache";
 
export  const addActivite = async(formData: FormData)=> 
{

    try {
      
        const title=formData.get('title');
        const description =formData.get('description');
        const url =formData.get('url');
         await prisma.activite.create({
       data:{
        title:title as string,
        description:description as string,
        url:url as string
       }
        
        });
        const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate()-7 );
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

        revalidatePath('admin/addActivite');
        
      } catch (e) {
        throw new Error('Failed to create task')
      }


}