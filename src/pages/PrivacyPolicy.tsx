import Navigation from "../components/Navigation"

const TermsAndConditionPage = () => {
    return (
        <div className='h-screen overflow-y-auto bg-herowhite pt-3'>
            <div className=''>
                <div className="px-5">
                    <Navigation />

                    <div className="my-5">
                        <TermsAndConditions />
                    </div>
                </div>

            </div>
        </div>
    )
}

const TermsAndConditions: React.FC = () => {
    return (
        <>
            <h1 className="text-pry font-bold text-2xl">Privacy Policy</h1>

            <section className="mt-3 text-sm">
                <p>
                    At Project Curova, we respect your privacy and are committed to protecting the
                    personal information you share with us. This Privacy Policy outlines how we
                    collect, use, store, and protect your personal data when you access or use our
                    digital solutions, including the EHR system, AI-driven appointment scheduling,
                    and predictive analytics tool.
                </p>
                <p className="mt-2">
                    By using our platform, you consent to the practices described in this Privacy Policy.
                </p>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Information We Collect</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li><strong>Personal Identification Information:</strong> Name, contact details, date of birth, and other identifiers necessary for communication and account creation.</li>
                        <li><strong>Health Information:</strong> Medical history, diagnoses, treatments, medications, allergies, and other relevant health data.</li>
                        <li><strong>Appointment Information:</strong> Data related to appointment bookings, cancellations, and telemedicine consultations.</li>
                        <li><strong>Usage Data:</strong> Interactions with the system, technical data (IP address, browser type, device info), and performance data.</li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">How We Use Your Information</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li><strong>Provide Services:</strong> Deliver the EHR system, AI-driven appointment scheduling, and resource allocation tools.</li>
                        <li><strong>Data Processing:</strong> Securely store and process health data in compliance with regulations.</li>
                        <li><strong>Improve Services:</strong> Analyze behavior and performance to enhance the platform.</li>
                        <li><strong>Appointment Scheduling:</strong> Manage bookings, reminders, and optimize scheduling.</li>
                        <li><strong>Communication:</strong> Send updates, notifications, and service-related communications.</li>
                        <li><strong>Compliance:</strong> Fulfill regulatory requirements (GDPR, HIPAA, etc.).</li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">How We Protect Your Information</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li><strong>Data Encryption:</strong> Encrypt data during transmission and storage.</li>
                        <li><strong>Access Control:</strong> Restricted access to authorized personnel only, with audit logs.</li>
                        <li><strong>Compliance with Laws:</strong> Adherence to GDPR and applicable data privacy regulations.</li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Data Retention</h3>
                    <p className="mt-3">
                        Data is retained only as long as necessary for its purpose or as required by law.
                        Once no longer needed, it will be securely deleted or anonymized.
                    </p>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Sharing Your Information</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li><strong>Healthcare Providers:</strong> Shared with doctors, nurses, and healthcare professionals with your consent.</li>
                        <li><strong>Service Providers:</strong> Trusted third parties (hosting, development, analytics) under confidentiality obligations.</li>
                        <li><strong>Regulatory Bodies:</strong> Disclosures required by law or regulatory authorities.</li>
                        <li><strong>Public Health Authorities:</strong> Shared during public health emergencies or for disease prevention.</li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Your Rights</h3>
                    <ul className="mt-3 flex flex-col gap-y-3 list-disc pl-5">
                        <li><strong>Right to Access:</strong> Request a copy of your data.</li>
                        <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data.</li>
                        <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal requirements).</li>
                        <li><strong>Right to Restrict Processing:</strong> Limit how your data is processed in certain circumstances.</li>
                        <li><strong>Right to Object:</strong> Object to processing for certain purposes (e.g., marketing).</li>
                        <li><strong>Right to Data Portability:</strong> Transfer your data to another service provider.</li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Cookies and Tracking Technologies</h3>
                    <p className="mt-3">
                        We use cookies and similar technologies to improve your experience, analyze usage,
                        and ensure performance. Preferences can be managed in your browser settings.
                    </p>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Third-Party Links</h3>
                    <p className="mt-3">
                        Our platform may link to external sites not operated by us. We are not responsible
                        for their privacy practices and encourage reviewing their policies before sharing data.
                    </p>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Contact Information</h3>
                    <p className="mt-3">
                        If you have questions or requests regarding this Privacy Policy, please contact us at:
                    </p>
                    <ul className="mt-3 flex flex-col gap-y-2 list-disc pl-5">
                        <li><strong>Email:</strong> [Insert email address]</li>
                        <li><strong>Phone:</strong> [Insert phone number]</li>
                        <li><strong>Postal Address:</strong> [Insert postal address]</li>
                    </ul>
                </div>

                <div className="mt-5">
                    <h3 className="font-bold text-[18px]">Changes to This Privacy Policy</h3>
                    <p className="mt-3">
                        We may update this Privacy Policy periodically. Significant changes will be
                        communicated via email or platform notifications, and updated versions posted on
                        our website.
                    </p>
                </div>
            </section>
        </>

    )
}

export default TermsAndConditionPage