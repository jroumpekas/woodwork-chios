import { useState, type MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const closeMenu = () => {
        setIsOpen(false);
    };

    const runAfterNavigation = (callback: () => void) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(callback);
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);

        if (!section) {
            return;
        }

        const headerHeight = 80;
        const sectionPosition =
            section.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
        });
    };

    const handleHomeClick = (
        event: MouseEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
        closeMenu();

        navigate("/");

        runAfterNavigation(scrollToTop);
    };

    const handleSectionClick =
        (sectionId: string) =>
            (event: MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
                closeMenu();

                navigate(`/#${sectionId}`);

                runAfterNavigation(() => {
                    scrollToSection(sectionId);
                });
            };

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-red-900 shadow-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link
                    to="/"
                    onClick={handleHomeClick}
                    aria-label="Επιστροφή στην αρχική σελίδα"
                    className="flex shrink-0 cursor-pointer items-center no-underline"
                >
                    <img
                        src={logo}
                        alt="Woodwork Chios Logo"
                        className="h-14 w-32 object-contain sm:h-16 sm:w-40"
                    />
                </Link>

                <span className="hidden text-lg font-semibold text-white md:block lg:text-xl">
                    Ξυλουργικές Εργασίες Χίος
                </span>

                <button
                    type="button"
                    onClick={() => setIsOpen((previous) => !previous)}
                    aria-label={
                        isOpen
                            ? "Κλείσιμο μενού"
                            : "Άνοιγμα μενού"
                    }
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    className="rounded-md border border-white/40 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:hidden"
                >
                    {isOpen ? "Κλείσιμο" : "Μενού"}
                </button>

                <nav className="hidden items-center gap-6 text-sm font-medium text-white md:flex">
                    <Link
                        to="/"
                        onClick={handleHomeClick}
                        className="transition hover:text-stone-200"
                    >
                        Αρχική
                    </Link>

                    <Link
                        to="/#services"
                        onClick={handleSectionClick("services")}
                        className="transition hover:text-stone-200"
                    >
                        Υπηρεσίες
                    </Link>

                    <Link
                        to="/#works"
                        onClick={handleSectionClick("works")}
                        className="transition hover:text-stone-200"
                    >
                        Έργα
                    </Link>

                    <Link
                        to="/#contact"
                        onClick={handleSectionClick("contact")}
                        className="transition hover:text-stone-200"
                    >
                        Επικοινωνία
                    </Link>

                    <a
                        href="https://www.facebook.com/profile.php?id=100083273590487"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-2 text-red-900 transition hover:bg-stone-100"
                    >
                        Facebook
                    </a>
                </nav>
            </div>

            {isOpen && (
                <nav
                    id="mobile-navigation"
                    className="border-t border-white/20 bg-red-900 px-4 py-4 text-white md:hidden"
                >
                    <div className="flex flex-col gap-4 text-sm font-medium">
                        <Link
                            to="/"
                            onClick={handleHomeClick}
                            className="transition hover:text-stone-200"
                        >
                            Αρχική
                        </Link>

                        <Link
                            to="/#services"
                            onClick={handleSectionClick("services")}
                            className="transition hover:text-stone-200"
                        >
                            Υπηρεσίες
                        </Link>

                        <Link
                            to="/#works"
                            onClick={handleSectionClick("works")}
                            className="transition hover:text-stone-200"
                        >
                            Έργα
                        </Link>

                        <Link
                            to="/#contact"
                            onClick={handleSectionClick("contact")}
                            className="transition hover:text-stone-200"
                        >
                            Επικοινωνία
                        </Link>

                        <a
                            href="https://www.facebook.com/profile.php?id=100083273590487"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="w-fit rounded-full bg-white px-4 py-2 text-red-900 transition hover:bg-stone-100"
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