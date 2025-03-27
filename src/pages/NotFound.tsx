
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="h-20 w-20 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto">
            <span className="text-5xl font-bold text-teal-500">4</span>
          </div>
          <div className="h-24 w-24 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto -mt-10">
            <span className="text-6xl font-bold text-teal-500">0</span>
          </div>
          <div className="h-20 w-20 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto -mt-10">
            <span className="text-5xl font-bold text-teal-500">4</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="btn btn-primary btn-lg inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
