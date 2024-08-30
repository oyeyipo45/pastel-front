export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-slate-200  min-h-screen flex items-center justify-center ">
        <div className="p-4 w-full max-w-[640px]">
          <div className={"  h-full border-2 border-gray-200"}>{children}</div>
        </div>
      </main>
    </>
  );
}
