'use client'
import { useRouter } from "next/navigation"

export const TaskCard = ({ id, title, description, createdAt }) => {
    const router = useRouter();

    const handlerClick = () => router.push("/task/edit/" + id);
    return (
        <div onClick={handlerClick}
            className='bg-slate-700 p-3 hover:cursor-pointer'>
            <h3 className='font-bold text-2xl mb-2'>{title}</h3>
            <p>{description}</p>
            <p>{new Date(createdAt).toLocaleDateString()}</p>
        </div>
    )
}