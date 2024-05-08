import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl mb-16">
                    Not Found
                    </h1>
                <Link href={'/'} className="text-slate-200 text-2xl underline">
                    Ir a Inicio
                </Link>
            </div>
        </section>
    )
}