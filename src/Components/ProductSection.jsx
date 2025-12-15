import React, { useRef, useLayoutEffect, useState } from "react";
import { ArrowUpRight, Github, Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productsData from "../data/products.json";

gsap.registerPlugin(ScrollTrigger);

// Dummy products to ensure we have at least 5 cards initially
const initialDummyProducts = [
]

// Additional products shown when "View More" is clicked
const moreDummyProducts = [
]

const ProductSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const containerRef = useRef(null);
    const [favorites, setFavorites] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".product-card-item");
            // Calculate total width of all cards + gaps
            // We can estimate or measure. Let's use a scroll based on container width
            const totalWidth = containerRef.current.scrollWidth;
            const windowWidth = window.innerWidth;

            // Only scroll if content is wider than screen
            if (totalWidth > windowWidth) {
                gsap.to(containerRef.current, {
                    x: () => -(containerRef.current.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        // Adjust duration based on number of cards
                        end: () => "+=" + (containerRef.current.scrollWidth - window.innerWidth),
                        invalidateOnRefresh: true,
                    }
                });
            }
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            clearTimeout(timer);
            ctx.revert();
        };
    }, [isExpanded, productsData]); // Re-run when expanded

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    // Combine all data sources
    const allProducts = [...productsData, ...initialDummyProducts, ...moreDummyProducts];

    // Visible products logic
    const visibleProducts = isExpanded ? allProducts : allProducts.slice(0, 5);

    // Extended offsets for more cards


    return (
        <div id="projects-section">
            <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 text-gray-900 overflow-hidden h-screen flex flex-col justify-center z-30">
                {/* Header Section - Fixed */}
                <div className="absolute top-0 left-0 w-full z-20 p-4 md:p-6 pointer-events-none">
                    <div className="max-w-2xl">
                        <div className="inline-block pl-10">
                            <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide text-gray-800 border-b-2 border-gray-800 inline-block pb-1">
                                Projects
                            </h2>

                        </div>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div ref={triggerRef} className="w-full flex items-center pl-8 md:pl-12 pt-16">
                    <div ref={containerRef} className="flex flex-nowrap gap-8 items-center">
                        {visibleProducts.map((project, index) => (
                            <div
                                key={project.id}
                                className="group w-[300px] md:w-[400px] h-[350px] md:h-[450px] flex-shrink-0 perspective-[1000px] mt-0 cursor-pointer"
                            >
                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">

                                    {/* --- FRED: FRONT FACE (Image + Title) --- */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-gray-200">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                            <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                                <span className="inline-block px-2 py-0.5 mb-2 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white leading-tight">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- BACK FACE (Description + Explore) --- */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-gray-900 text-white p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700">
                                        <h4 className="text-lg font-bold mb-3 text-gray-100">{project.title}</h4>
                                        <p className="text-sm text-gray-300 mb-8 leading-relaxed line-clamp-5">
                                            {project.desc}
                                        </p>

                                        <Link
                                            to={`/product/${project.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-wider hover:bg-gray-200 hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
                                        >
                                            Explore
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* View More Button Card */}
                        {!isExpanded && allProducts.length > 5 && (
                            <div className="product-card-item w-[300px] md:w-[400px] flex-shrink-0 h-[350px] md:h-[450px] flex items-center justify-center">
                                <Link
                                    to="/projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-8 py-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 shadow-md"
                                >
                                    <span className="text-sm font-semibold text-gray-900 uppercase tracking-widest">View More</span>
                                    <Plus className="w-4 h-4 text-gray-900 group-hover:rotate-90 transition-transform duration-300" />
                                </Link>
                            </div>
                        )}

                        {/* Spacer for end of scroll */}
                        <div className="w-[10vw] flex-shrink-0"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductSection;
