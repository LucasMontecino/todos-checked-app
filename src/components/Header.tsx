export default function Header({
  title,
}: {
  title: string;
}) {
  return (
    <header className="bg-slate-400 rounded-t-md transition duration-300 text-zinc-800 ease-in-out shadow-slate-300 shadow-sm hover:bg-slate-300 hover:shadow-md hover:scale-3d border-0 mx-auto py-4 w-full max-w-2xs">
      <h1 className="text-xl font-semibold md:text-2xl">
        {title}
      </h1>
    </header>
  );
}
