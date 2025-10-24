import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-lg">Ops! Página não encontrada.</p>
            <Link
                href="/"
                className="mt-6 hover:text-blue-600 text-sm text-[#1C1C1C] dark:text-[#D4D4D4] dark:hover:text-blue-400 underline"
            >
                Voltar para a Home
            </Link>
        </div>
    );
}
