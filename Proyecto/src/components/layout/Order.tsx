import React from "react";
import WhatsAppButton from "../ui/WhatsAppButton";

const Order = () => {
  return (
    <section className="py-12 bg-primary text-white-1">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">¿Listo para ordenar?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Ordena ahora por WhatsApp y disfruta de nuestra deliciosa comida en
          casa o pasa a visitarnos.
        </p>
        <div className="max-w-xs mx-auto">
          <WhatsAppButton className="w-full bg-ternary-1 hover:bg-ternary-3 active:bg-ternary-2 text-sm py-2.5 px-4" />
        </div>
      </div>
    </section>
  );
};
export default Order;
