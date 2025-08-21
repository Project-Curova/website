import Navigation from "../components/Navigation"

const PrivacyPolicyPage = () => {
    return (
        <div className='h-screen overflow-y-auto bg-herowhite pt-3'>
            <div className=''>
                <div className="px-5">
                    <Navigation />

                    <div className="my-5">
                        <PrivacyPolicy />
                    </div>
                </div>

            </div>
        </div>
    )
}


const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <h1 className="text-pry font-bold text-2xl">Terms and Condition</h1>

            <section className="mt-3 text-sm">
                <p>These Terms and Conditions govern the use and development of Project Curova’s digital solutions, including the EHR system, AI scheduling, and predictive analytics. By participating, users and stakeholders agree to these terms.</p>

                <div className="mt-5">

                    <h3 className="font-bold text-[18px]">General Overview</h3>

                    <p>Project Curova aims to develop secure, interoperable solutions for the healthcare sector,
                        focusing on the following products:</p>

                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>Electronic Health Record (EHR) System:</strong>
                            A secure, blockchain-based system for managing and sharing patient data.
                        </li>
                        <li>
                            <strong>AI-Driven Appointment Scheduling:</strong>
                            A telemedicine platform for intelligent appointment scheduling, reducing wait times.
                        </li>
                        <li>
                            <strong>Predictive Analytics Tool for Resource Allocation:</strong>
                            A tool using machine learning to forecast healthcare resource demand.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">

                    <h3 className="font-bold text-[18px]">Patient Data Management and Security</h3>

                    <p>Project Curova aims to develop secure, interoperable solutions for the healthcare sector,
                        focusing on the following products:</p>

                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>Data Integrity:</strong>
                            The EHR system uses blockchain technology to ensure the integrity
                            and immutability of patient records. All data is encrypted and securely stored.
                        </li>
                        <li>
                            <strong>Compliance:</strong>
                            The platform is designed to comply with GDPR and other applicable
                            data privacy regulations.
                        </li>
                        <li>
                            <strong>Interoperability:</strong>
                            The system facilitates seamless sharing of patient data across
                            healthcare providers while maintaining patient privacy.
                        </li>
                        <li>
                            <strong>Audit and Transparency:</strong>
                            Access to patient data is auditable, ensuring full
                            transparency in data usage.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">

                    <h3 className="font-bold text-[18px]">End-User Rights and Responsibilities</h3>

                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>Data Access and Usage:</strong>
                            End-users, including healthcare providers and patients,
                            have the right to access and manage their data. This includes the ability to update
                            personal and health-related information.
                        </li>
                        <li>
                            <strong>Confidentiality:</strong>
                            All parties agree to maintain the confidentiality of patient data. Data
                            sharing will only occur with patient consent or as required by law.
                        </li>
                        <li>
                            <strong>System Downtime:</strong>
                            Users acknowledge that while the system is designed for high
                            availability, there may be occasional system downtimes due to maintenance or
                            technical issues.
                        </li>
                        <li>
                            <strong>Audit and Transparency:</strong>
                            Access to patient data is auditable, ensuring full
                            transparency in data usage.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">AI-Driven Appointment Scheduling</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>Appointment Management:</strong> Patients can schedule, reschedule,
                            and cancel appointments through the platform. The system intelligently
                            optimizes scheduling to reduce wait times and maximize efficiency.
                        </li>
                        <li>
                            <strong>Accessibility:</strong> The platform is accessible via mobile and
                            desktop devices. Service may be impacted for users without internet access
                            or compatible devices.
                        </li>
                        <li>
                            <strong>Data Privacy:</strong> All telemedicine consultations and
                            appointment data are securely stored in compliance with privacy regulations.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Predictive Analytics Tool for Resource Allocation</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>Data Collection:</strong> Uses patient inflow and healthcare data
                            to predict future resource demand.
                        </li>
                        <li>
                            <strong>Proactive Resource Management:</strong> Helps healthcare
                            organizations optimize staffing levels and equipment allocation based on
                            predicted demand.
                        </li>
                        <li>
                            <strong>Integration:</strong> May require integration with existing
                            hospital or clinic systems. Users agree to cooperate with integration efforts.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Limitations and Disclaimers</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>AI Limitations:</strong> Algorithms may have biases or limitations
                            in predictions and data handling.
                        </li>
                        <li>
                            <strong>No Guarantee of Accuracy:</strong> Predictions are based on
                            available data and may not be fully accurate. Providers must verify and
                            adjust actions accordingly.
                        </li>
                        <li>
                            <strong>System Overload:</strong> High traffic may cause slower response
                            times during peak usage.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Intellectual Property</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>Ownership:</strong> All IP rights, including software, algorithms,
                            and documentation, belong to Project Curova or its partners. Users are
                            granted a non-exclusive, non-transferable license to use the platform.
                        </li>
                        <li>
                            <strong>Feedback and Contributions:</strong> User feedback may be used to
                            improve the platform, with credit provided where appropriate.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Liability and Indemnity</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>Limitation of Liability:</strong> Project Curova is not responsible
                            for direct, indirect, or consequential damages, including data loss,
                            downtime, or misallocation of resources.
                        </li>
                        <li>
                            <strong>Indemnity:</strong> Users agree to indemnify and hold Project
                            Curova harmless from claims, damages, or expenses due to unauthorized use,
                            privacy violations, or breaches of these terms.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Term and Termination</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li>
                            <strong>Duration:</strong> Terms remain in effect for the duration of the
                            Project Curova development and deployment.
                        </li>
                        <li>
                            <strong>Termination:</strong> Project Curova may terminate access at any
                            time for non-compliance or other reasons.
                        </li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Amendments</h3>
                    <p className="mt-3">
                        Project Curova may amend these Terms and Conditions at any time. Changes
                        will be communicated via email or platform notification, and updated terms
                        will be posted on the official website.
                    </p>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Governing Law</h3>
                    <p className="mt-3">
                        This Agreement is governed by the laws of the United Kingdom. Disputes will
                        be resolved in the courts of the United Kingdom.
                    </p>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Contact Information</h3>
                    <p className="mt-3">
                        For any questions or concerns, please contact Project Curova.
                    </p>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicyPage
