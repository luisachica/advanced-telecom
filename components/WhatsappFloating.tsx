// components/WhatsappFloating.tsx
export default function WhatsappFloating() {
  return (
    <a
      href="https://wa.me/34608305354?text=Hola%2C%20quiero%20más%20información"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-6 z-50"
    >
      <img src="/whatsapp.png" alt="WhatsApp" className="w-20 h-20" />
    </a>
  );
}
