import NameCard from './components/NameCard';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        This is a card
        </div>

        <NameCard/>

        
        <div
          className="group rounded-lg border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Card Heading
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Card Subheading
          </p>
        </div>

        
        <div
          className="group rounded-lg border  px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Card Heading
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Card Subheading
          </p>
        </div>

       
        
        
        

       
    </main>
  )
}
