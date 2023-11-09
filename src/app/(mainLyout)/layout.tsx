import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ScrollToTop from "@/components/ui/NavigateButton";

export default function RootPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}