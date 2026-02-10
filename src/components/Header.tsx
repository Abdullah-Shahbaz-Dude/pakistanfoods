export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2 group" href="#">
            <div className="bg-primary p-1.5 rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined text-white">eco</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-accent-wood dark:text-white uppercase">
              Pakistan<span className="text-primary">Foods</span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-6 ml-4">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Shop</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">About</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Recipes</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative hidden md:block">
            <input
              className="pl-10 pr-4 py-2 bg-stone-100 dark:bg-stone-800 border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-64"
              placeholder="Search spices..."
              type="text"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-stone-400 text-sm">search</span>
          </div>
          <button type="button" className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
