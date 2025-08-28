export default function Page() {
  return (
    <main
      className="min-h-screen bg-cover bg-center p-4 md:p-6"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbarjsfom/image/upload/v1756220334/484333470_3021445304687077_1939634484774059232_n_jtqc4i.jpg')",
      }}
    >
      <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow p-6 md:p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Learn Japanese with <span className="text-black-500">Snigdha Bhadra</span>
        </h1>
        <p className="mt-3 text-gray-700">
          Founder and associate teacher of Institute of Japanese Language and Cultures. JLPT-focused, beginner-friendly classes.
        </p>
        <div className="mt-5 flex gap-3 flex-wrap">
          <a
            href="/classes"
            className="px-4 py-2 rounded-xl bg-gray-900 text-white"
          >
            View Classes
          </a>
          <a
            href="/contact"
            className="px-4 py-2 rounded-xl border border-gray-300"
          >
            Contact
          </a>
          <a
            href="/gallery"
            className="px-4 py-2 rounded-xl border border-gray-300"
          >
            Gallery
          </a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3 max-w-6xl mx-auto">
        {["JLPT N5–N4 prep", "Speaking practice", "Notes & feedback"].map(
          (t) => (
            <div
              key={t}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow p-5 text-gray-800"
            >
              {t}
            </div>
          )
        )}
      </section>
    </main>
  );
}

