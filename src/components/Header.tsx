// src/components/Header.tsx
'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">HIS App</h1>
        <ul className="flex space-x-4">
          <li><Link href="/paciente">Paciente</Link></li>
          <li><Link href="/medico">Médico</Link></li>
          <li><Link href="/admin">Admin</Link></li>
          <li><Link href="/cita">Cita</Link></li>
          <li><Link href="/registro" className="font-semibold text-green-300">Registro</Link></li>
          <li><Link href="/login" className="font-semibold text-yellow-300">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}
