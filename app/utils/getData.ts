'use server';
import prisma from './db';


export async function getData(){
    
    const myData =await prisma.activite.findMany();
   
    return myData
  
  };
  