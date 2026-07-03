import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    // Added a global background (bg-slate-50) so the whole app feels cohesive
    // Added custom branded text highlighting (selection:...)
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-orange-600 selection:text-white font-sans text-slate-900">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;