export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={"h-full flex items-center  justify-center"}>
        <div className={"h-full w-full max-w-[640px] flex py-12 px-4 border-2 border-gray-200"}>{children}</div>
      </main>
    </>
  );
}
