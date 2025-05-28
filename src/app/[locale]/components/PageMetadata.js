// src/app/components/PageMetadata.js
import { getTranslations } from 'next-intl/server';
import { fetchInfo } from '@/app/utils/api';

/**
 * مكون مولّد للبيانات الوصفية (title, description)
 * @param {Object} params - يحتوي على locale
 * @param {string} namespace - المفتاح الخاص بالترجمات (مثل "Home")
 * @param {string} key - اسم الصفحة (مثل "about", "services")
 */
export async function generatePageMetadata({ params, namespace = 'Home', key = 'about' }) {
  try {
    const [t, info] = await Promise.all([
      getTranslations({ locale: params.locale, namespace }),
      fetchInfo()
    ]);

    return {
      title: `${info?.site_name || 'موقعي'} | ${t(key)}`,
      description: info?.description || 'وصف افتراضي',
    };
  } catch (error) {
    console.error('Metadata Generation Error:', error);
    return {
      title: 'ريواش | صفحة',
      description: 'وصف افتراضي',
    };
  }
}
