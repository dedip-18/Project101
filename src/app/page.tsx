export default function Page() {
  return (
    <main
      className="min-h-screen bg-cover bg-center p-4 md:p-6"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbarjsfom/image/upload/v1757728362/3f60758d-8df1-4a94-beb6-cbe8cf7a125b_v6ljej.jpg')",
      }}
    >
      {/* Hero Section */}
      <section className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Snigdha Bhadra
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Founder & Instructor, Institute of Japanese Language and Cultures
        </p>
        <p className="mt-3 text-gray-600 italic">
          Guiding learners from Hiragana to JLPT N2 success
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a
            href="/classes"
            className="px-5 py-2 rounded-xl bg-gray-900 text-white font-medium shadow"
          >
            View Classes
          </a>
          <a
            href="/contact"
            className="px-5 py-2 rounded-xl border border-gray-300 font-medium shadow"
          >
            Contact
          </a>
          <a
            href="/gallery"
            className="px-5 py-2 rounded-xl border border-gray-300 font-medium shadow"
          >
            Gallery
          </a>

          <a
  href="/form"
  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium shadow"
>
  Register Now
</a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mt-10 grid gap-4 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          "Learn step by step — from N5 to N2",
          "Focus on both speaking & exams",
          "Interactive lessons with cultural insights"
        ].map((t) => (
          <div
            key={t}
            className="bg-white/85 backdrop-blur-sm rounded-2xl shadow p-5 text-gray-800 text-center"
          >
            {t}
          </div>
        ))}
      </section>
    </main>
  );
}