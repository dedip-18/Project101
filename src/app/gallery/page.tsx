const photos = [
  "https://res.cloudinary.com/dbarjsfom/image/upload/v1756220336/WhatsApp_Image_2025-08-23_at_10.13.27_PM_ciegqi.jpg",
  "https://res.cloudinary.com/dbarjsfom/image/upload/v1756220336/506049976_3122361707928769_4580385357905929764_n_btv33x.jpg",
  "https://res.cloudinary.com/dbarjsfom/image/upload/v1756220335/506285140_3120720888092851_4810642406435716057_n_mkthhy.jpg",
  "https://res.cloudinary.com/dbarjsfom/image/upload/v1756220335/516951748_10236529862647767_8268046140192823908_n_xorcpg.jpg",
  "https://res.cloudinary.com/dbarjsfom/image/upload/v1756220334/505188545_3115310501967223_3225916744757321516_n_cixlyx.jpg",
  "https://res.cloudinary.com/dbarjsfom/image/upload/v1756220334/484333470_3021445304687077_1939634484774059232_n_jtqc4i.jpg",
  "https://res.cloudinary.com/dbarjsfom/image/upload/v1756220334/469396867_1986655171829622_7797418711130894263_n_bg6jpz.jpg",
];

export default function GalleryPage() {
  return (
    <main className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((src, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
            {/* Using plain img for simplicity; we can switch to next/image later */}
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}
