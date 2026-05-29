import { Link } from "react-router-dom";
import { works } from "../data/work";

const GallerySection = () => {
    return (
        <section id="works" className="container mx-auto px-4 py-14 md:py-20 scroll-mt-24">
            <div className="mx-auto mb-10 max-w-2xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-900">
                    Portfolio
                </p>

                <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
                    Ενδεικτικές εργασίες
                </h2>

                <p className="mt-4 leading-7 text-stone-700">
                    Μερικά δείγματα από ξυλουργικές εργασίες και κατασκευές που έχουμε αναλάβει.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {works.map((work) => (
                    <Link
                        key={work.slug}
                        to={`/works/${work.slug}`}
                        className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <img
                            src={work.image}
                            alt={work.title}
                            className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                            loading="lazy"
                        />

                        <div className="p-4">
                            <h3 className="font-semibold text-stone-900">
                                {work.title}
                            </h3>

                            <p className="mt-2 text-sm text-stone-600">
                                Δείτε περισσότερες φωτογραφίες
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;