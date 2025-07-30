'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedRole = localStorage.getItem('user_role')
    setRole(storedRole)
  }, [])

  const handleLogout = () => {
    // Borrar cookie manual (solo funciona si se setea desde el cliente)
    document.cookie = 'user_role=; Max-Age=0; path=/'
    localStorage.removeItem('user_role')
    router.push('/login')
  }

  const commonLinks = (
    <>
      <Link href="/" className="hover:underline">Inicio</Link>
      <button onClick={handleLogout} className="hover:underline text-red-500">Cerrar sesión</button>
    </>
  )

  const renderLinks = () => {
    switch (role) {
      case 'admin':
        return (
          <>
            <Link href="/admin" className="hover:underline">Panel Admin</Link>
            <Link href="/medico" className="hover:underline">Médicos</Link>
            <Link href="/paciente" className="hover:underline">Pacientes</Link>
            {commonLinks}
          </>
        )
      case 'medico':
        return (
          <>
            <Link href="/medico" className="hover:underline">Panel Médico</Link>
            <Link href="/cita" className="hover:underline">Citas</Link>
            {commonLinks}
          </>
        )
      case 'paciente':
        return (
          <>
            <Link href="/paciente" className="hover:underline">Panel Paciente</Link>
            <Link href="/cita" className="hover:underline">Mis Citas</Link>
            {commonLinks}
          </>
        )
      default:
        return null
    }
  }

  return (
    <nav className="w-full bg-gray-100 p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Sistema de Salud</h1>
      <div className="flex gap-4">
        {renderLinks()}
      </div>
    </nav>
  )
}
