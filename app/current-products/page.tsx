"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const PRODUCT_TYPES = [
  {
    id: 'cleanser',
    label: 'Cleanser',
    description: 'Face wash, cleansing gel, or foam'
  },
  {
    id: 'toner',
    label: 'Toner',
    description: 'Astringent or toning solution'
  },
  {
    id: 'sunscreen',
    label: 'Sunscreen',
    description: 'SPF protection products'
  },
  {
    id: 'moisturizer',
    label: 'Moisturizer',
    description: 'Face cream, lotion, or hydrating products'
  },
  {
    id: 'serums',
    label: 'Serums',
    description: 'Vitamin C, hyaluronic acid, niacinamide'
  },
  {
    id: 'acne-treatments',
    label: 'Acne Treatments',
    description: 'Spot treatments, benzoyl peroxide, salicylic acid'
  },
  {
    id: 'retinoids',
    label: 'Retinoids',
    description: 'Retinol, tretinoin, or retinoid products'
  },
  {
    id: 'none',
    label: 'None',
    description: 'I don\'t currently use skincare products'
  }
];

export default function CurrentProductsPage() {
  const router = useRouter();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [brandNames, setBrandNames] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState('');

  function toggleProduct(productId: string) {
    if (productId === 'none') {
      // If "none" is selected, clear all other selections
      setSelectedProducts(['none']);
      setBrandNames({});
    } else {
      // If any other product is selected, remove "none" if it was selected
      setSelectedProducts(prev => {
        const filtered = prev.filter(id => id !== 'none');
        return filtered.includes(productId) 
          ? filtered.filter(id => id !== productId)
          : [...filtered, productId];
      });
      
      // Clear brand name if product is deselected
      if (selectedProducts.includes(productId)) {
        setBrandNames(prev => {
          const updated = { ...prev };
          delete updated[productId];
          return updated;
        });
      }
    }
  }

  function handleBrandChange(productId: string, brand: string) {
    setBrandNames(prev => ({
      ...prev,
      [productId]: brand
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (selectedProducts.length === 0) {
      setMessage('Please select at least one option');
      return;
    }

    // Check if all selected products (except "none") have brand names
    const productsNeedingBrands = selectedProducts.filter(id => id !== 'none');
    const missingBrands = productsNeedingBrands.filter(id => !brandNames[id]?.trim());
    
    if (missingBrands.length > 0) {
      setMessage('Please specify brand names for all selected products');
      return;
    }

    const currentProductsData = {
      selectedProducts,
      brandNames: selectedProducts.includes('none') ? {} : brandNames
    };

    try {
      localStorage.setItem('currentProducts', JSON.stringify(currentProductsData));
      setMessage('Current products saved — continuing...');
      setTimeout(() => router.push('/alerts-preferences'), 700);
    } catch  {
      setMessage('Could not save your current products locally.');
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0fdf4] via-white to-[#dcfce7] pt-16 pb-12 relative">
      {/* Decorative background blob */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#86efac] rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 animate-fadein">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-[#e6f6eb] transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left panel - decorative on large screens */}
            <aside className="hidden lg:flex flex-col justify-start items-center text-center gap-4 p-8 pt-16 bg-gradient-to-b from-[#15803d] to-[#2d5c27] text-white rounded-l-3xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-white font-bold">🧴</div>
                <div className="text-sm text-white/90">Current routine</div>
              </div>
              <h2 className="text-3xl font-extrabold">Current Products</h2>
              <p className="text-white/90 max-w-sm">Understanding your current skincare routine helps us recommend complementary products and identify potential interactions.</p>
              
              {/* Additional informational content */}
              <div className="space-y-4 mt-6 text-left max-w-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Why We Ask</h3>
                  <ul className="text-sm text-white/90 space-y-1">
                    <li>• Avoid product conflicts</li>
                    <li>• Build on what works</li>
                    <li>• Identify gaps in routine</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Product Categories</h3>
                  <div className="text-sm text-white/90 space-y-1">
                    <p>• <strong>Basic:</strong> Cleanser, moisturizer, sunscreen</p>
                    <p>• <strong>Treatment:</strong> Serums, acne products</p>
                    <p>• <strong>Advanced:</strong> Retinoids, specialized care</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">Brand Matters</h3>
                  <div className="text-sm text-white/90 space-y-1">
                    <p>• Ingredient concentrations vary</p>
                    <p>• Formulation differences</p>
                    <p>• Compatibility considerations</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-white/80">🔒 Product information stays confidential</div>
            </aside>

            {/* Right panel - form */}
            <section className="p-5 sm:p-6">
              <header className="mb-6">
                <h1 className="text-2xl font-extrabold text-[#15803d]">What products are you currently using?</h1>
                <p className="text-[#2d5c27] text-sm mt-1">Select all products you currently use and specify the brand names.</p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="space-y-3">
                    {PRODUCT_TYPES.map(product => {
                      const active = selectedProducts.includes(product.id);
                      return (
                        <div key={product.id} className="space-y-2">
                          <button
                            type="button"
                            aria-pressed={active}
                            onClick={() => toggleProduct(product.id)}
                            className={`w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]/30
                              ${active
                                ? 'border-transparent bg-gradient-to-r from-[#4ade80] to-[#86efac] text-[#052e16] scale-105 shadow-lg'
                                : 'border-[#e6f6eb] bg-white hover:border-[#4ade80]/50 hover:scale-105'}
                            `}
                          >
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200 flex-shrink-0
                              ${active ? 'bg-white text-[#15803d] shadow' : 'bg-[#f3faf6] text-[#075e33]'}
                            `}>
                              {active ? '✓' : '+'}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-base text-[#15803d]">{product.label}</div>
                              <div className={`text-sm mt-1 ${active ? 'text-[#052e16]' : 'text-[#2d5c27]'}`}>
                                {product.description}
                              </div>
                            </div>
                          </button>

                          {/* Brand name input - only show if product is selected and not "none" */}
                          {active && product.id !== 'none' && (
                            <div className="ml-12 mt-2">
                              <input
                                type="text"
                                placeholder={`Enter ${product.label.toLowerCase()} brand name`}
                                value={brandNames[product.id] || ''}
                                onChange={(e) => handleBrandChange(product.id, e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border-2 border-[#e6f6eb] focus:border-[#4ade80] focus:ring-2 focus:ring-[#4ade80]/20 bg-white text-[#2d5c27] text-sm"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#15803d] to-[#2d5c27] text-white py-3 rounded-lg font-semibold text-sm hover:shadow-md transition-all"
                  >
                    Save & Continue
                  </button>
                  {message && <p className="mt-3 text-center text-sm text-[#15803d]">{message}</p>}
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>

      {/* Add fade-in animation */}
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein {
          animation: fadein 0.7s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </main>
  );
}
