import NameCard from "./components/NameCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="my-4 left-0 top-0 flex justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit static w-auto  rounded-xl border  p-4 ">
        This is a card
      </div>
      <NameCard />

      <div className="my-4 group rounded-lg border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
      </div>

      <div className="mb-4 group rounded-lg border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>Card Heading</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Card Subheading</p>
      </div>
    </main>
  );
}
