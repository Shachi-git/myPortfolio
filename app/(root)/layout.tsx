import { Navbar } from '@/components/Navbar'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen min-w-full main-bg bg-fixed">
      <Navbar />
      <div className="relative z-10 flex-1"> {children}</div>
    </main>
  )
}
