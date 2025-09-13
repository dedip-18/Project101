export default function FormPage() {
  return (
    <main className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Student Registration Form</h1>
      <div className="bg-white rounded-2xl shadow p-4">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScpXmEfaSwoc-Swi5dfvZA-TFdCYrreANvQ_R9fLJ1MrIrclw/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}