import { services } from "../data/services";

const ServicesSection = () => {
    return (
        <section id="services" className="bg-white py-14 md:py-20 scroll-mt-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-900">
                        Υπηρεσίες
                    </p>

                    <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
                        Οι υπηρεσίες μας
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <article
                            key={service.title}
                            className="rounded-2xl bg-stone-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <h3 className="mb-3 text-xl font-semibold text-stone-900">
                                {service.title}
                            </h3>

                            <p className="leading-7 text-stone-700">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;