import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container flex items-center justify-center gap-8">
        <Image src="/assets/logo.png" alt="Logo" height={115/2} width={450/2} />
        <span className="uppercase text-[#333]">
          TODOS DIREITOS RESERVADOS | 2023
        </span>
      </div>
    </footer>
  )
}