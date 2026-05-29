import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
            <Header />

            <main className="flex-1 pt-20 md:pt-24">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;