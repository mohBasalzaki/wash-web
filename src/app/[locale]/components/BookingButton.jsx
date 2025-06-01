import { useTranslations } from "next-intl";

export default function BookingButton({ dataPackage }) {
  const t = useTranslations('Home');
  
  return (
    <button type="button" className="btn btn-primary rounded-1 w-100" data-bs-toggle="modal" data-bs-target="#bookingModal" data-package={dataPackage}>{t('order_now')}</button>
  );
}
