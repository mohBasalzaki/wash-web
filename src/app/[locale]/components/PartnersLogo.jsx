import { fetchPartners } from "@/app/utils/api";

export default async function PartnersLogo() {
    let logos = [];
    
    try {
        logos = await fetchPartners()

    } catch (error) {
        console.error('Error fetching logos data:', error);
    }

    return (
        <>
            {logos.map((logo, index) => (
                <div id={index} className="col">
                    <div className="border border-2 border-light-subtle rounded p-md-4 p-3">
                        <img className="w-100" src={logo} alt={`partner-logo-${index}`} />
                    </div>
                </div>
            ))}
        </>
    )
}
