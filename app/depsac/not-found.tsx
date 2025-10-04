import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-52">
      <Image
        src="/depsac/images/not-found.png"
        alt="Página no encontrada"
        className="mb-6"
        width={500}
        height={500}
        priority={true}
      />
      <h2 className="text-2xl font-bold mb-2">Página no encontrada</h2>
      <p className="text-gray-600 mb-4">
        Lo sentimos, no pudimos encontrar lo que buscabas.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-depsac-primary text-white rounded-lg hover:bg-blue-500 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}
