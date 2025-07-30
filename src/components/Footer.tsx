// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-500 text-sm py-4 mt-10 border-t">
      <p>© {new Date().getFullYear()} HIS App. Todos los derechos reservados.</p>
    </footer>
  )
}
