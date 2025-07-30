export default function CitaPage() {
  const citas = [
    {
      id: 1,
      paciente: "María Gómez",
      medico: "Dr. Juan Pérez",
      fecha: "2025-08-01",
      hora: "10:30 AM",
      estado: "Confirmada",
    },
    {
      id: 2,
      paciente: "Carlos Ruiz",
      medico: "Dra. Ana Torres",
      fecha: "2025-08-02",
      hora: "2:00 PM",
      estado: "Pendiente",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Mis Citas</h1>
        <div className="space-y-4">
          {citas.map((cita) => (
            <div
              key={cita.id}
              className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{cita.paciente}</span>
                <span className={`text-sm px-2 py-1 rounded ${
                  cita.estado === "Confirmada"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                }`}>
                  {cita.estado}
                </span>
              </div>
              <p>Médico: {cita.medico}</p>
              <p>Fecha: {cita.fecha}</p>
              <p>Hora: {cita.hora}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
