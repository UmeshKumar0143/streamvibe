import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest, NextResponse } from 'next/server'

import db from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    const { id } = evt.data
    const eventType = evt.type
    console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    console.log('Webhook payload:', evt.data)


    if(eventType=="user.created"){
      console.log("user createdd"); 
      if(evt.data.username){
        
      const user = await db?.user.create({
        data:{
          externalUserId: evt.data.id, 
          name: evt.data.first_name + ' '+ evt.data.last_name, 
          imageUrl: evt.data.image_url,
          username: evt.data.username, 
          
        }
      })
    }
    }
    const current_user = await db.user.findUnique({
      where: {
        externalUserId: evt.data.id, 
      }
    }) 

    if(!current_user){
      return NextResponse.json({message: "User not found ", status:400 } )
    }



    if(eventType=="user.updated"){
        await db.user.update({
          where: {
            externalUserId: evt.data.id
          }, 
          data: {
            username: evt.data.username ?? undefined, 
            imageUrl: evt.data.image_url, 
          }
        })
    }

    if(eventType=="user.deleted"){
      await db.user.delete({
        where: {
          externalUserId: current_user.externalUserId
        }
      })
    }



      

  

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }

}