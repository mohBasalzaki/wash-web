import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link';

export default function BookingModal() {
  return (
    <div class="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
            <div class="modal-content border-0">

                <div class="modal-body position-relative">
                    <img src="/image/modal_img.webp" class="w-100" loading="lazy" />

                    <button
                      type="button"
                      class="btn-close btn-close-white position-absolute m-4 p-1"
                      style={{ top: 0, left: 0, right: 'auto' }}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />

                    <div class="my-3">
                        <SectionTitle title={"طلب خدمة غسيل"} body={"نقدم حلول غسيل شاملة للأفراد ومؤسسات."} />
                    </div>

                    <form action=""  class="mt-md-4 mt-3" method="post">
                        <div class="mb-2">
                            <label htmlFor="full-name" class="form-label">اسمك الكامل</label>
                            <input type="name" class="form-control" name="full_name" id="full-name" placeholder="اكتب اسمك هنا" />
                        </div>

                        <div class="row row-cols-1 row-cols-md-2 mb-2">
                            <div class="mb-md-0 mb-2">
                                <label htmlFor="email" class="form-label">الايميل</label>
                                <input type="email" class="form-control" name="" id="email" placeholder="name@domain.sa" />
                            </div>

                            <div class="mb-0">
                                <label htmlFor="phone" class="form-label">رقم الجوال</label>
                                <input
                                    type="tel"
                                    class="form-control"
                                    id="forPhone"
                                    placeholder="05****"
                                    pattern="05[0-9]{8}"
                                    maxlength="10"
                                    title="يجب كتابة 10 أرقام وتبدأ بـ 05"
                                    required=""
                                    name="PhoneNumber"
                                />
                            </div>
                        </div>

                        <div class="mb-3">
                            <label htmlFor="subject" class="form-label">العنوان</label>
                            <input type="text" class="form-control" name="" id="subject" placeholder="اكتب الحي/اسم الشارع هنا" />
                        </div>

                        <button type="submit" class="btn btn-primary rounded-1 w-100">أطلب الأن</button>
                    </form>

                    <Link href={"#"} class="d-none btn btn-outline-success w-100">
                        <i class="ti ti-brand-whatsapp"></i>
                        <span class="ms-2">تواصل واتساب</span>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  );
}
