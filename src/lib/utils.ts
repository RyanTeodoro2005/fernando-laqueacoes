import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: 'Fernando Laqueações',
  whatsapp: '5511962544005',
  whatsappDisplay: '+55 11 96254-4005',
  email: 'fernandolaqueacoes@gmail.com',
  address: 'Rua Coronel Fawcett',
  city: 'São Paulo',
  region: 'SP',
  whatsappLink: (msg = 'Olá! Vi seu site e gostaria de um orçamento.') =>
    `https://wa.me/5511962544005?text=${encodeURIComponent(msg)}`,
} as const;
