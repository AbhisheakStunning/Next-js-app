// Next Response Next Request

// Get API

import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){

  return NextResponse.json({

    name:'Abhishek',
    age:37,
    status:'Married'

  })

}

// POST API

export async function POST(request:NextRequest) {

  let {name, age, status}= await request.json()

  return NextResponse.json({
    name,age, status
  })
  
}

// Delete API

export async function DELETE(request:NextRequest) {

  let{name,age}=await request.json()

  return NextResponse.json({
    name,age
  })
  
}
