export default function MedicoPage() {
  return (
    <div className="min-h-screen px-6 py-10 sm:px-12">
      <h1 className="text-3xl font-bold text-center sm:text-left mb-8">
        Gestión de Médicos
      </h1>

      {/* Aquí irá la lista o panel de médicos */}
      <div className="bg-white dark:bg-gray-900 border rounded-xl p-6 shadow-md">
        <p className="text-gray-500 dark:text-gray-400">
          Aquí podrás ver, editar y agregar médicos registrados en el sistema.
        </p>
      </div>
    </div>
  );
}
