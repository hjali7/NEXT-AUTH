import Link from "next/link"

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col items-start gap-10 border-2 border-blue-500 p-6 shadow-xl rounded-md">
        <Link className="font-bold text-black text-3xl underline"  href='/register' >go to register</Link>
        <Link className="font-bold text-black text-3xl underline"  href='/login' >go to login</Link>
      </div>
    </div>
  )
}
