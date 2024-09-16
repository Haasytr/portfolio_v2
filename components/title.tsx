export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className=" pb-1 md:max-w-[50%] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b-4 border-b-white">
      {children}
    </h1>
  );
}
