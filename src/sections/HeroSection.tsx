const HeroSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 text-center md:py-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-900">
                Woodwork Chios
            </p>

            <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-stone-900 sm:text-4xl md:text-5xl">
                Ξυλουργικές Εργασίες Χίος με έμφαση στην ποιότητα και τη λεπτομέρεια
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-stone-700 md:text-lg">
                Οικογενειακή επιχείρηση δεύτερης γενιάς, με αγάπη για το ξύλο,
                μεράκι και τεχνική συνέπεια. Αναλαμβάνουμε ξυλουργικές εργασίες και
                ειδικές κατασκευές, προσαρμοσμένες στις ανάγκες κάθε πελάτη.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                    href="#works"
                    className="rounded-full bg-red-900 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
                >
                    Δείτε εργασίες
                </a>

                <a
                    href="#contact"
                    className="rounded-full border border-red-900 px-6 py-3 font-semibold text-red-900 transition hover:bg-red-50"
                >
                    Επικοινωνία
                </a>
            </div>
        </section>
    );
};

export default HeroSection;