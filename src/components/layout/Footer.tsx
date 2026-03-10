

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    
        <footer className="w-full bg-zinc-900 text-white p-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Our Offices */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
          <p className="text-zinc-400 text-sm">123 Fashion Ave<br />Style City, SC 12345<br />USA</p>
        </div>

        {/* Socials */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <div className="flex gap-4">
            {/* Placeholder for Lucide-React icons */}
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-zinc-400 text-sm mb-4">Stay up-to-date with our latest collections and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
        </div>

        {/* Legal */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-zinc-700 text-center text-zinc-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Aura Threads. All rights reserved.</p>
      </div>
    </footer>
  );
};
