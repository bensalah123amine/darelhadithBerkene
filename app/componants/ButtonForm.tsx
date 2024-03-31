"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    name:string,
    type:"submit" ,
    
}

const ButtonForm = (props: Props) => {
  return (
    <div className='mt-10  w-full bg-slate-900 rounded-sm text-center'>
        <Button   type={props.type}>{props.name} </Button>
    </div>
  )
}

export default ButtonForm