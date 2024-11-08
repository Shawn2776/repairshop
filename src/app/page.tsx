import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl shadow-md shadow-white border">
          <h1 className="text-4xl font-bold">Shawn&apos;s Computer Shop</h1>
          <address>
            2541 W. Elmwood Drive
            <br />
            Coeur d&apos;Alene, ID 83815
          </address>
          <p>Open Daily: 9 a.m. to 5 p.m.</p>
          <Link href="tel:9312085009450" className="hover:underline">
            (208) 500-9450
          </Link>
        </div>
      </main>
    </div>
  );
}
