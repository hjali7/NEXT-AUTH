import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'


const prisma = new PrismaClient()

export async function POST (request) {
    try {
        const body = await request.json()
        const {name , email , password} = body.data
        if(!name || !email || !password) {
            return  NextResponse.json({message : 'deatils is not correct'} , {status : 200})
        }
        const existUser = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(existUser) {
            return  NextResponse.json({message : 'user Already exist'} , {status : 400})
        }
        const HashPass = await bcrypt.hash(password , 10)
        await prisma.user.create({
            data : {
                name , 
                email , 
                HashPass
            }
        })
        return  NextResponse.json({message : 'set details success'} , {status : 200})
    } catch (error) {
        return  NextResponse.json(error , {status : 501})
    } 
}