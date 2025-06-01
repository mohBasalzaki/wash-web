import SectionTitle from './SectionTitle'

export default function RequestModal() {
  return (
    <div className="modal fade" id="request_modal" tabIndex={-1} aria-labelledby="request_modalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
            <div className="modal-content border-0">
                <div className="modal-body position-relative">
                    <div className="modal-header border-0 px-0 pt-0">
                        <SectionTitle title={"طلب شراكة"} body={"زوّدنا بتفاصيل سيارتك لتقديم الخدمة المناسبة."} />

                        <button
                            type="button"
                            className="btn-close position-absolute m-3 p-0"
                            style={{ top: 0, left: 0, right: 'auto' }}
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <form action="" method="post">
                        <div className="mb-3">
                            <label htmlFor="full-name" className="form-label">اسم الجهة <span className="text-danger">*</span></label>
                            <input type="name" className="form-control" name="full_name" id="full-name" placeholder="ادخل اسم الجهة هنا" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">رقم التواصل <span className="text-danger">*</span></label>
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

                        <div className="mb-3">
                            <label htmlFor="massage" className="form-label">نبذة عن الشركاة <span className="text-danger">*</span></label>
                            <textarea className="form-control" id="massage" rows="5" placeholder="اكتب رسالتك هنا" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">ارسال</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
