import './globals.css';
import Navbar from './components/Navbar';
export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio built with Next.js and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
       <Navbar/>
        <main className="flex-1">{children}</main>
        
      </body>
    </html>
  );
}
