'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Form({ params }) {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (params.id) {
            fetch(`/api/task/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setDescription(data.description);
                });
        }
    }, []);

    const handlerSubmit = async (e) => {
        e.preventDefault();
        if (params.id) {
            const res = await fetch(`/api/task/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
        } else {
            const res = await fetch('api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'aplicattion/json'
                },
                body: JSON.stringify({ title, description }),
            });
            const data = await res.json();
        }
        router.refresh();
        router.push("/");
    }
    const handlerDelete = async () => {
        const res = await fetch(`/api/task/${params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        router.refresh();
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
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                    className="border border-gray-400 p-2 mb-4 w-full text-black" />

                <label htmlFor="description" className="font-bold text-sm">
                    Descripción
                </label>
                <textarea rows={3} placeholder="Describe tu tarea..." id="description"
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                    className="border border-gray-400 p-2 mb-4 w-full text-black"></textarea>

                <div className='flex justify-between'>

                    <button type="submit"
                        className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                        Crear
                    </button>
                    {
                        params.id &&

                        <button type='button'
                            onClick={handlerDelete}
                            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4'>
                            Delete
                        </button>

                    }
                </div>

            </form>
        </section>
    )
}