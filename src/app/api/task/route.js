import { PrismaDB } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const tasks = await PrismaDB.task.findMany();
    return NextResponse.json(tasks);
}

export async function POST(request) {
    const { description, title } = await request.json();
    const newTask = await PrismaDB.task.create({
        data: {
            title,
            description
        }
    })
    return NextResponse.json(newTask);
}