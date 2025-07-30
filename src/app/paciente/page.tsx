'use client'

import { useEffect, useState } from 'react'

export default function PacientePage() {
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Simulación de datos
    const fakeUser = {
      nombre: 'Carlos Pérez',
      correo: 'carlos.perez@email.com',
      fechaNacimiento: '1990-04-12',
      citas: [
        { fecha: '2025-08-05', estado: 'Confirmada' },
        { fecha: '2025-09-01', estado: 'Pendiente' }
      ],
      historiaClinica: 'Paciente con antecedentes de hipertensión. Última consulta sin novedades.'
    }

    setUserData(fakeUser)
  }, [])

  if (!userData) return <p>Cargando datos...</p>

  return (
    <div className="space-y-8">
      {/* Perfil */}
      <section className="p-6 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">👤 Perfil del Paciente</h2>
        <p><strong>Nombre:</strong> {userData.nombre}</p>
        <p><strong>Correo:</strong> {userData.correo}</p>
        <p><strong>Fecha de nacimiento:</strong> {userData.fechaNacimiento}</p>
      </section>

      {/* Citas */}
      <section className="p-6 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">📅 Citas Médicas</h2>
        <ul className="list-disc list-inside space-y-1">
          {userData.citas.map((cita: any, index: number) => (
            <li key={index}>
              <strong>{cita.fecha}</strong> – {cita.estado}
            </li>
          ))}
        </ul>
      </section>

      {/* Historia clínica */}
      <section className="p-6 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">📖 Historia Clínica</h2>
        <p>{userData.historiaClinica}</p>
      </section>
    </div>
  )
}
