import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
interface WhatsAppButtonProps {
  compact?: boolean;
}
const WhatsAppButton = ({
  compact = false
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/50612345678?text=Hola,%20quiero%20hacer%20un%20pedido', '_blank');
  };
  if (compact) {
    return <button onClick={handleWhatsAppClick} className="flex items-center justify-center bg-[#1F2937] hover:bg-[#374151] text-white text-sm font-medium py-2 px-3 rounded-md transition-colors" aria-label="Ordenar por WhatsApp">
        <MessageCircleIcon size={16} className="mr-1" />
        <span>Ordenar</span>
      </button>;
  }
  return <button onClick={handleWhatsAppClick} className="flex items-center justify-center w-full bg-[#1F2937] hover:bg-[#374151] text-white font-medium py-3 px-4 rounded-md transition-colors" aria-label="Ordenar por WhatsApp">
      <MessageCircleIcon size={20} className="mr-2" />
      <span>Ordenar por WhatsApp</span>
    </button>;
};
export default WhatsAppButton;