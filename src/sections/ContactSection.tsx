const ContactSection = () => {
    return (
        <section id="contact" className="bg-red-900 py-14 text-white md:py-20 scroll-mt-24">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                    Επικοινωνία
                </p>

                <h2 className="mx-auto max-w-2xl text-2xl font-bold md:text-3xl">
                    Θέλετε να συζητήσουμε τη δική σας κατασκευή;
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/90">
                    Επικοινωνήστε μαζί μας για ξυλουργικές εργασίες, ειδικές παραγγελίες
                    και κατασκευές προσαρμοσμένες στις ανάγκες σας.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="https://www.facebook.com/TO-DIKO-SOU-LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-6 py-3 font-semibold text-red-900 transition hover:bg-stone-100"
                    >
                        Επικοινωνία μέσω Facebook
                    </a>

                    <a
                        href="#works"
                        className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-red-900"
                    >
                        Δείτε εργασίες
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;