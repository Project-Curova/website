import Navigation from "../components/Navigation"

const MissionVisionPage = () => {
    return (
        <div className='h-screen overflow-y-auto bg-herowhite pt-3'>
            <div className=''>
                <div className="px-5">
                    <Navigation />

                    <div className="my-5">
                        <MissionVision />
                    </div>
                </div>

            </div>
        </div>
    )
}

const MissionVision = () => {
    return (
        <>
            <section>
                <h1 className="text-pry font-bold text-xl">Our Mission</h1>
                <p className="text-sm">
                    Our mission is to transform healthcare systems by developing and deploying
                    AI-driven, blockchain-secured technologies that solve key healthcare challenges:
                </p>
                <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                    <li>
                        Ensuring secure and interoperable patient data management with
                        blockchain-based Electronic Health Records (EHR).
                    </li>
                    <li>
                        Reducing patient wait times and optimizing appointment scheduling
                        with intelligent, AI-powered platforms.
                    </li>
                    <li>
                        Optimizing resource allocation in healthcare facilities using predictive
                        analytics to anticipate demand and allocate resources efficiently.
                    </li>
                </ul>
                <p className="text-sm mt-3">
                    We believe that by integrating these elements, we can help healthcare
                    systems become more agile, cost-efficient, and patient-centered.
                </p>
            </section>

            <section className="mt-5">
                <h1 className="text-pry font-bold text-xl">Our Vision</h1>
                <p className="text-sm">Curova is an innovative healthcare technology platform integrating AI-powered Electronic Health Records (EHR), telemedicine, appointment scheduling, and predictive analytics for resource allocation. Designed to support both patients and healthcare professionals, Curova addresses critical pain points in traditional health systems through automation, personalization, and robust data security measures.  give me verified top datasets that can be used in training the model that will be used for Project Curova.</p>
            </section>
        </>
    )
}

export default MissionVisionPage
