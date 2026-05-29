import {useState} from "react";
import {Link} from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-red-900 shadow-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center gap-3 no-underline"
                >
                    <img
                        src={logo}
                        alt="Woodwork Chios Logo"
                        className="h-14 w-32 object-contain sm:h-16 sm:w-40"
                    />

                    <span className="hidden text-lg font-semibold text-white md:block lg:text-xl">
            Ξυλουργικές Εργασίες Χίος
          </span>
                </Link>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="rounded-md border border-white/40 px-3 py-2 text-sm font-medium text-white md:hidden"
                    aria-label="Άνοιγμα μενού"
                >
                    Μενού
                </button>

                <nav className="hidden items-center gap-6 text-sm font-medium text-white md:flex">
                    <Link
                        to="/"
                        onClick={() => {
                            closeMenu();

                            setTimeout(() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }, 0);
                        }}
                    >
                        Αρχική
                    </Link>
                    <a href="/#services" className="transition hover:text-stone-200">
                        Υπηρεσίες
                    </a>

                    <a href="/#works" className="transition hover:text-stone-200">
                        Έργα
                    </a>

                    <a href="/#contact" className="transition hover:text-stone-200">
                        Επικοινωνία
                    </a>

                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-2 text-red-900 transition hover:bg-stone-100"
                    >
                        Facebook
                    </a>
                </nav>
            </div>

            {isOpen && (
                <nav className="border-t border-white/20 bg-red-900 px-4 py-4 text-white md:hidden">
                    <div className="flex flex-col gap-4 text-sm font-medium">
                        <Link to="/" onClick={closeMenu}>
                            Αρχική
                        </Link>

                        <a href="/#services" onClick={closeMenu}>
                            Υπηρεσίες
                        </a>

                        <a href="/#works" onClick={closeMenu}>
                            Έργα
                        </a>

                        <a href="/#contact" onClick={closeMenu}>
                            Επικοινωνία
                        </a>

                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="w-fit rounded-full bg-white px-4 py-2 text-red-900"
                        >
                            Facebook
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;