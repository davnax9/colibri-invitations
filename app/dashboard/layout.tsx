import { requireAuth } from "@/utils/auth"
import DashboardNavbar from "@/components/dashboard/DashboardNavbar"

type Props = {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: Props) {
  const session = await requireAuth()

  return (
    <div className="min-h-screen bg-[#FAF8F3]">

      <DashboardNavbar
        user={{
          name: session.user.name,
          email: session.user.email,
          role: session.user.role,
        }}
      />

      <main>
        {children}
      </main>

    </div>
  )
}