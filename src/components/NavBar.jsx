import { Link } from "react-router-dom";

export function NavBar(){

    return(
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white font-bold text-lg"><Link to="/" >Logo</Link></div>
                <div className="space-x-4">
                    <Link to="login" className="text-white hover:text-gray-300">Iniciar sesión</Link>
                    <Link to="data" className="text-white hover:text-gray-300">Datos</Link>
                </div>
            </div>
        </nav>
    )
}