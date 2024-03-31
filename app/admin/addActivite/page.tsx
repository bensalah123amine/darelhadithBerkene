import { authOptions } from '@/app/utils/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import FormActivite from './FormActivite'


type Props = {}

const addActivite = async (props: Props) => {

  const session = await getServerSession(authOptions);

  return (
    <div  style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {
        session ? (
          <FormActivite/>
        ) : (<h1>please log in  to see something spicial</h1>)
      }


    </div>
  )
}

export default addActivite








