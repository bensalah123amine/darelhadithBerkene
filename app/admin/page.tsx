"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast"
import prisma from "../utils/db";


type Props = {}

const login =  (props: Props) => {

  const { toast } = useToast()
  const [email,setEmail]=useState<null|string>(null)
  // const session = await getServerSession(authOptions)
  const router = useRouter()

// post data in my db
async function createData() {
  try {
    const postData = {
      // Data you want to insert
      title:"marhab bikom f anchta",
      url : "hjhjhjhjhjh/kkkk",
      description: "marjo minkom ta3lik monasib"
    };

    // Use Prisma client to create a new record
    const createdData = await prisma.activite.create({
      data: postData,
    });

    console.log('Data created:', createdData);
  } catch (error) {
    console.error('Error creating data:', error);
  }
}

// Call the async function
createData();


  // fontion SignIn
  const handelSubmit =async () => {
   
  const signInResult = await signIn("email",{
    email:email,
    callbackUrl:"http://localhost:3000/admin/addActivite",
    redirect:false,
   

  });
  if(!signInResult?.ok){
    return toast({
      title:"well this did not work ...",
      description:"Something went wrong , please try again",
      variant:"destructive"
    });
    
  }
  return toast({
    title:"check your email",
    description: "A magic link has ben snet to you"
  })

  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <form action={handelSubmit}
        style={{ marginTop: 100, display: "flex", flexDirection: 'column', width: 700 }}>

        <Input style={{ marginBottom: 15 }}  placeholder="enter your name..." />
        <Input name ="email" type="email" onChange={(e)=>setEmail(e.target.value)} style={{ marginBottom: 15 }} placeholder=" enter your email..." />

        <Button variant="outline" >Button</Button>

      </form>
    </div>
  )
}

export default login




