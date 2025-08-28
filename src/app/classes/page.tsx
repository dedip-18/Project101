export default function ClassesPage() {
  return (
    <main className="max-w-6xl mx-auto p-4 md:p-6 space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Japanese Classes by Snigdha Bhadra</h1>
      <p className="text-gray-700">
        Snigdha Bhadra, Founder and Lead Instructor at the Institute of Japanese Language and Cultures, 
        is dedicated to helping students achieve success from absolute beginner to advanced JLPT N2 level.
      </p>

      {/* Class Levels */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">JLPT Levels Offered</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { level: "JLPT N5", desc: "Basics of Hiragana, Katakana, simple grammar & daily conversation." },
            { level: "JLPT N4", desc: "Intermediate grammar, kanji practice, reading & listening." },
            { level: "JLPT N3", desc: "Complex grammar, vocabulary building, essay writing & advanced listening." },
            { level: "JLPT N2", desc: "High-level grammar, advanced kanji, news reading, and exam strategies." },
          ].map((c) => (
            <div key={c.level} className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-semibold">{c.level}</h3>
              <p className="text-gray-700 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Study Here */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Why Learn Here?</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Guidance from an experienced teacher and founder of the institute.</li>
          <li>Focus on both exam preparation and practical communication.</li>
          <li>Structured learning path from N5 all the way up to N2.</li>
          <li>Interactive lessons with real-life examples and cultural insights.</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl shadow p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Ready to Start Your Journey?</h2>
        <p className="text-gray-700 mt-2">
          Take the first step towards mastering Japanese with Snigdha Bhadra and join a growing community of learners.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-4 py-2 rounded-xl bg-red-500 text-white font-medium"
          >
            Contact Us
          </a>
          <a
            href="/gallery"
            className="px-4 py-2 rounded-xl border border-red-400 text-red-600 font-medium"
          >
            View Gallery
          </a>
        </div>
      </section>
    </main>
  );
}