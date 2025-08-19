export default function TestSimple() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6 text-center">
          Advanced Telecom Madrid
        </h1>
        <p className="text-lg text-gray-700 text-center">
          Página de prueba - Si puedes ver esto, React está funcionando correctamente.
        </p>
        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            Estado del sistema:
          </h2>
          <ul className="text-green-700">
            <li>✅ Next.js cargado</li>
            <li>✅ React funcionando</li>
            <li>✅ Tailwind CSS aplicado</li>
            <li>✅ Componente renderizado</li>
          </ul>
        </div>
      </div>
    </div>
  )
}