export default function ClassesPage() {
  return (
    <main className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">Classes & Contact</h1>

      <section className="grid md:grid-cols-3 gap-4">
        {[
          { level: "JLPT N5 (Beginner)", desc: "Hiragana/Katakana, basic grammar & conversation." },
          { level: "JLPT N4", desc: "Build vocabulary, reading & listening practice." },
          { level: "Spoken Japanese", desc: "Conversation-focused sessions." },
        ].map((c) => (
          <div key={c.level} className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold">{c.level}</h2>
            <p className="text-gray-700 mt-2">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold">Fees</h2>
        <p className="text-gray-700 mt-2">
          ₹18,000 total — ₹9,000 at admission + ₹9,000 at form fillup.
        </p>
      </section>

      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-3">FAQs</h2>
        <ul className="space-y-2 text-gray-800">
          <li><span className="font-medium">Online or offline?</span> Online via Google Meet.</li>
          <li><span className="font-medium">Study materials?</span> PDF notes + worksheets.</li>
          <li><span className="font-medium">Trial class?</span> 15-minute free trial.</li>
          <li><span className="font-medium">JLPT prep?</span> Yes, focused on N5–N4.</li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">
          WhatsApp: <a className="underline" href="https://wa.me/91XXXXXXXXXX">+91-9874727893</a><br/>
          Email: <a className="underline" href="mailto:snigdha@example.com">snigdha@example.com</a>
        </p>
      </section>
    </main>
  );
}
