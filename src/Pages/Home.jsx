import imgHead from '../assets/Header3.gif';
import logo7 from '../assets/BrandSupport/fashThrift.png';
import logo2 from '../assets/BrandSupport/Joys.png';
import logo3 from '../assets/BrandSupport/PI.png';
import logo4 from '../assets/BrandSupport/Sinefolis.png';
import logo5 from '../assets/BrandSupport/UrusIUsaha.png';
import logo6 from '../assets/BrandSupport/VsTravel.png';
import logo1 from '../assets/BrandSupport/google.png';
import app from '../assets/appdev.webp';
import marketing from '../assets/marketing.webp';
import webdev from '../assets/webdev.webp';
import { Link } from 'react-router';
import Carousel from '../Component/carousel';
import Sinefolis from '../assets/SineFolis.png';
import VsTravel from '../assets/VsTravel.png';
import VideoCarousel from '../Component/vidCarousel';
import { div } from 'framer-motion/client';
import Footer from '../Component/Footer';
import Blog1 from '../assets/Blogs/Blog1.png';
import Blog2 from '../assets/Blogs/Blog2.png';
import Blog3 from '../assets/Blogs/Blog3.png';





const Home = () => {
    const className = {
        container: "w-screen h-aut bg-gray-100 overflow-x-hidden",
        title: "text-3xl lg:text-5xl font-bold",
        highlight: "text-Emerald-green",
        lowlight: "text-xl lg:text-3xl",
        grid: "w-full h-auto place-items-center gap-10 grid grid-cols-1 lg:grid-cols-2 pt-20 px-10 ",
        button: "px-10 py-5 bg-Emerald-green font-medium text-white rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-emerald-700",
        paraBox: "w-full space-y-6 order-2 lg:order-1",
        imgBox: "order-1 lg:order-2 w-full grid place-items-end h-full p-10",
        img: "h-full w-full object-cover",
        scrollingLogo: "overflow-x-auto bg-Forest-green py-10 flex gap-10 lg:gap-16 px-10 items-center w-full h-fit",
        list: "w-full space-y-5 list-none",
        gridOuter: "bg-Forest-green w-screen h-fit px-10 lg:px-20 py-10 space-y-10",

        rectangles: "bg-white w-full h-fit px-5 py-5 rounded-xl ",
        buttonRound: "rounded-full px-6 py-3 border border-black text-black transform duration-300 bg-white hover:bg-Emerald-green hover:border-white hover:text-white ",

        Blog: "bg-Forest-green grid place-items-center py-10 px-5 w-full h-full space-y-5 text-center",
        paragraf: "w-auto md:w-fit text-wrap text-center text-gray-500 text-sm lg:text-base",
        grid3: "w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 place-items-center",
        card: "space-y-5 bg-white w-full h-full rounded-xl",
        cardTitle: "text-2xl font-medium text-start",
        cardDesc: "text-start",
        cardImg: "object-cover w-full rounded-t-xl ",
        cardPadding: "px-8 py-5 space-y-5",
       
    };

    const gifUrl = imgHead + "?noCache=" + new Date().getTime();


    const slides = [
        { id: 1, image: Sinefolis, title: "SineFolis Theatre", description: "Experience the magic of movies." },
        { id: 2, image: VsTravel, title: "VsTravel", description: "Travelling made easy." },
    ];

    const LogoMap = [
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

    const Services = [
        {
            img: app,
            illustration: "Aplikasi",
            title: "Pembuatan",
            description: "Bangun aplikasi mobile kustom yang intuitif, fungsional, dan menghadirkan pengalaman pengguna yang menyenangkan.",
            button: [
                {
                    text: "Aplikasi Android",
                    link: "https://App.cibubur.com"
                },
                {
                    text: "Aplikasi IOS",
                    link: "https://App.IOS.com"
                },
                {
                    text: "Aplikasi Multi-platform",
                    link: "https://App.multiplatform.com"
                }
            ],

        },
        {
            img: webdev,
            illustration: "Website",
            title: "Pembuatan",
            description: "Ciptakan website yang menarik, responsif, adaptif, dan ramah SEO untuk meningkatkan visibilitas di mesin pencari serta mendukung penjualan bisnis Anda.",
            button: [
                {
                    text: "Toko Online",
                    link: "https://App.cibubur.com"
                },
                {
                    text: "Company Profile",
                    link: "https://App.IOS.com"
                },
                {
                    text: "Landing Page",
                    link: "https://App.multiplatform.com"
                },
                {
                    text: "Sistem Informasi",
                    link: "https://App.multiplatform.com"
                },
                {
                    text: "Kustom Website",
                    link: "https://App.multiplatform.com"
                },
            ],
        },
        {
            img: marketing,
            illustration: "Media Ads",
            title: "Layanan ",
            description: "Gunakan layanan digital kami yang lain, termasuk iklan digital, manajemen media sosial, optimasi SEO, hingga infrastruktur cloud, untuk memaksimalkan potensi bisnis Anda.",
            button: [
                {
                    text: "Google Ads",
                    link: "https://App.cibubur.com"
                },
                {
                    text: "Meta Ads",
                    link: "https://App.IOS.com"
                },
                {
                    text: "Management Social Media",
                    link: "https://App.multiplatform.com"
                }
            ],
        }
    ];

    const Blog = [
        {
            title: "10 Contoh SEO di Bidang IT",
            description: "10 contoh SEO yang terbukti ampuh buat bisnis IT—langsung praktik dan hasilnya terasa! Cek tips-tipsnya di artikel ini.",
            date: "20 February 2025",
            img: Blog1,
            link: "Blog1"
        },
        {
            title: "Contoh SEO di Bidang F&B",
            description: "Bikin bisnis F&B lo makin gampang ditemuin di Google! Cek 10 contoh SEO simpel yang bisa naikin traffic dan narik pelanggan baru.",
            date: "20 March 2025",
            img: Blog2,
            link: "Blog2"
        },
        {
            title: "Contoh SEO di Bidang Selling",
            description: "Jualan online makin susah bersaing? Tenang, cek 10 contoh SEO khusus buat ningkatin penjualan dan bikin produk lo makin gampang ditemuin calon pembeli!",
            date: "20 April 2025",
            img: Blog3,
            link: "Blog3"
        }
    ]
    return (
        <div className={className.container}>
            <div className={`${className.grid} pb-10`}>
                <div className={className.paraBox}>
                    <h1 className={className.title}>Level up Bisnis Anda dengan <br /> <span className={className.highlight}>Website, Google ADS, & Aplikasi Sesuai kebutuhanmu!</span></h1>
                    <p>
                        Kami adalah mitra teknologi yang mengembangkan aplikasi kustom, website, dan SEO Google sesuai kebutuhan untuk mengoptimalkan potensi bisnis Anda.
                    </p>
                    <button className={className.button}>
                        Konsultasi Gratis -{`>`}
                    </button>
                </div>


                <div className={className.imgBox}>
                    <img src={gifUrl} className={className.img} alt="women holding a laptop while standing" />
                </div>
            </div>

            <div className={className.scrollingLogo}>
                {LogoMap.map((data, index) => {
                    return (
                        <img src={data.logo} key={index + 1} className='h-10 lg:h-14 grayscale hover:grayscale-0 transform duration-500 opacity-50 hover:opacity-100 hover:h-12' />
                    )
                })}
            </div>

            <div className={`${className.grid} pb-10`}>
                <div className={className.paraBox}>
                    <h1 className={className.title}>
                        <span className={className.highlight}>Telah dipercaya </span> <br /> <span className={className.lowlight}>oleh banyak dari</span> Client Kami
                    </h1>
                    <p>
                        Dengan pengalaman lebih dari 5 tahun dalam merancang, mengembangkan, dan mengelola perangkat lunak, kami siap menjadi mitra terbaik untuk membantu Anda mencapai tujuan bisnis melalui penerapan teknologi digital.

                        Kami dapat mendukung Anda dalam berbagai aspek berikut:
                    </p>
                </div>
                <div className={className.paraBox}>
                    <ul className={className.list}>
                        <li>
                            <div className='flex divide-x-4 items-center gap-5'>
                                <h1 className={`${className.title} text-Emerald-green`}>01</h1>

                                <div className='pl-4'>
                                    <h4 className='font-bold font-2xl'>
                                        Lebih Efisien dalam Bekerja
                                    </h4>
                                    <p>
                                        Mengadopsi teknologi digital yang tepat memungkinkan Anda menghemat waktu, mengurangi pemborosan biaya, dan menyelesaikan tugas lebih cepat dibandingkan dengan metode manual.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex divide-x-4 items-center gap-5'>
                                <h1 className={`${className.title} text-Emerald-green`}>
                                    02
                                </h1>

                                <div className='pl-4'>
                                    <h4 className='font-bold font-2xl'>Meningkatkan Kinerja dan Produktivitas</h4>
                                    <p>
                                        Permudah proses serta alur kerja yang kompleks dengan otomatisasi digital, sehingga pekerjaan menjadi lebih efisien dan produktivitas meningkat.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex divide-x-4 items-center gap-5'>
                                <h1 className={`${className.title} text-Emerald-green`}>
                                    03
                                </h1>
                                <div className='pl-4'>
                                    <h4 className='font-bold font-2xl'>Akses Data Secara Real-Time</h4>
                                    <p>Dapatkan informasi terkini mengenai kebutuhan internal dan eksternal bisnis Anda, mulai dari analisis penjualan, perilaku pelanggan, hingga tren pasar untuk mengoptimalkan strategi bisnis.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={className.gridOuter}>
                <h1 className={`${className.title} text-center`}>
                    <span className={className.highlight}>Solusi dan Layanan IT</span> yang kami <br className='hidden md:block' />sediakan khusus untuk <span className={className.highlight}>Anda!</span>
                </h1>

                <ul className={className.list}>
                    {Services.map((data, index) => {
                        return (
                            <li key={index} className={className.rectangles}>
                                <div className={`pb-10 ${className.grid}`}>
                                    <div className={`${className.paraBox} ${index % 2 == 0 ? "order-1 lg:order-2" : "order-2 lg:order-1"}`}>
                                        <h1 className={`text-3xl md:text-4xl font-bold`}>
                                            {data.title} <br /><span className={className.highlight}>{data.illustration}</span>
                                        </h1>
                                        <p>
                                            {data.description}
                                        </p>
                                        <div className='w-fit py-5 grid grid-cols-1 md:grid-cols-2 place-items-start gap-5'>
                                            {data.button.map((buttons, index2) => {
                                                return (
                                                    <Link to={buttons.link} className={className.buttonRound}>
                                                        {buttons.text}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <img className={`w-96 object-cover rounded-full shadow-2xl shadow-Forest-green ${index % 2 == 0 ? "order-1" : "order-2"}`} src={data.img} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='grid place-items-center py-10'>
                <div className="w-3/4 lg:w-full lg:max-w-4xl p-12 rounded-[40px] text-white text-center bg-gradient-to-r from-[#2ECC71] via-[#27AE60] to-[#219150] shadow-2xl relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 pointer-events-none mix-blend-overlay"></div>

                    <h2 className="text-2xl lg:text-4xl font-extrabold mb-6 drop-shadow-md">
                        Siap Digitalkan Bisnis Anda dengan <br /> Layanan Terbaik Kami?
                    </h2>

                    <p className="mb-10 text-sm lg:text-lg leading-relaxed text-white/90">
                        Lakukan konsultasi mengenai kebutuhan IT dan digitalisasi bisnis Anda terlebih dahulu.
                        Selanjutnya, tim desainer dan pengembang kami yang profesional akan siap membantu meningkatkan
                        bisnis Anda ke level yang lebih tinggi!
                    </p>

                    <button className="px-8 py-4 bg-white text-[#2ECC71] font-semibold rounded-full shadow-md hover:bg-[#2ECC71] hover:text-white transition-all duration-300 ease-in-out">
                        Konsultasi Sekarang
                    </button>
                </div>

            </div>

            <div className={'w-full space-y-10 text-center'}>
                <div className='space-y-3'>
                    <h1 className={className.title}>
                        Sekarang Saatnya
                        jadikan<br /> <span className={className.highlight}>ide anda menjadi kenyataan! </span>               </h1>
                    <p className='text-gray-500 text-sm lg:text-base'>Cari inspirasi dari proyek" kami!</p>
                </div>

                <Carousel slides={slides} />
            </div>

            <div className='w-full space-y-10 text-center py-10'>
                <div className='space-y-3'>
                    <h1 className={className.title}>Berbagai Testimoni dari <span className={className.highlight}>Klien Kami</span></h1>
                    <p className='text-gray-500 mx-10 text-sm lg:text-base'>Kami selalu berusaha utk memberikan yang terbaik bagi klien kami, simak apa kata klien kami yang telah mencobanya!</p>
                </div>

                <VideoCarousel />
            </div>

            <div className={className.Blog}>
                <h1 className={className.title}>
                    Blog <span className={className.highlight}>WebsiteJokiID</span>
                </h1>
                <p className={className.paragraf}>
                    Temuilah semua yang kamu perlukan dalam membangun bisnis online yang sukses. Pelajari dasar" dalam membangun bisnis online temuilah Peluang baru dengan panduan pemasaran digital eksklusif kami!
                </p>

                <div className={className.grid3}>
                    {Blog.map((data, index) => {
                        return (
                            <div className={className.card}>
                                <Link to={data.link}><img src={data.img} alt={`Img -> ${index + 1}`} className={className.cardImg} /></Link>
                                <div className={className.cardPadding}>
                                    <Link to={data.link}>
                                        <h1 className={className.cardTitle}>
                                            {data.title}
                                        </h1>
                                    </Link>
                                    <p className={`${className.cardDesc} ${className.paragraf}`}>
                                        {data.description}
                                    </p>

                                    <hr />
                                    <p className={className.cardDesc}>{data.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full grid place-items-center ">
                    <Link className="px-10 py-3 bg-transparent border border-Emerald-green text-Emerald-green rounded-md hover:bg-Emerald-green hover:text-white transform duration-300">
                        Lihat lebih banyak
                    </Link>
                </div>
            </div>

            
        </div>
    );
}


export default Home;