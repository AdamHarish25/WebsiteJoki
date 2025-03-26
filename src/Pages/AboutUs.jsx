import React, { useEffect } from 'react';

const AboutUs = () => {

  useEffect(() => {
    document.title = "WebsiteJokiID | Sejarah kita yang buat, kalian yang baca"
  }, []);

  return (
    <div className="bg-white text-gray-700 font-sans pt-28">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Tentang <span className="text-Emerald-green">WebsiteJokiID</span></h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-500">
          WebsiteJokiID hadir sejak 2020 untuk membantu pelaku bisnis, akademisi, dan personal meningkatkan kualitas digital mereka. Kami menyediakan layanan pembuatan website, maintenance, hingga konsultasi branding digital.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Kenapa Memilih Kami?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-Emerald-green text-4xl mb-4">🚀</div>
              <h3 className="font-semibold text-lg text-gray-800">Profesional & Berpengalaman</h3>
              <p className="text-gray-500 mt-2 text-sm">Tim kami berpengalaman lebih dari 5 tahun di industri digital, siap memberikan solusi terbaik untuk kebutuhan website Anda.</p>
            </div>
            <div className="text-center">
              <div className="text-Emerald-green text-4xl mb-4">🔧</div>
              <h3 className="font-semibold text-lg text-gray-800">Teknologi Terkini</h3>
              <p className="text-gray-500 mt-2 text-sm">Kami menggunakan teknologi dan tools terbaru agar website Anda tampil optimal, cepat, dan aman.</p>
            </div>
            <div className="text-center">
              <div className="text-Emerald-green text-4xl mb-4">💡</div>
              <h3 className="font-semibold text-lg text-gray-800">Ide Menjadi Kenyataan</h3>
              <p className="text-gray-500 mt-2 text-sm">Ide kreatif Anda akan kami bantu wujudkan dengan pendekatan yang strategis dan terarah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Nilai Kami</h2>
          <div className="grid md:grid-cols-5 gap-6 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-Emerald-green text-3xl mb-2">🎯</div>
              <h4 className="font-semibold">Goal-Oriented</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-Emerald-green text-3xl mb-2">🚀</div>
              <h4 className="font-semibold">Responsive</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-Emerald-green text-3xl mb-2">⚡</div>
              <h4 className="font-semibold">Efficient</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-Emerald-green text-3xl mb-2">🤝</div>
              <h4 className="font-semibold">Accountable</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-Emerald-green text-3xl mb-2">📈</div>
              <h4 className="font-semibold">Trustworthy</h4>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Cara Kerja Kami</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6">
              <div className="text-Emerald-green text-4xl">1</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Analisis</h3>
                <p className="text-gray-500 mt-2 text-sm">Kami mulai dengan memahami kebutuhan bisnis dan target audiens Anda agar strategi yang kami susun relevan dan tepat sasaran.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6">
              <div className="text-Emerald-green text-4xl">2</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Pengembangan</h3>
                <p className="text-gray-500 mt-2 text-sm">Desain dan pengembangan website dilakukan oleh tim ahli yang memastikan kualitas dan performa website tetap optimal.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6">
              <div className="text-Emerald-green text-4xl">3</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Iterasi & Evaluasi</h3>
                <p className="text-gray-500 mt-2 text-sm">Setelah website live, kami terus melakukan evaluasi dan perbaikan demi meningkatkan performa dan user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="bg-purple-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">Tim WebsiteJokiID</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <h4 className="font-semibold text-gray-800">Adam H.</h4>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <h4 className="font-semibold text-gray-800">Rina P.</h4>
              <p className="text-sm text-gray-500">Project Manager</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <h4 className="font-semibold text-gray-800">Dimas R.</h4>
              <p className="text-sm text-gray-500">Lead Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <h4 className="font-semibold text-gray-800">Sari M.</h4>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Punya Project Baru?</h2>
          <p className="text-gray-500 mb-8">Yuk, diskusiin kebutuhan website kamu sama tim kami sekarang!</p>
          <button className="bg-Emerald-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-Emerald-green transition">Hubungi Kami</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
