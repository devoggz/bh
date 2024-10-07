import Login from "@/components/auth/login";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="container p-4  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <Login />
      <Footer />
    </div>
  );
};

export default page;
