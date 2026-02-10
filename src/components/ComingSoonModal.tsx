import mainLogo from "../assets/mainlogo.png";
import bgImage from "../assets/image-2.jpg.jpeg";

export default function ComingSoonModal() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center min-h-screen w-full p-6 md:p-12">
      {/* Underlying background image */}
      <div className="absolute inset-0">
        <img
          alt="Pakistan Foods products and spices"
          className="w-full h-full object-cover"
          src={bgImage}
        />
        {/* Semi-transparent dark overlay so content stays readable */}
        <div className="absolute inset-0 bg-background-dark/95" aria-hidden />
        {/* <div className="absolute inset-0 bg-background-dark/98" aria-hidden /> */}
      </div>
      <div className="relative z-10 w-full max-w-2xl text-center space-y-8 flex flex-col items-center">
        <div className="flex justify-center">
          <div className="flex items-center gap-3">
            <img
              src={mainLogo}
              alt="Pakistan Food - A Project of Sunfood"
              className="h-32 object-contain object-left "
            />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Coming <span className="text-primary">Soon</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-medium">
            Our authentic Pakistani pickles and spices are currently maturing.
            Stay tuned!
          </p>
        </div>
        {/* <div className="w-full max-w-md pt-8 border-t border-stone-800">
          <h4 className="text-white font-bold mb-4 text-lg">
            Join the Pakistan Foods Family
          </h4>
          <p className="text-sm text-stone-400 mb-6">
            Get notified when we launch and receive 10% off your first artisanal
            order.
          </p>
          {submitted ? (
            <p className="text-primary font-semibold py-4">
              Thanks! We&apos;ll notify you at {email}.
            </p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={handleSubmit}
            >
              <input
                className="flex-1 bg-stone-800 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary text-white placeholder-stone-500"
                placeholder="Your email address"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/25 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          )}
        </div> */}
        <div className="flex justify-center gap-2 pt-4" aria-label="Loading">
          <span className="loading-dot w-2 h-2 rounded-full bg-primary" />
          <span
            className="loading-dot w-2 h-2 rounded-full bg-primary"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="loading-dot w-2 h-2 rounded-full bg-primary"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </div>
  );
}
