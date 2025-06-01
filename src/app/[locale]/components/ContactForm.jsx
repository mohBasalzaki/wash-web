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
    <div className="col">
      <div className="border border-light-subtle rounded p-md-4 p-3">
        <SectionTitle title={"راسلنا"} />

        <form onSubmit={handleSubmit} className="mt-md-4 mt-3">
          <div className="mb-md-4 mb-3">
            <label htmlFor="full-name" className="form-label">اسمك الكامل <span className="text-danger">*</span></label>
            <input type="text" className="form-control" name="full_name" id="full-name" placeholder="اكتب اسمك هنا" required />
          </div>

          <div className="row row-cols-1 row-cols-md-2 mb-md-4 mb-3">
            <div className="mb-md-0 mb-3">
              <label htmlFor="email" className="form-label">الإيميل <span className="text-danger">*</span></label>
              <input type="email" className="form-control" name="email" id="email" placeholder="name@domain.sa" required />
            </div>

            <div className="mb-0">
              <label htmlFor="phone" className="form-label">رقم الجوال <span className="text-danger">*</span></label>
              <input
                type="tel"
                className="form-control"
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

          <div className="mb-md-4 mb-3">
            <label htmlFor="subject" className="form-label">الموضوع <span className="text-danger">*</span></label>
            <input type="text" className="form-control" name="subject" id="subject" placeholder="اكتب الموضوع هنا" required />
          </div>

          <div className="mb-md-4 mb-3">
            <label htmlFor="message" className="form-label">الرسالة</label>
            <textarea className="form-control" name="message" id="message" rows="5" placeholder="اكتب رسالتك هنا"></textarea>
          </div>

          {status === 'success' && <div className="alert alert-success">تم إرسال الرسالة بنجاح.</div>}
          {status === 'error' && <div className="alert alert-danger">حدث خطأ أثناء الإرسال. حاول مرة أخرى.</div>}

          <button type="submit" className="btn btn-primary w-100">إرسال</button>
        </form>
      </div>
    </div>
  );
}