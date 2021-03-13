import './App.css';
import Opener from './Opener.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App flex items-center justify-center h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
              <Opener />
              <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;
