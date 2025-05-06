import React from "react";

const CustomWebsitePage = () => {
  return (
    <div className="overflow-x-hidden font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-white px-6 md:px-16 pt-40 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hasilkan Perkembangan Bisnis yang Maksimal dengan <span className="text-Emerald-green">Kustom Website Profesional</span>
          </h1>
          <p className="text-sm md:text-base">
            Dapatkan tool onboarding dan sistem penjualan yang bekerja maksimal untuk bisnis Anda dengan website kustom dari WebsiteJokiID.
          </p>
          <button className="bg-Emerald-green text-white px-6 py-2 rounded-md">
            Buat Website Kustom Sekarang
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/hero-illustration.png" alt="Hero" className="w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          Manfaat Memiliki <span className="text-Emerald-green">Website Bisnis Kustom</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Mendapatkan leads",
            "Memperluas brand awareness",
            "Meningkatkan kredibilitas bisnis",
            "Meningkatkan penjualan",
            "Memberikan pelayanan terbaik pada customer",
            "Alat monitoring dan media promosi yang efektif"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-Emerald-green text-3xl mb-2">📌</div>
              <h3 className="font-semibold text-lg mb-1">{benefit}</h3>
              <p className="text-sm text-gray-600">Deskripsi singkat tentang {benefit.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why WebsiteJokiID */}
      <section className="py-12 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Mengapa Harus Buat <span className="text-Emerald-green">Website Bisnis Kustom</span> di WebsiteJokiID?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">01 Desain Kreatif</h3>
            <p className="text-sm text-gray-700">Tampilan yang disesuaikan dengan branding Anda.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">02 Website Responsif</h3>
            <p className="text-sm text-gray-700">Optimasi mobile dan desktop untuk kecepatan & tampilan maksimal.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">03 Fitur Canggih</h3>
            <p className="text-sm text-gray-700">Integrasi sistem email, domain, formulir, dan SEO.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 px-6 md:px-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          Kata <span className="text-Emerald-green">Mereka yang Puas</span> dengan Hasil Kerja Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Maya Utami", "Dinda Rizka", "Zidan Bagaskara"].map((name, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-sm italic mb-4">“Saya sangat puas dengan performa website yang dibuat oleh WebsiteJokiID!”</p>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-xs text-gray-500">Semarang</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Saatnya Bisnis Anda Memiliki <span className="text-Emerald-green">Kustom Website Bisnis</span>
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
          <h3 className="text-lg font-bold mb-4">Paket Kustom Website Bisnis</h3>
          <ul className="text-left list-disc list-inside mb-4 text-sm">
            <li>Custom Domain</li>
            <li>Desain Profesional</li>
            <li>Halaman Unlimited</li>
            <li>Gratis Hosting & Email</li>
            <li>SEO Friendly</li>
            <li>Gratis Support & Maintenance</li>
          </ul>
          <button className="bg-Emerald-green text-white px-6 py-2 rounded-md">
            Buat Website Kustom Sekarang
          </button>
        </div>
      </section>

      {/* FAQ & Footer (optional, can be added later) */}
    </div>
  );
}

export default CustomWebsitePage;