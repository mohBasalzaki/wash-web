import React from 'react'
import SectionTitle from './SectionTitle'

export default function ContactForm() {
  return (
    <div class="col">
        <div class="border border-light-subtle rounded p-md-4 p-3">
            <SectionTitle title={"راسلنا"} />

            <form action=""  class="mt-md-4 mt-3" method="post">
                <div class="mb-md-4 mb-3">
                    <label htmlFor="full-name" class="form-label">اسمك الكامل</label>
                    <input type="name" class="form-control" name="full_name" id="full-name" placeholder="اكتب اسمك هنا" />
                </div>

                <div class="row row-cols-1 row-cols-md-2 mb-md-4 mb-3">
                    <div class="mb-md-0 mb-3">
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

                <div class="mb-md-4 mb-3">
                    <label htmlFor="subject" class="form-label">الموضوع</label>
                    <input type="text" class="form-control" name="" id="subject" placeholder="اكتب الموضوع هنا" />
                </div>

                <div class="mb-md-4 mb-3">
                    <label htmlFor="massage" class="form-label">الرسالة</label>
                    <textarea class="form-control" id="massage" rows="5" placeholder="اكتب رسالتك هنا"></textarea>
                </div>

                <button type="submit" class="btn btn-primary w-100">ارسال</button>
            </form>
        </div>
    </div>
  )
}
