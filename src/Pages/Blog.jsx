import { Link } from 'react-router';
import Blog1 from '../assets/Blogs/Blog1.webp';
import Blog2 from '../assets/Blogs/Blog2.webp';
import Blog3 from '../assets/Blogs/Blog3.webp';
import { useEffect } from 'react';

const Blog = () => {
    const className = {
        container: "w-full h-full pt-24",
        title: "text-3xl lg:text-5xl font-bold",
        Blog: "bg-Forest-green grid place-items-center py-10 px-5 w-full h-full space-y-5 text-center",
        paragraf: "w-auto md:w-fit text-wrap text-center text-gray-500 text-sm lg:text-base",
        grid3: "w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 place-items-center",
        card: "space-y-5 bg-white w-full h-full rounded-xl",
        cardTitle: "text-2xl font-medium text-start",
        cardDesc: "text-start",
        cardImg: "object-cover w-full rounded-t-xl ",
        cardPadding: "px-8 py-5 space-y-5",
        highlight: "text-Emerald-green",

    };

    useEffect(() => {
        document.title = "WebsiteJokiID | Belajar lah hingga ke negeri cina"
    }, []);


    const BlogData = [
        {
            title: "10 Contoh SEO di Bidang IT",
            description: "10 contoh SEO yang terbukti ampuh buat bisnis IT—langsung praktik dan hasilnya terasa! Cek tips-tipsnya di artikel ini.",
            date: "20 February 2025",
            img: Blog1,
            link: "../Blog1"
        },
        {
            title: "Contoh SEO di Bidang F&B",
            description: "Bikin bisnis F&B lo makin gampang ditemuin di Google! Cek 10 contoh SEO simpel yang bisa naikin traffic dan narik pelanggan baru.",
            date: "20 March 2025",
            img: Blog2,
            link: "../Blog2"
        },
        {
            title: "Contoh SEO di Bidang Selling",
            description: "Jualan online makin susah bersaing? Tenang, cek 10 contoh SEO khusus buat ningkatin penjualan dan bikin produk lo makin gampang ditemuin calon pembeli!",
            date: "20 April 2025",
            img: Blog3,
            link: "../Blog3"
        }
    ]

    return (
        <div className={className.container}>
            <div className={className.Blog}>
                <h1 className={className.title}>
                    Blog <span className={className.highlight}>WebsiteJokiID</span>
                </h1>
                <p className={className.paragraf}>
                    Temuilah semua yang kamu perlukan dalam membangun bisnis online yang sukses. Pelajari dasar" dalam membangun bisnis online temuilah Peluang baru dengan panduan pemasaran digital eksklusif kami!
                </p>

                <div className={className.grid3}>
                    {BlogData.map((data, index) => {
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
                {/* <div className="w-full grid place-items-center ">
                    <Link className="px-10 py-3 bg-transparent border border-Emerald-green text-Emerald-green rounded-md hover:bg-Emerald-green hover:text-white transform duration-300">
                        Lihat lebih banyak
                    </Link>
                </div> */}
            </div>
        </div>
    );
}


export default Blog;