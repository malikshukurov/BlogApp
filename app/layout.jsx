import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar'; 
import Footer from '@/components/layout/Footer'; 

export const metadata = {
  title: 'MyBlog - Kəşf Et və Paylaş',
  description: 'Next.js App Router və Axios Real API ilə qurulmuş peşəkar bloq platforması',
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className="bg-slate-50 text-slate-900 min-h-screen antialiased font-sans">
        
        <div className="min-h-screen flex flex-col justify-between">
          
          {/* Yeni Modulyar Navbar */}
          <Navbar />

          {/* Səhifələrin Əsas Məzmunu */}
          <div className="flex-grow">
            {children}
          </div>

          {/* Qlobal Təmiz Footer */}
          <Footer />
          
          
        </div>
      </body>
    </html>
  );
}