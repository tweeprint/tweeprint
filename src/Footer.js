import { Link } from "react-router-dom";

const Footer = () => {
    
    return (
        <footer className="bg-blue">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">

                <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">
                About
                </Link>
            </div>
            </nav>
            <div className="mt-8 flex justify-center space-x-6">

            </div>
            <p className="mt-8 text-center text-base text-gray-400">
                inspired by <a className="text-cyan-600" href="https://twitter.com/neuralreckoning/status/1370739540843974658">this thread</a>
            </p>
        </div>
        </footer>


    )
}
export default Footer;
