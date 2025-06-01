import Link from 'next/link'
import { fetchInfo } from "@/app/utils/api";

export default async function ContactCTA() {
    let post = [];
    
    try {
      post = await fetchInfo();
    
    } catch (error) {
      console.error('Error fetching Site Info:', error);
    };

    return (
        <>
            <Link className="text-decoration-none text-light" href={"#"} target="_blank">
                <div className="d-flex align-items-center mb-md-4 mb-3">
                    <img src="/image/contact_1.png" className="me-3" loading="lazy" width={70} />
                    <div className="d-block">
                        <h1 className="fw-samibold fs-5 mt-0 mb-2">الموقع</h1>
                        <span>{post.address}</span>
                    </div>
                </div>
            </Link>

            <Link className="text-decoration-none text-light" href={`tel:${post.phone}`} target="_blank">
                <div className="d-flex align-items-center mb-md-4 mb-3">
                    <img src="/image/contact_2.png" className="me-3" loading="lazy" width={70} />
                    <div className="d-block">
                        <h1 className="fw-samibold fs-5 mt-0 mb-2">رقم الهاتف</h1>
                        <span>{post.phone}</span>
                    </div>
                </div>
            </Link>

            <Link className="text-decoration-none text-light" href={`mailto:${post.email}`} target="_blank">
                <div className="d-flex align-items-center mb-md-4 mb-3">
                    <img src="/image/contact_3.png" className="me-3" loading="lazy" width={70} />
                    <div className="d-block">
                        <h1 className="fw-samibold fs-5 mt-0 mb-2">الايميل</h1>
                        <span>{post.email}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}
