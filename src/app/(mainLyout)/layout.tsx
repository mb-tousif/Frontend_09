import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function RootPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-500">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}