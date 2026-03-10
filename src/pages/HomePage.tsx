import { Button } from '@/components/ui/button';
import { Shirt, Sparkles, Leaf, ShoppingCart } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="bg-orange-50 text-zinc-900 min-h-screen">
      {/* Full-screen Product Hero */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?fashion,clothing,minimalist')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center max-w-4xl p-8">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight drop-shadow-lg">Elevate Your Style. Effortlessly.</h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">Discover the latest collection of minimalist fashion designed for modern living.</p>
                    <Button variant="primary" className="px-8 py-4 text-lg">Shop Now</Button>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Aura Threads?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Shirt className="w-16 h-16 text-zinc-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-zinc-600">Crafted with the finest materials for lasting comfort and style.</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-16 h-16 text-zinc-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Minimalist Design</h3>
              <p className="text-zinc-600">Clean lines and timeless aesthetics for a versatile wardrobe.</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-16 h-16 text-zinc-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-zinc-600">Ethically sourced and environmentally conscious production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now Horizontal Scroll Section */}
      <section className="py-20 px-4 bg-orange-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Trending Now</h2>
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex-none w-72 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://source.unsplash.com/random/300x400/?fashion,clothing,model,${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Product Name {item}</h3>
                  <p className="text-zinc-600 text-sm">Category</p>
                  <p className="text-xl font-bold mt-2">$ {49.99 + item}</p>
                  <Button variant="secondary" className="w-full mt-4">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Table (Placeholder - for a specific product detail, could be moved) */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Product Details</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <table className="w-full text-left table-auto">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-zinc-200 text-zinc-700">Feature</th>
                  <th className="py-2 px-4 border-b-2 border-zinc-200 text-zinc-700">Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-100">Material</td>
                  <td className="py-2 px-4 border-b border-zinc-100">Organic Cotton Blend</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-100">Fit</td>
                  <td className="py-2 px-4 border-b border-zinc-100">Relaxed Fit</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-100">Care Instructions</td>
                  <td className="py-2 px-4 border-b border-zinc-100">Machine Wash Cold</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Available Sizes</td>
                  <td className="py-2 px-4">S, M, L, XL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sticky 'Buy Now' Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-800 text-white p-4 flex justify-between items-center md:hidden shadow-lg z-40">
        <div className="text-lg font-semibold">Featured Item</div>
        <Button variant="primary" className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" /> Buy Now
        </Button>
      </div>
    </div>
  );
};
