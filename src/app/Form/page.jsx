'use client'
import { useRouter } from "next/navigation";

export default function Form() {
    const router = useRouter()
    const handlerSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const res = await fetch('api/task', {
            method: 'POST', 
            headers: {
                'Content-Type': 'aplicattion/json'
            },
            body: JSON.stringify({title, description}),
        });
        const data = await res.json();
        console.log(data);
        router.push("/");
    }
    return (
        <section className="flex justify-center items-center h-screen">
            <form className="bg-slate-800 p-10 sm:w-2/4"
                onSubmit={handlerSubmit}
            >
                <label htmlFor="title" className="font-bold text-sm">
                    Titulo de tarea
                </label>
                <input type="text" placeholder="Titulo" id="title"
                    className="border border-gray-400 p-2 mb-4 w-full text-black" />

                <label htmlFor="description" className="font-bold text-sm">
                    Descripción
                </label>
                <textarea rows={3} placeholder="Describe tu tarea..." id="description"
                    className="border border-gray-400 p-2 mb-4 w-full text-black"></textarea>

                <button className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" type="submit">Crear</button>
            </form>
        </section>
    )
}