import React from "react";
import hero from "../../assets/webCustom.webp";
import { Link } from "react-router";
import FaqDropdown from "../../Component/faqCollapsible";

const CustomWebsitePage = () => {

  const data = [
    {
      moji: "🤑",
      title: "Mendapatkan leads",
    },
    {
      moji: "🤩",
      title: "Memperluas brand awareness"
    },
    {
      moji: "😎",
      title: "Meningkatkan kredibilitas bisnis"
    },
    {
      moji: "🥳",
      title: "Meningkatkan penjualan"
    },
    {
      moji: "🤗",
      title: "Memberikan pelayanan terbaik pada customer"
    },
    {
      moji: "😉",
      title: "Alat monitoring dan media promosi yang efektif"
    },
  ]

  const feedback = [
    {
      name: "Rumaya mitama",
      feeds: "Pilihan Paket yg disediakan WebsiteJokiID sangat membantu saya sebagai company owner startup!",
      location: "Jakarta"
    },
    {
      name: "Dinda Riskiana",
      feeds: "Saya sangat puas dengan performa website yang dibuat oleh WebsiteJokiID!",
      location: "Jakarta"
    },
    {
      name: "Mochamad Mada",
      feeds: "Dari Konsultasi awal hingga finalisasi website dilakukan secara sangat profesional sehingga tujuan personal branding saya dapat tercapai. Terus sukses WebsiteJokiID!",
      location: "Surabaya"
    },
  ]

  const faqs = [
    {
      question: 'Berapa lama proses pembuatan website di WebsiteJokiID?',
      answer:
        'Proses pembuatan website di WebsiteJokiID sekitar 14 hari, tergantung dari kebutuhan fitur dan revisi desain yang diperlukan.',
    },
    {
      question: 'Domain apa saja yang bisa didapatkan?',
      answer:
        'WebsiteJokiID menyediakan domain .com, .id, .co.id, .my.id, dan domain lainnya sesuai permintaan.',
    },
    {
      question: 'Apakah akan diberikan garansi?',
      answer:
        'Ya, kami memberikan garansi revisi dan dukungan teknis selama 1 bulan setelah website selesai.',
    },
    {
      question: 'Apa bisa mengelola websitenya sendiri?',
      answer:
        'Tentu! Website dilengkapi dengan dashboard admin yang memudahkan Anda mengelola konten secara mandiri.',
    },
    {
      question: 'Apakah mendapatkan akses Cpanel hosting?',
      answer:
        'Jika Anda menggunakan paket hosting dari kami, Anda akan mendapatkan akses penuh ke Cpanel.',
    },
    {
      question: 'Data apa saja yang diperlukan untuk membuat website?',
      answer:
        'Kami membutuhkan informasi usaha, gambar produk/jasa, profil bisnis, dan preferensi desain Anda.',
    },
    {
      question: 'Apakah perlu melakukan pertemuan untuk pembuatan website?',
      answer:
        'Semua proses dapat dilakukan secara online melalui WhatsApp atau email, tanpa perlu pertemuan langsung.',
    },
  ];
  

  return (
    <div className="overflow-x-hidden font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-white px-6 md:px-16 pt-40 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4 order-2 lg:order-1">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hasilkan Perkembangan Bisnis yang Maksimal dengan <span className="text-Emerald-green">Kustom Website Profesional</span>
          </h1>
          <p className="text-sm md:text-base">
            Dapatkan tool onboarding dan sistem penjualan yang bekerja maksimal untuk bisnis Anda dengan website kustom dari WebsiteJokiID.
          </p>
          <Link to="https://wa.me/6285179808325" className="bg-Emerald-green block w-fit font-semibold text-white px-6 py-2 rounded-md">
            Buat Website Kustom Sekarang
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 order-1 lg:order-2">
          <img src={hero} alt="Hero" className="w-full mx-auto" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          Manfaat Memiliki <span className="text-Emerald-green">Website Bisnis Kustom</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-Emerald-green text-3xl mb-2">{benefit.moji}</div>
              <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
              {/* <p className="text-sm text-gray-600">Deskripsi singkat tentang {benefit.toLowerCase()}.</p> */}
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
            <h3 className="text-xl font-bold mb-2"><span className="text-Emerald-green">01</span> Desain Kreatif</h3>
            <p className="text-sm text-gray-700">Tampilan yang disesuaikan dengan branding Anda.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2"><span className="text-Emerald-green">02</span> Website Responsif</h3>
            <p className="text-sm text-gray-700">Optimasi mobile dan desktop untuk kecepatan & tampilan maksimal.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2"><span className="text-Emerald-green">03</span> Fitur Canggih</h3>
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
          {feedback.map((name, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-sm italic mb-4">"{name.feeds}"</p>
              <h4 className="font-semibold">{name.name}</h4>
              <p className="text-xs text-gray-500">{name.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-6 md:px-16 text-center grid grid-cols-1 gap-10 lg:grid-cols-2">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-left">
          Saatnya Bisnis Anda Memiliki <span className="text-Emerald-green">Kustom Website Bisnis</span>
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-xl inline-block">
          <h3 className="text-lg font-bold mb-4">Paket Kustom Website Bisnis</h3>
          <ul className="text-left list-disc list-inside mb-4 text-sm">
            <li>Custom Domain</li>
            <li>Desain Profesional</li>
            <li>Halaman Unlimited</li>
            <li>Gratis Hosting & Email</li>
            <li>SEO Friendly</li>
            <li>Gratis Support & Maintenance</li>
          </ul>
          <Link to={"https://wa.me/6285179808325"} className="bg-Emerald-green font-semibold  text-white px-6 py-2 rounded-md">
            Buat Website Kustom Sekarang
          </Link>
        </div>
      </section>

      {/* CTA Section */}
                        <div className="w-full grid place-items-center">
                            <section className="bg-Emerald-green text-white py-16 px-6 md:px-7 text-center rounded-lg w-fit">
                                <h2 className="text-3xl font-bold mb-4">Siap Memperluas Jangkauan Sayap Bisnismu?</h2>
                                <p className="mb-6 text-lg">
                                    Hubungi kami sekarang untuk mendapatkan layanan terbaik dari WebsiteJokiID
                                    untuk meningkatkan penjualan yang lebih baik!
                                </p>
                                <Link to="https://wa.me/6285179808325" className="px-6 py-3 bg-white text-Emerald-green rounded hover:bg-Emerald-green hover:text-white transition">
                                    Konsultasi Gratis
                                </Link>
                            </section>
                        </div>

      <FaqDropdown faqs={faqs}/>
      {/* FAQ & Footer (optional, can be added later) */}
    </div>
  );
}

export default CustomWebsitePage;