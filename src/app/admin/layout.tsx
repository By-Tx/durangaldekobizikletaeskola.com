// components/admin/Layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>Admin Layout</header>
      <main>{children}</main>
    </section>
  );
}
