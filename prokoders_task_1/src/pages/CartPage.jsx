import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Trash2, CreditCard, Lock, ArrowRight, X, CheckCircle } from 'lucide-react';

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice, setCartItems } = useCart();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paid, setPaid] = useState(false);
  const [cardData, setCardData] = useState({ name: '', number: '', date: '', cvc: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let val = value;
    if (name === 'number' || name === 'cvc') val = value.replace(/\D/g, '');
    if (name === 'date') {
      val = value.replace(/\D/g, '');
      if (val.length > 2) val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    setCardData({ ...cardData, [name]: val });
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (cardData.number.length < 16) return; 
    if (cardData.date.length < 5) return;
    if (cardData.cvc.length < 3) return;

    
    const existingPurchased = JSON.parse(localStorage.getItem('purchasedCoursesData')) || [];
    
    const updatedPurchased = [...existingPurchased, ...cartItems];

    const uniquePurchased = updatedPurchased.filter((course, index, self) =>
      index === self.findIndex((c) => c.id === course.id)
    );

    localStorage.setItem('purchasedCoursesData', JSON.stringify(uniquePurchased));
    
    if (setCartItems) {
        setCartItems([]); 
    }
    
    setShowPaymentModal(false);
    setPaid(true);
  };

  if (paid) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-700">
        <div className="relative mb-8 animate-bounce">
          <div className="absolute inset-0 bg-flame-orange blur-[60px] opacity-30"></div>
          <div className="w-24 h-24 bg-black border-[5px] border-flame-orange rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(255,69,0,0.5)]">
            <CheckCircle size={50} className="text-flame-orange" strokeWidth={3} />
          </div>
        </div>
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-flame-orange">
          SUCCESS <br/> IGNITED!
        </h1>
        <button onClick={() => window.location.href='/profile'} className="mt-6 bg-flame-orange text-white px-12 py-4 rounded-full font-black text-[11px] uppercase tracking-widest shadow-xl border-none cursor-pointer">
          GO TO MY COURSES
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white p-4 md:p-12 pt-28">
      <h1 className="text-3xl font-black italic mb-12 uppercase tracking-tighter text-left">
        Your <span className="text-burn">Shopping Cart</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <div className="bg-white/5 border border-white/5 p-16 rounded-[50px] text-center border-dashed">
              <p className="text-gray-600 font-bold uppercase text-xs tracking-widest italic">The lab is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="bg-white/5 border border-white/5 p-6 rounded-[40px] flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/5 rounded-[25px] flex items-center justify-center text-flame-orange font-black text-xl">
                    {item.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold italic">FireLab Certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-black text-white text-xl italic">${item.price}</span>
                  <button onClick={() => removeFromCart(item.id)} className="p-3 bg-red-500/10 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all border-none cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-1 text-left">
          <div className="bg-[#080808] border border-white/10 p-10 rounded-[50px] sticky top-28 shadow-2xl">
            <h2 className="text-[10px] font-black italic mb-8 uppercase text-gray-500 tracking-widest">Summary</h2>
            
            <div className="mb-6">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Courses Count</p>
                <p className="text-white font-black italic text-xl">{cartItems.length} COURSES</p>
            </div>

            <div className="flex justify-between items-end mb-10 border-t border-white/5 pt-6">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Total Amount</span>
                <span className="text-burn text-4xl font-black italic leading-none">${totalPrice}</span>
            </div>

            <button 
              onClick={() => setShowPaymentModal(true)} 
              disabled={cartItems.length === 0}
              className="w-full bg-flame-orange text-white py-5 rounded-full font-black text-[11px] uppercase tracking-widest shadow-lg border-none cursor-pointer disabled:opacity-20 hover:scale-[1.02] transition-transform"
            >
              Checkout Now <ArrowRight size={16} className="ml-1 inline" />
            </button>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#0D0D0D] border border-white/10 w-full max-w-[340px] p-10 rounded-[60px] relative shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => setShowPaymentModal(false)} className="absolute top-8 right-8 text-gray-600 hover:text-white border-none bg-transparent cursor-pointer"><X size={20} /></button>
            <div className="text-center mb-8 text-left">
              <h2 className="text-xl font-black italic uppercase text-white leading-none">Secure <span className="text-burn">Pay</span></h2>
            </div>
            <form onSubmit={handlePay} className="space-y-4">
              <input required name="name" value={cardData.name} onChange={handleInputChange} type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 p-5 rounded-full text-white outline-none focus:border-flame-orange text-[10px] font-black px-8" />
              <input required name="number" value={cardData.number} onChange={handleInputChange} maxLength="16" type="text" placeholder="CARD NUMBER" className="w-full bg-white/5 border border-white/10 p-5 rounded-full text-white outline-none focus:border-flame-orange text-[10px] font-black tracking-[0.2em] px-8" />
              <div className="grid grid-cols-2 gap-3">
                <input required name="date" value={cardData.date} onChange={handleInputChange} maxLength="5" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 p-5 rounded-full text-white outline-none focus:border-flame-orange text-[10px] font-black text-center" />
                <input required name="cvc" value={cardData.cvc} onChange={handleInputChange} maxLength="3" placeholder="CVC" className="w-full bg-white/5 border border-white/10 p-5 rounded-full text-white outline-none focus:border-flame-orange text-[10px] font-black text-center" />
              </div>
              <button type="submit" className="w-full bg-flame-orange py-5 rounded-full font-black text-[10px] uppercase tracking-widest mt-6 shadow-xl border-none cursor-pointer text-white hover:bg-orange-600">
                COMPLETE PURCHASE 🔥
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;