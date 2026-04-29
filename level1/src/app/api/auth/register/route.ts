import connectDb from "@/lib/db";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

// status code
//200-300:success
//400-499:client error (frontend error)
//500-599:server error (backend error)


export async function POST(request:NextRequest){
  try {

    const{name, email, password}= await request.json()

    await connectDb()


     const existUser = await User.findOne({email})

     if(existUser){

      return NextResponse.json({message:"User already exist"},{status:400})
     }

     if (password.length<6){

      return NextResponse.json({message:"Password must be at least 6 characters"},{status:400})
     }


     const hashedPassword = await bcrypt.hash(password,10)

     const user= await User.create({
      name, email, password:hashedPassword
     })


     return NextResponse.json({message:"User created successfully"},{status:201})
     
    
  } catch (error) {
    return NextResponse.json({message:`${error}`},{status:500})
  }
}