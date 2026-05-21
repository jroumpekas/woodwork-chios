import building from "../assets/building.jpg";

const AboutSection = () => {
    return (
        <section className="bg-white py-14">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Με παράδοση και τεχνική γνώση
                    </h2>

                    <p className="text-stone-700 leading-8">
                        Η αγάπη για το ξύλο περνά από γενιά σε γενιά. Συνδυάζοντας την
                        εμπειρία με τη φροντίδα στη λεπτομέρεια, δημιουργούμε ξύλινες
                        κατασκευές για κατοικίες, επαγγελματικούς χώρους και ειδικές
                        παραγγελίες.
                    </p>
                </div>

                <div className="bg-stone-200 rounded-2xl overflow-hidden shadow">
                    <img
                        src={building}
                        alt="Ξυλουργικές εργασίες"
                        className="w-full h-[320px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;