import { NextResponse } from "next/server";
import { PrismaDB } from '@/libs/prisma';

export async function GET(request, { params }) {
    const task = await PrismaDB.task.findUnique({
        where:{
            id: Number(params.id)
        }
    })
    return NextResponse.json(task);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const taskUpdated = await PrismaDB.task.update({
        where:{
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(taskUpdated);
}

export async function DELETE(request, { params }) {
    try {
        const taskRemove = await PrismaDB.task.delete({
            where:{
                id: Number(params.id)
            }
        })
        return NextResponse.json(taskRemove);        
    } catch (error) {
        return NextResponse.json(error.message)
    }
}