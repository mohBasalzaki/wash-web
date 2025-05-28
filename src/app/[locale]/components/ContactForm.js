'use client';

import SectionTitle from './SectionTitle';
import { submitContactForm } from "@/app/utils/api";
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.full_name.value,
        email: e.target.email.value,
        phone: e.target.PhoneNumber.value,
        subject: e.target.subject.value,
        message: e.target.massage.value,
    };

    try {
      const result = await submitContactForm(formData);
      console.log("تم إرسال النموذج بنجاح", result);
      setStatus('success');
      e.target.reset();
    } catch (error) {
      console.error("فشل في إرسال النموذج:", error);
      setStatus('error');
    }
  };

  return (
    <div class="col">
      <div class="border border-light-subtle rounded p-md-4 p-3">
        <SectionTitle title={"راسلنا"} />

        <form onSubmit={handleSubmit} class="mt-md-4 mt-3">
          <div class="mb-md-4 mb-3">
            <label htmlFor="full-name" class="form-label">اسمك الكامل <span class="text-danger">*</span></label>
            <input type="text" class="form-control" name="full_name" id="full-name" placeholder="اكتب اسمك هنا" required />
          </div>

          <div class="row row-cols-1 row-cols-md-2 mb-md-4 mb-3">
            <div class="mb-md-0 mb-3">
              <label htmlFor="email" class="form-label">الإيميل <span class="text-danger">*</span></label>
              <input type="email" class="form-control" name="email" id="email" placeholder="name@domain.sa" required />
            </div>

            <div class="mb-0">
              <label htmlFor="phone" class="form-label">رقم الجوال <span class="text-danger">*</span></label>
              <input
                type="tel"
                class="form-control"
                name="phone"
                id="phone"
                placeholder="05********"
                pattern="05[0-9]{8}"
                maxLength="10"
                title="يجب كتابة 10 أرقام وتبدأ بـ 05"
                required
              />
            </div>
          </div>

          <div class="mb-md-4 mb-3">
            <label htmlFor="subject" class="form-label">الموضوع <span class="text-danger">*</span></label>
            <input type="text" class="form-control" name="subject" id="subject" placeholder="اكتب الموضوع هنا" required />
          </div>

          <div class="mb-md-4 mb-3">
            <label htmlFor="message" class="form-label">الرسالة</label>
            <textarea class="form-control" name="message" id="message" rows="5" placeholder="اكتب رسالتك هنا"></textarea>
          </div>

          {status === 'success' && <div class="alert alert-success">تم إرسال الرسالة بنجاح.</div>}
          {status === 'error' && <div class="alert alert-danger">حدث خطأ أثناء الإرسال. حاول مرة أخرى.</div>}

          <button type="submit" class="btn btn-primary w-100">إرسال</button>
        </form>
      </div>
    </div>
  );
}