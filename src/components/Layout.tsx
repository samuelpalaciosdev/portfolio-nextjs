import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <header className="nav__header">
            <Navbar />
          </header>
          <main className="px-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;
