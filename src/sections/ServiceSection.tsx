import { services } from "../data/services";

const ServicesSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Οι υπηρεσίες μας
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-stone-50 p-6 rounded-2xl shadow"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {service.title}
                            </h3>

                            <p className="text-stone-700 leading-7">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
