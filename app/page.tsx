import Link from "next/link";

export default function Home() {
  return (
    <div className="hero relative grid place-items-center">
      <div className="overlay bg-[#00000066] h-screen w-screen absolute"></div>
      <div className="text-white z-10 text-center grid gap-4">
        <h1 className="text-6xl sm:text-9xl font-extrabold">
          MAR
          <span className="italic text-5xl sm:text-8xl text-yellow-100">K</span>
          ERT AFRICA
        </h1>
        <p className="text-base sm:text-2xl">
          The Shopping Experience you can Trust
        </p>
        <Link
          href="/shop"
          className="bg-white text-black text-xl sm:text-3xl font-bold rounded-md min-w-[250px] sm:min-w-[400px] mx-auto mt-16 py-4 transition-all duration-300 ease-in-out hover:text-[29.5px] hover:border-2 hover:border-black "
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}
