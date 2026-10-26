import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TodoApp from './components/TodoApp';
import Features from './components/Features';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={theme}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <TodoApp />
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;
