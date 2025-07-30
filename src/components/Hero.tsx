// src/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex flex-col gap-8 items-center text-center sm:text-left">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <p className="text-lg font-semibold">
        Bienvenido a tu Sistema de Información en Salud (HIS)
      </p>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">
        Este panel está diseñado para ayudarte a gestionar pacientes, médicos, citas y mucho más.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:opacity-90 transition"
          href="/login"
        >
          Ingresar al Panel
        </a>
        <a
          className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          href="#"
        >
          Leer documentación
        </a>
      </div>
    </main>
  );
}
