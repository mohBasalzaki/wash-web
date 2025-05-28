import { Link } from "@/i18n/navigation";


export default function SwitchLang() {
  return (
    <div class="d-flex align-items-center me-2">
        <Link href="/" class="text-decoration-none" locale="ar">
            <small>عربي</small>
        </Link>
        <span class="mx-1">|</span>
        <Link href="/" class="text-decoration-none" locale="en">
            <small>ENG</small>
        </Link>
    </div>
  )
}
