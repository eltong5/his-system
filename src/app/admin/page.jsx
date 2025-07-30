'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentRole } from '@/lib/getCurrentRole'

export default function AdminPage() {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const role = getCurrentRole()
    if (role === 'admin') {
      setAuthorized(true)
    } else {
      router.push('/login') // Redirige si no es admin
    }
  }, [])

  if (!authorized) return <p className="p-4">Cargando...</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Panel de Administrador</h1>
      <p>Solo accesible por usuarios con rol: admin</p>
    </div>
  )
}
