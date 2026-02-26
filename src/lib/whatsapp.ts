export function buildWhatsAppHref(phoneNumber: string, text?: string) {
  const digits = phoneNumber.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

