import { Link, useParams } from "react-router-dom";
import { works } from "../data/work";

const WorkDetailsPage = () => {
    const { slug } = useParams();

    const work = works.find((item) => item.slug === slug);

    if (!work) {
        return (
            <section className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Η εργασία δεν βρέθηκε
                </h1>

                <Link to="/" className="text-red-900 font-semibold">
                    Επιστροφή στην αρχική
                </Link>
            </section>
        );
    }

    return (
        <section className="container mx-auto px-4 py-16">
            <Link to="/" className="text-red-900 font-semibold">
                ← Πίσω στην αρχική
            </Link>

            <h1 className="text-4xl font-bold mt-6 mb-4">
                {work.title}
            </h1>

            <p className="max-w-3xl text-stone-700 leading-8 mb-10">
                {work.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {work.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${work.title} ${index + 1}`}
                        className="w-full h-[280px] object-cover rounded-2xl shadow"
                    />
                ))}
            </div>
        </section>
    );
};

export default WorkDetailsPage;