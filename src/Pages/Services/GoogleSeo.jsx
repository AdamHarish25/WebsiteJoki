import React, { useEffect, useState } from "react";
import seoG from "../../assets/GoogleAds.png";
import logo7 from '../../assets/BrandSupport/fashThrift.png';
import logo2 from '../../assets/BrandSupport/Joys.png';
import logo3 from '../../assets/BrandSupport/PI.png';
import logo4 from '../../assets/BrandSupport/Sinefolis.png';
import logo5 from '../../assets/BrandSupport/UrusIUsaha.png';
import logo6 from '../../assets/BrandSupport/VsTravel.png';
import logo1 from '../../assets/BrandSupport/google.png';
import logo8 from '../../assets/BrandSupport/ftbw.png';

import webAnalytics from '../../assets/WebMarketingIllustration.png';

export default function GoogleAdsPage() {
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);


    const LogoMap = [
        {
            logo: logo8
        },
        {
            logo: logo1
        },
        {
            logo: logo2
        },
        {
            logo: logo3
        },
        {
            logo: logo4
        },
        {
            logo: logo5
        },
        {
            logo: logo6
        },
        {
            logo: logo7
        },
    ];

    useEffect(() => {
        document.title = "WebsiteJokiID | Pasarkan produk anda dengan orang yang professional"
    }, []);

    return (
        <div className="font-sans text-gray-700 pt-32">
            {/* Hero Section */}
            <section className="bg-white py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Jasa Iklan <span className="text-Emerald-green">Google Ads</span>
                    </h1>
                    <p className="mb-6 text-lg leading-relaxed">
                        Buat bisnis Anda tampil di halaman 1 Google dan dapatkan lebih banyak peluang
                        untuk meningkatkan penjualan dari lead atau prospek berkualitas.
                    </p>
                    <button className="px-6 py-3 bg-Emerald-green text-white rounded-lg shadow hover:bg-white hover:text-Emerald-green transition">
                        Pilih Paket ➔
                    </button>
                </div>
                <div className="flex-1">
                    <img
                        src={seoG}// Replace with your image link
                        alt="Hero Illustration"
                        className="w-full"
                    />
                </div>
            </section>

            <div className={"overflow-x-auto lg:overflow-x-hidden lg:hover:overflow-x-auto bg-green-50 py-10 flex gap-10 lg:gap-16 px-10 items-center w-full h-fit"}>
                {LogoMap.map((data, index) => {
                    return (
                        <img src={data.logo} key={index + 1} className='h-10 lg:h-14 grayscale hover:grayscale-0 transform duration-500 opacity-50 hover:opacity-100 hover:h-12' />
                    )
                })}
            </div>

            {/* Solutions Section */}
            <section className="py-16 px-6 md:px-20 text-center">
                <h2 className="text-3xl font-bold mb-10">
                    Solusi <span className="text-Emerald-green">WebsiteJokiID</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-10 text-left">
                    <div>
                        <h3 className="font-semibold mb-2">Jasa pasang iklan di halaman 1 Google</h3>
                        <p>
                            Kami membuat bisnis Anda tampil di halaman 1 Google dengan kata kunci yang relevan,
                            meningkatkan penjualan, dan menarik pelanggan potensial.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Jasa Google Ads terbaik</h3>
                        <p>
                            Mengelola iklan tanpa khawatir, kami memberikan layanan yang terbaik, optimasi iklan,
                            laporan mendalam, dan hasil yang terukur.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Melayani UMKM dan perusahaan besar</h3>
                        <p>
                            Jasa berlokasi di Jakarta, Bandung, Solo. Siap membantu UMKM, perusahaan besar, hingga
                            startup di seluruh Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="bg-green-50 py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Kenapa Pilih <span className="text-Emerald-green">WebsiteJokiID</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <ul className="space-y-4">
                            <li>✅ Tim digital marketing yang profesional</li>
                            <li>✅ Konsultasi gratis</li>
                            <li>✅ Iklan bisa langsung terlihat</li>
                        </ul>
                    </div>
                    <div className="flex justify-center lg:order-2 order-3">
                        <img src={webAnalytics} alt="Kenapa Pilih" />
                    </div>
                    <div className="lg:order-3 order-2">
                        <ul className="space-y-4">
                            <li>✅ Pemberian laporan secara berkala</li>
                            <li>✅ Harga terjangkau</li>
                            <li>✅ Update dengan perubahan Meta Ads</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Paket Section */}
            <section className="py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Pilihan Paket <span className="text-Emerald-green">Google Ads</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Basic Paket */}
                    <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
                        <h3 className="font-semibold mb-2">Basic Google Ads</h3>
                        <p className="text-2xl font-bold mb-4">Rp1.500.000</p>
                        <ul className="space-y-2 mb-4 text-sm">
                            <li>✔️ Setup account</li>
                            <li>✔️ Reset keyword dan audiens</li>
                            <li>✔️ Setup analytic tools</li>
                            <li>✔️ Optimasi harian</li>
                            <li>✔️ Laporan mingguan</li>
                        </ul>
                        <button className="w-full py-2 bg-Emerald-green text-white rounded hover:bg-white hover:text-Emerald-green">
                            Pesan Google Ads
                        </button>
                    </div>

                    {/* Standard Paket */}
                    <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
                        <h3 className="font-semibold mb-2">Standard Google Ads</h3>
                        <p className="text-2xl font-bold mb-4">Rp2.500.000</p>
                        <ul className="space-y-2 mb-4 text-sm">
                            <li>✔️ Setup account</li>
                            <li>✔️ Reset keyword dan audiens</li>
                            <li>✔️ Optimasi harian</li>
                            <li>✔️ Laporan mingguan</li>
                            <li>✔️ Penambahan CTA custom</li>
                        </ul>
                        <button className="w-full py-2 bg-Emerald-green text-white rounded hover:bg-white hover:text-Emerald-green">
                            Pesan Google Ads
                        </button>
                    </div>
                </div>
            </section>

            {/* Syarat Beriklan di Google Ads Section */}
            <section className="bg-white py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Syarat Beriklan di <span className="text-Emerald-green">Google Ads</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-10 text-left">
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Dokumen dan Informasi yang Diperlukan</h3>
                        <ul className="space-y-3 text-sm">
                            <li>✔️ Akun Google aktif</li>
                            <li>✔️ Metode pembayaran (kartu kredit/debit atau rekening lainnya)</li>
                            <li>✔️ Materi iklan (gambar, video, teks)</li>
                            <li>✔️ Link website atau landing page yang sesuai</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Kebijakan dan Aturan Google Ads</h3>
                        <ul className="space-y-3 text-sm">
                            <li>✔️ Iklan tidak melanggar kebijakan Google (produk ilegal, konten sensitif, dll.)</li>
                            <li>✔️ Website aman & tidak mengandung malware</li>
                            <li>✔️ Tidak melanggar hak cipta atau merk dagang</li>
                            <li>✔️ Menyediakan informasi kontak yang jelas (alamat, email, no. telepon)</li>
                            <li>✔️ Jasa yang tidak bersangkut paut dengan Jasa/Dokumen Pemerintah</li>

                        </ul>
                    </div>
                </div>
                {/* Optional placeholder for additional content */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-600">*Untuk detail syarat lebih lanjut, hubungi tim kami.</p>
                </div>
            </section>


            {/* CTA Section */}
            <div className="w-full grid place-items-center">
                <section className="bg-Emerald-green text-white py-16 px-6 md:px-7 text-center rounded-lg w-fit">
                    <h2 className="text-3xl font-bold mb-4">Siap Beriklan?</h2>
                    <p className="mb-6 text-lg">
                        Hubungi kami sekarang untuk mendapatkan layanan terbaik dan iklan Google Ads dari WebsiteJokiID
                        untuk meningkatkan penjualan yang lebih baik!
                    </p>
                    <button className="px-6 py-3 bg-white text-Emerald-green rounded hover:bg-Emerald-green hover:text-white transition">
                        Konsultasi Gratis
                    </button>
                </section>
            </div>

            {/* FAQ Section */}
            <section className="py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Pertanyaan yang Sering <span className="text-Emerald-green">Ditanyakan</span>
                </h2>
                <div className="space-y-4">
                    <details className={`px-4 py-2 rounded-lg hover:bg-white hover:border-Emerald-green border ${isClicked == true ? "bg-white border-Emerald-green" : "bg-gray-100 border-white"}`} onClick={() => {
                        setIsClicked(!isClicked)
                    }}>
                        <summary className="font-semibold cursor-pointer">
                            Apa yang perlu dipersiapkan untuk beriklan di Google Ads?
                        </summary>
                        <p className="mt-2 text-sm">
                            Jika Anda memiliki akun bisnis, desain atau konten, maka Anda harus menyiapkan gambar
                            promosi untuk memulai iklan.
                        </p>
                    </details>
                    <details className={`p-4 rounded-lg hover:bg-white hover:border-Emerald-green border ${isClicked2 == true ? "bg-white border-Emerald-green" : "bg-gray-100 border-white"}`} onClick={() => {
                        setIsClicked2(!isClicked2)
                    }}>
                        <summary className="font-semibold cursor-pointer">Kapan iklan akan muncul?</summary>
                        <p className="mt-2 text-sm">Segera setelah iklan disetujui oleh Google, iklan Anda akan tayang!</p>
                    </details>
                </div>
            </section>


        </div>
    );
}
