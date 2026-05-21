const ContactSection = () => {
    return (
        <section className="bg-red-900 text-white py-12 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">
                    Θέλετε να συζητήσουμε τη δική σας κατασκευή;
                </h2>

                <p className="mb-6 text-white/90">
                    Επικοινωνήστε μαζί μας για ξυλουργικές εργασίες και ειδικές
                    παραγγελίες.
                </p>

                <a
                    href="https://www.facebook.com/TO-DIKO-SOU-LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-red-900 px-6 py-3 rounded-full font-semibold hover:bg-stone-100 transition"
                >
                    Επικοινωνία μέσω Facebook
                </a>
            </div>
        </section>
    );
};

export default ContactSection;