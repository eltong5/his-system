// app/registro/page.tsx
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Registro() {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: 'paciente'
  });

  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setExito('');

    // ✅ Validación de campos obligatorios
    if (!form.nombre || !form.apellido || !form.email || !form.password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    // ✅ Validación de longitud mínima de contraseña
    if (form.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      // ✅ Registro en Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      const userId = authData.user?.id;

      // ✅ Inserción en la tabla 'usuarios'
      const { error: insertError } = await supabase.from('usuarios').insert([
        {
          id: userId,
          nombre: form.nombre,
          apellido: form.apellido,
          rol: form.rol
        }
      ]);

      if (insertError) {
        setError(insertError.message);
        return;
      }

      // ✅ Éxito y redirección
      setExito('Registro exitoso. Verifica tu correo electrónico.');
      setForm({ nombre: '', apellido: '', email: '', password: '', rol: 'paciente' });

      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err: any) {
      setError('Ocurrió un error inesperado. Intenta nuevamente.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Registro de Paciente</h1>

      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      {exito && <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{exito}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
