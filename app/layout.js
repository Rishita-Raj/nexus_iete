
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
    // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
    <div className=" mb-=5">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
