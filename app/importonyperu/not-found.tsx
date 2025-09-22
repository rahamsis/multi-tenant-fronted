export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <img
        src="importonyperu/images/not-found.png"
        alt="Página no encontrada"
        className="w-60 mb-6"
      />
      <h2 className="text-2xl font-bold mb-2">Página no encontrada</h2>
      <p className="text-gray-600 mb-4">
        Lo sentimos, no pudimos encontrar lo que buscabas.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}
