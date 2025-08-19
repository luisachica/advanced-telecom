export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">Página de Prueba</h1>
      <p className="text-lg text-gray-600">Si puedes ver esto, Next.js está funcionando correctamente.</p>
      <div className="mt-8 p-4 bg-green-100 border border-green-300 rounded">
        <p className="text-green-800">✅ La aplicación está renderizando correctamente</p>
      </div>
    </div>
  )
}