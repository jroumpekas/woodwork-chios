import { Link, useParams } from "react-router-dom";
import { getWorkBySlug } from "../data/work";

const WorkDetailsPage = () => {
    const { slug } = useParams();

    const work = getWorkBySlug(slug);

    if (!work) {
        return (
            <section className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold">Το έργο δεν βρέθηκε</h1>

                <Link
                    to="/"
                    className="mt-6 inline-block rounded-full bg-red-900 px-6 py-3 font-semibold text-white"
                >
                    Επιστροφή στην αρχική
                </Link>
            </section>
        );
    }

    return (
        <section className="container mx-auto px-4 py-14 md:py-20">
            <Link to="/#works" className="text-sm font-semibold text-red-900">
                ← Πίσω στα έργα
            </Link>

            <div className="mt-8 mb-10">
                <h1 className="text-3xl font-bold text-stone-900 md:text-4xl">
                    {work.title}
                </h1>

                <p className="mt-4 max-w-3xl leading-8 text-stone-700">
                    {work.description}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {work.images.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`${work.title} φωτογραφία ${index + 1}`}
                        className="h-72 w-full rounded-2xl object-cover shadow-sm"
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
};

export default WorkDetailsPage;