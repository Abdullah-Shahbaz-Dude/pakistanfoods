const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfilb6YivwCyUDBbA09tYyUPLYTBXH0CsGeSpatCrdebocntGFIymwn_ELWdTeRIrx1T-jRXm0VE1HkkQPPaUFsw3yg7mqv4gIKdn-vGGHJHHxgTUjzc5VK5EVu9jFNlrT6I2WWVoQJ4lHRvsppK1SMwl7Rff6jGwW5yGIfmqLHL4sNM5xVieK3CAL5oAcR4j5trO95_OPk3DCow2dC_JgQIB9By3Klqx6patebjPbfcZj9cz5gLiEryUa_el18bSXJOWa7HBWgcw";

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Artisanal jars of pickles and spices"
          className="w-full h-full object-cover"
          src={HERO_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start">
        <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-primary/20">
          Heritage Pickles & Spice Blends
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 max-w-2xl">
          The Timeless Soul of <span className="text-primary italic">Pakistani</span> Tradition.
        </h1>
        <p className="text-xl text-stone-200 mb-10 max-w-lg leading-relaxed">
          From the bustling markets of Lahore to the valleys of the North, we bring you authentic, hand-crafted pickles and spices preserved through generations.
        </p>
      </div>
    </section>
  );
}
