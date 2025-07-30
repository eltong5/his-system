'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { setCookie } from 'cookies-next' // <--- importante

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('paciente') // valor por defecto

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulamos login guardando en localStorage (opcional)
    const user = {
      email,
      role,
    }
    localStorage.setItem('user', JSON.stringify(user))

    // Guardamos el rol en una cookie para el middleware
    setCookie('user_role', role, {
      maxAge: 60 * 60 * 24 * 7, // 7 días
      path: '/',
    })

    // Redirige al dashboard según rol
    router.push(`/${role}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Iniciar Sesión
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Rol (simulado)
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none"
            >
              <option value="paciente">Paciente</option>
              <option value="medico">Médico</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Ingresar
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes cuenta? <a href="/registro" className="text-blue-600 hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  )
}
