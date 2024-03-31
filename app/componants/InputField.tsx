import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {
    placeholder:string,
    name:string,
}

const InputField = (props: Props) => {
  return (
    <div>
         <Input style={{ marginBottom: 15 }} name={props.name} placeholder={props.placeholder}  />
    </div>
  )
}

export default InputField