import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Story from './components/Story';
import Visit from './components/Visit';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Menu />
      <Story />
      <Visit />
      <footer className="border-t border-yellow-500/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-400">
          © {new Date().getFullYear()} Auric Coffee • Crafted in Black & Gold
        </div>
      </footer>
    </div>
  );
}

export default App;
