import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { addActivite } from './actionsForm'


type Props = {}

const FormActivite = (props: Props) => {


    return (
        <div >
            <form  action={addActivite} style={{ marginTop: 100, display: "flex", flexDirection: 'column', width: 700 }}>
                <div  style={{ height: 200, background: "gray", borderRadius: 10, marginBottom: 10 }}>
                    <Input type='text' name='url' required/>
                </div>
                <Input type='text' name='title' style={{ marginBottom: 15 }} placeholder="title activite..." required />
                <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    style={{ marginBottom: 15 }}
                    name='description'
                    required
                />
                <Button variant="outline">Button</Button>
            </form>
        </div>
    )
}

export default FormActivite