import { useAuth } from "@/contexts/AuthContext";
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/Button";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? 'font-bold border-b-2 border-orange-950 text-grey'
      : 'text-grey';
  };

  return (
    <nav className="bg-white py-5 font-poppins fixed top-0 w-full z-50">
      <div className="container mx-auto w-[85%] flex justify-between items-center">

        {/* Logo atau brand */}
        <Link to="/" className="text-blue text-3xl font-bold">
          Radiance
        </Link>
        {/* Links */}
        <div className="flex space-x-14 items-center">
          <Link to="/" className={getLinkClasses('/')}>
            Beranda
          </Link>
          <Link to="/deteksi-kulit" className={getLinkClasses('/deteksi-kulit')}>
            Deteksi Kulit
          </Link>
          <Link to="/konsultasi" className={getLinkClasses('/konsultasi')}>
            Konsultasi
          </Link>
          <Link to="/bibliotek" className={getLinkClasses('/bibliotek')}>
            Bibliotek
          </Link>
          {/* Add Upgrade link */}
          {/* <Link to="/upgrade" className="text-grey">
            Upgrade
          </Link> */}
          {/* contoh fitur premium */}
          {/* {user?.role === 'premium' && (
            <Link to="/konsultasi" className="text-grey">
              Konsultasi
            </Link>
          )} */}
        </div>
        <Button onClick={""} className={"text-base px-4 py-3"} type="submit">
          Masuk/Daftar
        </Button>
      </div>
    </nav>
  );
};