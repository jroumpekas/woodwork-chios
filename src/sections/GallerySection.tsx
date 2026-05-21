import { Link } from "react-router-dom";
import {works} from "../data/work";

const GallerySection = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-4">
                Ενδεικτικές εργασίες
            </h2>

            <p className="text-center text-stone-700 mb-10">
                Μερικά δείγματα από ξυλουργικές εργασίες και κατασκευές που έχουμε
                αναλάβει.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {works.map((work) => (
                    <Link
                        key={work.slug}
                        to={`/works/${work.slug}`}
                        className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition no-underline text-stone-900"
                    >
                        <img
                            src={work.image}
                            alt={work.title}
                            className="w-full h-[220px] object-cover"
                        />

                        <div className="p-4">
                            <h3 className="font-semibold">{work.title}</h3>
                            <p className="text-sm text-stone-600 mt-2">
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