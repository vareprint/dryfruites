import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="text-black pt-3 pb-4 mt-2">
      

      {/* Bottom Bar */}
      <div className="text-center text-sm text-black-400 border-t border-gray-600 mt-8 pt-4">
          <p className="mt-2 text-[15px] sm:text-[18px] md:text-[20px] text-black-300">
            Your trusted destination for premium quality dry fruits. Fresh, hygienic, and delivered with care.<br />
            shradha@gmail.com | 9898768765
          </p>
      <p className="mt-2 text-[15px] sm:text-[18px] md:text-[20px] text-black-300"> © {new Date().getFullYear()} Your Company Name. All rights reserved</p> 
      </div>
    </footer>
  );
}

export default Footer;
