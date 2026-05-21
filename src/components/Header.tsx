const Header = () => {
    return (
        <header className="bg-red-900 fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3 no-underline">
                    <img
                        src="./src/assets/logo.png"
                        alt="Woodwork Chios Logo"
                        className="h-[70px] w-[170px] object-contain"
                    />

                    <span className="text-white text-xl font-semibold">
            Ξυλουργικές Εργασίες Χίος
          </span>
                </a>

                <nav className="flex gap-4 text-white font-medium">
                    <a href="/">Αρχική</a>

                    <a href="https://www.facebook.com/./src/assets/logo.png " target="_blank"
                       rel="noopener noreferrer">Facebook</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;