const features = [
  {
    icon: "local_shipping",
    title: "Global Delivery",
    description: "Authentic flavors anywhere",
  },
  {
    icon: "history_edu",
    title: "Ancient Recipes",
    description: "Generational family secrets",
  },
  {
    icon: "nutrition",
    title: "Natural Ingredients",
    description: "Pure Himalayan salts & oils",
  },
  {
    icon: "verified",
    title: "Artisanal Quality",
    description: "Hand-packed in small batches",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="py-12 bg-white dark:bg-stone-900/50 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }) => (
          <div key={title} className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
            <div>
              <h4 className="font-bold text-sm">{title}</h4>
              <p className="text-xs text-stone-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
