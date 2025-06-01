const Landing: React.FC = () => {
    return (
      <div>
        <h1 className="text-xl font-extralight">Landing Page</h1>
        <nav className="space-x-4">
        <a href="/" className="text-blue-600 underline">Back to Home</a>
        <a href="/about" className="text-blue-600 underline">Go to About Page</a>
      </nav>
      </div>
    );
  };
  
  export default Landing;
  