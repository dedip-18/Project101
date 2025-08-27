export default function Page() {
  return (
    <main className="max-w-6xl mx-auto p-4 md:p-6">
      <section className="bg-white rounded-2xl shadow p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Learn Japanese with <span className="text-red-500">Snigdha Bhadra</span>
        </h1>
        <p className="mt-3 text-gray-700">
          Teacher at Secretary of Institute of Japanese Language and Cultures. JLPT-focused, beginner-friendly classes.
        </p>
        <div className="mt-5 flex gap-3">
          <a href="/classes" className="px-4 py-2 rounded-xl bg-gray-900 text-white">View Classes</a>
          <a href="https://wa.me/91XXXXXXXXXX" className="px-4 py-2 rounded-xl border border-gray-300">WhatsApp</a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {["JLPT N5–N4 prep","Speaking practice","Notes & feedback"].map((t)=>(
          <div key={t} className="bg-white rounded-2xl shadow p-5 text-gray-800">{t}</div>
        ))}
      </section>
    </main>
  );
}

