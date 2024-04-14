import MainTabs from "@/components/MainTabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-[10rem]">
      <div className="dark" />
      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="turbulace"
            baseFrequency="0.7"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <h2 className="text-[1.6rem] font-bold tracking-[.08rem] text-darkred uppercase select-none">
        Путовање у XIX веку
      </h2>
      <h1 className="text-[5rem] text-brown tracking-[0.05rem] mt-[-1rem] select-none">
        Србија на мапи европских путника
      </h1>
      <MainTabs />
    </main>
  );
}
