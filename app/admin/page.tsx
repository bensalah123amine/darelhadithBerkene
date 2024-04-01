"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Import useRouter from 'next/router'
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import prisma from "../utils/db";

const Login = () => { // Change function name to start with uppercase letter

  const { toast } = useToast();
  const [email, setEmail] = useState<null | string>(null);
  

  async function createData() {
    try {
      const postData = {
        title: "marhab bikom f anchta",
        url: "hjhjhjhjhjh/kkkk",
        description: "marjo minkom ta3lik monasib"
      };

      const createdData = await prisma.activite.create({
        data: postData,
      });

      console.log('Data created:', createdData);
    } catch (error) {
      console.error('Error creating data:', error);
    }
  }

  createData(); // Call the async function inside useEffect or when needed

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: "http://localhost:3000/admin/addActivite",
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast({
        title: "Well, this did not work...",
        description: "Something went wrong, please try again",
        variant: "destructive"
      });
    } else {
      return toast({
        title: "Check your email",
        description: "A magic link has been sent to you"
      });
    }
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ marginTop: 100, display: "flex", flexDirection: 'column', width: 700 }}>
        <Input style={{ marginBottom: 15 }} placeholder="Enter your name..." />
        <Input name="email" type="email" onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: 15 }} placeholder="Enter your email..." />
        <Button type="submit" variant="outline">Button</Button> {/* Add type="submit" to trigger form submission */}
      </form>
    </div>
  );
}

export default Login;
