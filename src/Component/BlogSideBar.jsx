import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Blog1_img from "../assets/Blogs/Blog1.png";
import Blog2_img from "../assets/Blogs/Blog2.png";
import Blog3_img from "../assets/Blogs/Blog3.png";
import Blog4_img from "../assets/Blogs/Blog4.png";

const BlogSidebar = () => {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(true);
  const [sidebarBottom, setSidebarBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Calculate when the sidebar should stop being fixed
      if (scrollY + windowHeight >= pageHeight - 200) {
        setIsFixed(false); // Stop being fixed when reaching near the footer
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const recommendedBlogs = [
    {
      id: 1,
      title: "10 Contoh SEO di Bidang IT",
      image: Blog1_img,
      link: "/Blog1",
    },
    {
      id: 2,
      title: "Contoh SEO di Bidang F&B",
      image: Blog2_img,
      link: "/Blog2",
    },
    {
      id: 3,
      title: "Contoh SEO di Bidang Selling",
      image: Blog3_img,
      link: "/Blog3",
    },
    {
      id: 4,
      title: "Mengapa Bisnismu perlu website professional di 2025?",
      image: Blog4_img,
      link: "/Blog4",
    },
  ];

  // Filter out the current page from recommendations
  const filteredBlogs = recommendedBlogs.filter(
    (blog) => blog.link !== location.pathname
  );

  return (
    <aside className="w-full lg:w-fit p-6 bg-gray-100 rounded-xl shadow-md">
      <div
        className={`space-y-2 w-fit${
          isFixed ? "fixed" : "absolute"
        }`}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <h2 className="text-lg font-semibold mb-4">🔥 Rekomendasi Blog</h2>
        <ul className="space-y-4">
          {filteredBlogs.length > 0 ? (
            <ul className="space-y-4">
              {filteredBlogs.map((blog) => (
                <li key={blog.id} className="flex items-center space-x-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <Link
                      to={blog.link}
                      className="text-sm font-medium hover:text-blue-600"
                    >
                      {blog.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">Tidak ada rekomendasi lain.</p>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
