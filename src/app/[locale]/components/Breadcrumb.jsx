import { useTranslations } from 'next-intl';
import Link from 'next/link'

export default function Breadcrumb({ title }) {
const t = useTranslations('Home');
    
  return (
    <section id="breadcrumb" className="pb-3">
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                        <Link href={`/`} className="text-decoration-none text-body-secondary">
                            {t('home')}
                        </Link>
                    </li>

                    <li className="breadcrumb-item text-body" aria-current="page">{title}</li>
                </ol>
            </nav>
        </div>
    </section>
  );
}
