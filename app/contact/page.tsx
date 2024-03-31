'use client'
import { Textarea } from "@/components/ui/textarea"
import GeolocationComponent from "../componants/GeolocationComponent"
import InputField from "../componants/InputField"
import ButtonForm from "../componants/ButtonForm"

type Props = {}

const Contact = (props: Props) => {



  return (
    <div className="  mt-24 p-3 w-screen  bg-slate-300" >


      <div className="   w-screen  flex justify-center  ">


        <div className="  p-7  lg:flex  lg:flex-row sm:flex-col sm:flex  gap-10" >
          <form className="   p-6 mb-10 w-96" >

            <InputField placeholder="name..." name="name" />
            <InputField placeholder="email..." name="email" />
            <Textarea placeholder="your formation for darhadith..." />
            <ButtonForm name="submit" type="submit" />

          </form>
          <div className="bg-white h-5"></div>
          <GeolocationComponent />
        </div>
      </div>
    </div>

  )
}

export default Contact