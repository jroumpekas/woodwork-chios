import building from "../assets/building.jpg";

const AboutSection = () => {
    return (
        <section className="bg-white py-14 md:py-20">
            <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-900">
                        Σχετικά με εμάς
                    </p>

                    <h2 className="mb-5 text-2xl font-bold text-stone-900 md:text-3xl">
                        Με παράδοση και τεχνική γνώση
                    </h2>

                    <p className="text-base leading-8 text-stone-700">
                        Η αγάπη για το ξύλο περνά από γενιά σε γενιά. Συνδυάζοντας την
                        εμπειρία με τη φροντίδα στη λεπτομέρεια, δημιουργούμε ξύλινες
                        κατασκευές για κατοικίες, επαγγελματικούς χώρους και ειδικές
                        παραγγελίες.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl bg-stone-200 shadow-lg">
                    <img
                        src={building}
                        alt="Εργαστήριο ξυλουργικών εργασιών Χίος"
                        className="h-64 w-full object-cover sm:h-80 md:h-96"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;