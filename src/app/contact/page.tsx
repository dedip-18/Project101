export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">Contact</h1>

      <section className="bg-white rounded-2xl shadow p-6 space-y-3">
        <p>
          <span className="font-medium">Name:</span> Snigdha Bhadra
        </p>
        <p>
          <span className="font-medium">Address:</span> 48, Jogendra Basak Rd, Sarat Kanan Pally, Nainan Para, Baranagar, West Bengal 700036
        </p>
        <p>
          <span className="font-medium">Phone:</span> +91 9874727893
        </p>
        <p>
          <span className="font-medium">WhatsApp:</span>{" "}
          <a
            href="https://wa.me/9874727893"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </p>
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:snigdha@example.com"
            className="text-blue-600 underline"
          >
            snigdha@example.com
          </a>
        </p>
      </section>
    </main>
  );
}
