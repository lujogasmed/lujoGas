import siteData from '../../data/site.json';

export const SITE = siteData;

export const WHATSAPP_NUMBER = siteData.whatsapp;
export const WHATSAPP_MESSAGE = siteData.whatsappMessage;
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
