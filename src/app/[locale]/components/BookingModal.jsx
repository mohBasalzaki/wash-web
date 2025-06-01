import SectionTitle from './SectionTitle'
import Link from 'next/link';

export default function BookingModal() {
  return (
    <div className="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
            <div className="modal-content border-0">

                <div className="modal-body position-relative">
                    <img src="/image/modal_img.webp" className="w-100" loading="lazy" />

                    <button
                      type="button"
                      className="btn-close btn-close-white position-absolute m-4 p-1"
                      style={{ top: 0, left: 0, right: 'auto' }}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />

                    <div className="my-3">
                        <SectionTitle title={"طلب خدمة غسيل"} body={"نقدم حلول غسيل شاملة للأفراد ومؤسسات."} />
                    </div>

                    <form action=""  className="mt-md-4 mt-3" method="post">
                        <div className="mb-2">
                            <label htmlFor="full-name" className="form-label">اسمك الكامل <span className="text-danger">*</span></label>
                            <input type="name" className="form-control" name="full_name" id="full-name" placeholder="اكتب اسمك هنا" required />
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 mb-2">
                            <div className="mb-md-0 mb-2">
                                <label htmlFor="email" className="form-label">الايميل <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" name="" id="email" placeholder="name@domain.sa" required />
                            </div>

                            <div className="mb-0">
                                <label htmlFor="phone" className="form-label">رقم الجوال <span className="text-danger">*</span></label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="forPhone"
                                    placeholder="05****"
                                    pattern="05[0-9]{8}"
                                    maxLength="10"
                                    title="يجب كتابة 10 أرقام وتبدأ بـ 05"
                                    required
                                    name="PhoneNumber"
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">العنوان <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="" id="subject" placeholder="اكتب الحي/اسم الشارع هنا" required />
                        </div>

                        <button type="submit" className="btn btn-primary rounded-1 w-100">أطلب الأن</button>
                    </form>

                    <Link href={"#"} className="d-none btn btn-outline-success w-100">
                        <i className="ti ti-brand-whatsapp"></i>
                        <span className="ms-2">تواصل واتساب</span>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  );
}
