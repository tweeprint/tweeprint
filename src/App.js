import './App.css';
import Opener from './Opener.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App flex items-center justify-center h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-2 leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Tweeprint
          </h1>
          <h2 className="text-md font-bold mb-6 text-gray-400 sm:text-md sm:truncate">
            Find and share cool twitter threads about preprints.
          </h2>
              <Opener />
              <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;
