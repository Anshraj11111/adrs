export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-0">
      <div className="container mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">ADRS Techno</h2>
            <p className="mt-3 text-gray-400">
              Smart solutions for modern businesses — Web Development, 
              Digital Marketing & IT Services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white">Contact</h4>
            <p className="mt-3 text-gray-400">Email: support@adrstechno.com</p>
            <p className="text-gray-400">Phone: +91 9201347033</p>
            <p className="text-gray-400">Address: 71, Dadda Nagar, Near Katangi Bypass, Jabalpur,
Madhya Pradesh </p>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} ADRS Techno. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
