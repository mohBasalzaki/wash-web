import React from 'react'
import SectionTitle from '../components/SectionTitle'

export default function RequestModal() {
  return (
    <div class="modal fade" id="request_modal" tabIndex={-1} aria-labelledby="request_modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
            <div class="modal-content border-0">
                <div class="modal-body position-relative">
                    <div class="modal-header border-0 px-0 pt-0">
                        <SectionTitle title={"طلب شراكة"} body={"زوّدنا بتفاصيل سيارتك لتقديم الخدمة المناسبة."} />

                        <button
                            type="button"
                            class="btn-close position-absolute m-4 p-1"
                            style={{ top: 0, left: 0, right: 'auto' }}
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <form action="" method="post">
                        <div class="mb-3">
                            <label for="full-name" class="form-label">اسم الجهة</label>
                            <input type="name" class="form-control" name="full_name" id="full-name" placeholder="ادخل اسم الجهة هنا" />
                        </div>

                        <div class="mb-3">
                            <label for="phone" class="form-label">رقم التواصل</label>
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

                        <div class="mb-3">
                            <label for="massage" class="form-label">نبذة عن الشركاة</label>
                            <textarea class="form-control" id="massage" rows="5" placeholder="اكتب رسالتك هنا"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary w-100">ارسال</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
