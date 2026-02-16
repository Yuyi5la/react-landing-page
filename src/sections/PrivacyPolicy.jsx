const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-8">
          PRIVACY POLICY
        </h1>

        <p className="mb-6 leading-relaxed">
          Welcome to Picme (collectively referred to as "Picme", "we", "us", or "our").
        </p>

        <p className="mb-6 leading-relaxed">
          We are Picme, a Private Limited Company committed to providing connectivity among creatives and consumers. 
          We respect your privacy and are committed to protecting your Personal Data. This Privacy Policy explains 
          how we manage your Personal Data when you visit the Picme App, your privacy rights, and how the law protects you.
        </p>

        <p className="mb-10 leading-relaxed">
          We maintain this application as a service to our staff and customers. By using our application, 
          you are agreeing to comply with and be bound by the following Privacy Policy. Please review the following carefully. 
          If you do not agree to this policy, you should not use this application.
        </p>

        {section("1.0 Introduction",
          <>
            <p>
              Picme is a marketplace application that connects Creators (e.g., photographers, stylists, editors) 
              with Recruiters (brands, agencies, individuals). This Privacy Policy explains what personal data we collect, 
              why we collect it, how we use and share it, how long we keep it, and your rights under applicable law including 
              the Nigerian Data Protection Act (NDPA).
            </p>
          </>
        )}

        {section("2.0 Controller and contact",
          <p>
            Picme is the data controller of personal data processed through the app and related services. 
            For privacy enquiries or to exercise your data rights, contact: 
            <br />
            <span className="font-medium">Email: info@Picmeapp.com</span>
          </p>
        )}

        {section("3.0 Scope",
          <p>
            This Policy applies to all users of Picme (Creators, Recruiters and visitors) and to personal data processed 
            through our mobile and web applications, APIs, emails, payment processors and related services.
          </p>
        )}

        {section("4.0 Key definitions",
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal data – information that identifies or can identify a living person</li>
            <li>Sensitive data – special categories such as biometric data</li>
            <li>Aggregated data – anonymised data used for analytics. Aggregated data alone is not personal data</li>
          </ul>
        )}

        {section("5.0 Personal data we collect and sources",
          <>
            <p className="mb-4">
              We collect personal data you provide directly, data collected automatically when you use our platforms, 
              and data from third parties. Categories include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity: name, title, date of birth, BVN and similar identifiers</li>
              <li>Contact: email, telephone, billing and service addresses</li>
              <li>Profile and portfolio: skills, experience, availability, profile photos, portfolio media</li>
              <li>Financial and transaction: bank account details, transaction metadata from payment processors (we do not store CVV)</li>
              <li>KYC and verification: identity documents, selfie/liveness checks and verification outcomes supplied by verification vendors</li>
              <li>Technical and usage: IP address, device type, OS, browser, app version, crash logs, pages visited, search and booking behaviour, timestamps, referral data</li>
              <li>Location: approximate by IP; precise only if you enable location services</li>
              <li>Communications: messages, support tickets, and marketing preferences</li>
            </ul>
          </>
        )}

        {section("6.0 Third-party sources",
          <p>
            We receive data from payment processors, verification vendors, and email/SMS delivery providers, 
            and from any external services you connect to Picme.
          </p>
        )}

        {section("7.0 Aggregated data",
          <p>
            We may aggregate and anonymise data for product improvement and analytics. 
            If aggregated data is re-linked to identify an individual, we treat it as personal data.
          </p>
        )}

        {section("8.0 Data Protection Officer / Privacy Lead",
          <p>
            Picme has appointed a Data Protection Officer (or designated Privacy Lead) responsible for overseeing 
            compliance with applicable data protection laws, including the Nigerian Data Protection Act (NDPA). 
            The DPO is responsible for monitoring compliance, advising on data protection obligations, 
            and serving as a contact point for data subjects and the Nigeria Data Protection Commission (NDPC). 
            You may contact the DPO for all privacy-related matters at:
          </p>
        )}

        {section("9.0 Purposes and lawful basis for processing",
          <div className="space-y-4">
            <p>We process personal data for the following purposes, with the listed lawful bases where applicable:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and administer the service: account management, bookings, payments (contract performance).</li>
              <li>KYC, fraud prevention and safety: identity verification, platform security and legal compliance (legal obligation and legitimate interests).</li>
              <li>Payments and billing: process fees, subscriptions, refunds (contract performance).</li>
              <li>Product improvement and personalisation: search ranking, recommendations and analytics (legitimate interests).</li>
              <li>Communications: transactional messages and marketing where you consent (consent / legitimate interests).</li>
              <li>Legal and compliance: respond to lawful requests, enforce Terms and defend rights (legal obligation / legitimate interests).</li>
            </ul>
            <p>
              When processing sensitive data such as biometrics we obtain explicit consent or rely on permitted legal grounds and safeguards.
              Where we rely on legitimate interests as a lawful basis for processing, we have conducted a balancing assessment to ensure that our interests are not overridden by your fundamental rights and freedoms. You may object to such processing at any time in accordance with applicable law.
            </p>
          </div>
        )}

            {section("10.0 Sharing and disclosure",
        <>
          <p>
            We disclose personal data only as necessary for the above purposes and only to:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Other users:</strong> public profile items (name, portfolio, rates, availability, ratings) 
              and booking-relevant information visible to Recruiters; sensitive data (full bank details) 
              are not shown to other users.
            </li>

            <li>
              <strong>Service providers and processors:</strong> hosting, storage, analytics, payment processors, 
              verification providers, communications providers and support vendors acting under contract 
              and only on our instructions.
            </li>

            <li>
              <strong>Legal or safety purposes:</strong> law enforcement, regulators, or to prevent fraud or imminent harm.
            </li>

            <li>
              <strong>Business transactions:</strong> in connection with corporate restructuring, merger or sale, 
              we will notify affected users where required.
            </li>

            <li>
              <strong>With your consent:</strong> where you authorise sharing or integrate third-party services.
            </li>
          </ul>

          <p>
            For the avoidance of doubt, Picme acts as a data controller in respect of personal data processed 
            through the platform. Certain third-party service providers (such as payment processors and verification vendors) 
            may act as data processors on our behalf, while others may act as independent data controllers 
            in accordance with their own privacy policies.
          </p>

          <p>
            We require vendors to implement appropriate security measures and contractual safeguards.
          </p>
        </>
      )}

      {section("11.0 Personal Data Breach Notification",
        <p>
          In the event of a personal data breach that is likely to result in a risk to the rights and freedoms 
          of data subjects, Picme will, without undue delay, notify the Nigeria Data Protection Commission 
          and affected users in accordance with the Nigerian Data Protection Act and applicable regulations. 
          We will provide information on the nature of the breach, likely consequences, and measures taken 
          or proposed to address it.
        </p>
      )}

      {section("12.0 International transfers",
        <p>
          Your data may be stored or processed outside Nigeria. We ensure transfers comply with NDPA requirements 
          and use appropriate safeguards such as standard contractual clauses, binding corporate rules, 
          or other NDPC-approved mechanisms as applicable.
        </p>
      )}

      {section("13.0 Retention",
        <p>
          We retain personal data only as long as necessary to provide services, comply with legal and regulatory 
          obligations (including AML/tax), resolve disputes and enforce agreements. Account data is retained while 
          your account is active. KYC and transaction records are retained in line with regulatory retention requirements. 
          When you delete your account we will remove or anonymise personal data except where retention is required by law 
          or necessary for fraud prevention and legitimate business purposes.
        </p>
      )}

      {section("14.0 Security",
        <p>
          We apply administrative, technical and physical safeguards such as encryption in transit, access controls, 
          secure hosting and monitoring to protect data. No system is completely secure; you share responsibility 
          for securing your credentials and devices.
        </p>
      )}

      {section("15.0 Cookies and similar technologies",
        <p>
          We use cookies, SDKs and similar technologies for authentication, security, performance, analytics 
          and personalisation. You can manage cookie preferences via your browser or device settings; 
          disabling some cookies may limit functionality.
        </p>
      )}

      {section("16.0 Biometric processing and verification",
        <p>
          We may use third-party providers for biometric verification. We obtain explicit consent prior 
          to biometric processing. Picme receives only verification results and limited metadata; 
          we do not retain raw biometric templates. Verification may be required to access certain features 
          such as payouts or certain bookings.
        </p>
      )}

      {section("17.0 Children",
        <p>
          Our services are not directed at persons under 18. We do not knowingly collect personal data 
          from children under 18. If we learn we have collected such data we will delete it and take 
          other steps required by applicable law.
        </p>
      )}

      {section("18.0 Automated decision-making and profiling",
        <p>
          We may use automated systems for search ranking, recommendations, fraud detection and verification scoring. 
          If an automated decision has a legal or similarly significant effect on you, you may request human review 
          and information about the decision.
        </p>
      )}

      {section("19.0 Your rights",
        <p>
          Subject to applicable law you may have rights to: be informed, access, rectify, erase, restrict processing, 
          object to processing, data portability, and withdraw consent. To exercise rights contact info@Picmeapp.com. 
          We will verify identity and respond in line with NDPA timelines. If dissatisfied you may lodge a complaint 
          with the Nigeria Data Protection Commission. Where processing is based on your consent, you have the right 
          to withdraw such consent at any time through your account settings or by contacting us. Withdrawal of consent 
          does not affect the lawfulness of processing carried out prior to withdrawal. We aim to respond to all verified 
          data subject requests and privacy-related complaints within thirty (30) days, except where a longer period 
          is permitted by law due to complexity or volume. You may opt out of receiving marketing communications 
          at any time by using the unsubscribe link provided in such messages, adjusting your notification preferences 
          within the app, or contacting us directly. Transactional or service-related communications will continue 
          where necessary.
        </p>
      )}

      {section("20.0 Consequences of not providing data",
        <p>
          If you refuse or withdraw personal data required for core functions (e.g., identity verification 
          or payment details), we may be unable to create your account, process payments or enable certain features.
        </p>
      )}

      {section("21.0 Third-party links and embedded content",
        <p>
          Our services may link to third-party sites or embed third-party content. We are not responsible 
          for their privacy practices. Review their privacy policies before using those services.
        </p>
      )}

      {section("22.0 App Permissions and Device Access",
        <p>
          The Picme mobile application may request access to certain device features such as camera, storage, 
          notifications, or location, solely to enable specific functionalities. You may manage or revoke 
          these permissions at any time through your device settings. Denying certain permissions may limit 
          some features of the app.
        </p>
      )}

      {section("23.0 Changes to this Policy",
        <p>
          We may update this Policy to reflect changes in law, features or operations. Material changes 
          will be communicated via in-app notice or email where feasible. Continued use after changes 
          indicates acceptance.
        </p>
      )}

      {section("24.0 Contact and supervisory authority",
        <>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or wish to 
            exercise your data protection rights, you may contact us at info@picmeapp.com.
          </p>

          <p>
            Where you are dissatisfied with our response, you have the right to lodge a complaint with 
            the Nigeria Data Protection Commission (NDPC) in accordance with applicable data protection laws.
          </p>
        </>
      )}


      </div>
    </div>
  );
};

const section = (title, content) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="leading-relaxed text-gray-700 space-y-4">
      {content}
    </div>
  </div>
);

export default PrivacyPolicy;
