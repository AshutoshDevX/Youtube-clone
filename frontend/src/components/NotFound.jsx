import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

export function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-600 text-center px-4">
            <img
                src="https://img.icons8.com/ios/100/sad.png"
                alt="Sad face"
                className="mb-6 w-24 h-24"
            />
            <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
            <p className="text-xl mb-4">Page not found</p>
            <p className="max-w-md text-sm text-gray-500">
                The page you are looking for doesn't exist or another error occurred.<br />
                Go back, or head over to <Link to="/" className="text-blue-500 hover:underline">home</Link> to choose a new direction.
            </p>
        </div>
    );
}

