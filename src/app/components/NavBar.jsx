import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-slate-400">
            <div className="container mx-auto flex justify-between items-center">
                <h3 className="font-bold text-3xl p-3">
                    NextJS CRUD App
                </h3>
                <ul className="flex gap-x-2 text-lg">
                    <li>
                        <Link href={'/'} className="text-slate-600 hover:text-slate-300">
                            Dahsboard
                        </Link>
                    </li>
                    <li>
                        <Link href={'/About'} className="text-slate-600 hover:text-slate-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={'/Form'}  className="text-slate-600 hover:text-slate-300">
                            New Form
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}