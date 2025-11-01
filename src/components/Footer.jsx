export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#4e74d0"/>
                <path d="M12 12h8c4 0 6 2 6 6s-2 6-6 6h-2v4h-6V12zm6 8h2c1.5 0 2-0.5 2-2s-0.5-2-2-2h-2v4z" fill="white"/>
              </svg>
              <span className="text-lg font-semibold text-white">BioRep Labs</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Providing solutions for unmet medical needs through emerging technologies and innovative biotech research.
            </p>
            <p className="text-sm text-gray-500">
              Rwanda, East Africa
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-sm">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+250788999842" className="hover:text-white transition-colors">
                  +250 788 999 842
                </a>
              </li>
              <li>
                <a href="mailto:mugenganaalex3@gmail.com" className="hover:text-white transition-colors break-all">
                  mugenganaalex3@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 BioRep Labs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
