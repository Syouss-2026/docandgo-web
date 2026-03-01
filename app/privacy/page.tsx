import React from "react";

export const metadata = {
  title: "Privacy Policy | Doc&Go",
  description:
    "Doc&Go Privacy Policy — your rights under the Privacy Act 1988 (Cth) and Australian Privacy Principles.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-[#1a1a1a]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0f766e] to-[#14b8a6] rounded-lg flex items-center justify-center text-white text-sm font-bold">
              D&G
            </div>
            <span className="font-semibold text-[#1a1a1a]">Doc&amp;Go</span>
          </a>
          <a
            href="/"
            className="text-sm text-[#0f766e] hover:text-[#14b8a6] transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title block */}
        <div className="mb-12">
          <span className="inline-block bg-teal-50 text-[#0f766e] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Effective date: 1 March 2026 &nbsp;|&nbsp; Last updated: 1 March
            2026
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            Doc&amp;Go is committed to protecting your personal information in
            accordance with the{" "}
            <strong>Privacy Act 1988 (Cth)</strong> and the{" "}
            <strong>Australian Privacy Principles (APPs)</strong>. Because we
            handle health information — a category of sensitive information under
            Australian law — we apply the highest standard of care to everything
            we collect, store and use.
          </p>
        </div>

        {/* Table of contents */}
        <nav className="bg-white border border-gray-100 rounded-2xl p-6 mb-12 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">
            Contents
          </h2>
          <ol className="space-y-2 text-sm text-[#0f766e]">
            {[
              ["1", "About Us", "#about"],
              ["2", "What Personal Information We Collect", "#what-we-collect"],
              ["3", "Health Information and Sensitive Data", "#health-data"],
              ["4", "How We Collect Personal Information", "#how-we-collect"],
              ["5", "Why We Collect Personal Information", "#why-we-collect"],
              ["6", "Use and Disclosure", "#use-disclosure"],
              ["7", "Direct Marketing", "#direct-marketing"],
              ["8", "Overseas Disclosure", "#overseas"],
              ["9", "Security of Your Information", "#security"],
              ["10", "Data Retention", "#retention"],
              ["11", "Your Right to Access and Correct", "#access-correction"],
              ["12", "Notifiable Data Breaches", "#data-breaches"],
              ["13", "Making a Privacy Complaint", "#complaints"],
              ["14", "Changes to This Policy", "#changes"],
              ["15", "Contact Us", "#contact"],
            ].map(([num, label, href]) => (
              <li key={num}>
                <a
                  href={href}
                  className="hover:text-[#14b8a6] transition-colors"
                >
                  {num}. {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-14 prose prose-gray max-w-none">
          {/* 1 */}
          <section id="about">
            <SectionHeading number="1" title="About Us" />
            <p>
              Doc&amp;Go is a digital health management platform that uses
              artificial intelligence to help individuals understand their
              pathology and medical test results, track health trends over time,
              and manage their personal health data securely.
            </p>
            <p>
              In this Privacy Policy, <strong>"Doc&amp;Go"</strong>,{" "}
              <strong>"we"</strong>, <strong>"us"</strong> and{" "}
              <strong>"our"</strong> refer to Doc&amp;Go and its operators.
              References to <strong>"you"</strong> and{" "}
              <strong>"your"</strong> refer to you as a user of our platform,
              website, or services.
            </p>
            <p>
              We are a{" "}
              <strong>private sector health service provider</strong> for the
              purposes of the Privacy Act 1988 (Cth). This means the Act applies
              to us regardless of turnover.
            </p>
          </section>

          <Divider />

          {/* 2 */}
          <section id="what-we-collect">
            <SectionHeading
              number="2"
              title="What Personal Information We Collect"
            />
            <p>
              We collect the minimum personal information necessary to provide
              our services. This may include:
            </p>
            <SubHeading>Identity and contact information</SubHeading>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Date of birth (where provided)</li>
              <li>Username and account credentials</li>
            </ul>
            <SubHeading>Health and medical information</SubHeading>
            <ul>
              <li>
                Pathology reports, blood tests, and other medical test results
                you upload
              </li>
              <li>
                Health markers, measurements, and trends derived from your
                results
              </li>
              <li>
                Health-related notes or context you choose to provide (e.g.,
                symptoms, medications)
              </li>
            </ul>
            <SubHeading>Technical and usage information</SubHeading>
            <ul>
              <li>IP address and approximate location</li>
              <li>Device type, browser type and operating system</li>
              <li>
                Pages visited, features used, and session duration (via
                analytics)
              </li>
              <li>Log data and error reports</li>
            </ul>
            <SubHeading>Communications</SubHeading>
            <ul>
              <li>Email address captured at waitlist sign-up</li>
              <li>Support enquiries and feedback you send us</li>
            </ul>
            <p>
              We do not collect Medicare numbers, tax file numbers, or other
              government identifiers unless specifically required and authorised
              by law.
            </p>
          </section>

          <Divider />

          {/* 3 */}
          <section id="health-data">
            <SectionHeading
              number="3"
              title="Health Information and Sensitive Data"
            />
            <Callout>
              Health information is classified as{" "}
              <strong>sensitive information</strong> under the Privacy Act 1988
              (Cth) and receives a higher level of protection than other personal
              information.
            </Callout>
            <p>
              We only collect sensitive information (including health
              information) with your <strong>explicit consent</strong>, and only
              to the extent reasonably necessary to provide the services you have
              requested.
            </p>
            <p>
              Your health information will never be:
            </p>
            <ul>
              <li>Sold to third parties</li>
              <li>Used for insurance or employment purposes</li>
              <li>
                Shared with pharmaceutical companies, advertisers or data
                brokers
              </li>
              <li>
                Used to make automated decisions that have legal or similarly
                significant effects on you without your explicit consent
              </li>
            </ul>
            <p>
              We may de-identify your health data (so it can no longer identify
              you) for the purpose of improving our AI models and platform
              quality. De-identified data is not personal information under
              Australian law. We will always notify you of this and provide you
              the opportunity to opt out.
            </p>
          </section>

          <Divider />

          {/* 4 */}
          <section id="how-we-collect">
            <SectionHeading
              number="4"
              title="How We Collect Personal Information"
            />
            <p>
              In accordance with <strong>APP 3</strong>, we collect personal
              information only by lawful and fair means, and only from you
              directly unless it is unreasonable or impracticable to do so.
            </p>
            <p>We collect information when you:</p>
            <ul>
              <li>Register for an account or join our waitlist</li>
              <li>
                Upload a pathology or medical document to our platform
              </li>
              <li>
                Connect a patient portal or healthcare provider integration
              </li>
              <li>Contact us via email or support channels</li>
              <li>Use our website or application (via cookies and analytics)</li>
            </ul>
            <SubHeading>Cookies and tracking</SubHeading>
            <p>
              We use cookies and similar tracking technologies to operate and
              improve our platform. You can control cookies via your browser
              settings. Disabling cookies may affect some features of our
              service.
            </p>
            <p>
              We use analytics services (such as Google Analytics or Plausible
              Analytics) to understand how our platform is used. Where possible,
              we use privacy-respecting, data-minimised analytics tools.
            </p>
          </section>

          <Divider />

          {/* 5 */}
          <section id="why-we-collect">
            <SectionHeading
              number="5"
              title="Why We Collect Personal Information"
            />
            <p>
              In accordance with <strong>APP 5</strong>, we collect personal
              information for the following primary purposes:
            </p>
            <ul>
              <li>
                <strong>To provide our services</strong> — creating your
                account, processing uploaded documents, and delivering AI
                explanations and trend analysis
              </li>
              <li>
                <strong>To send you health alerts</strong> — notifying you when
                specific markers fall outside normal reference ranges
              </li>
              <li>
                <strong>To communicate with you</strong> — responding to
                support enquiries, sending service updates, and notifying you
                about your waitlist status
              </li>
              <li>
                <strong>To improve our platform</strong> — understanding usage
                patterns and identifying areas for improvement (using
                de-identified or aggregated data)
              </li>
              <li>
                <strong>To meet legal obligations</strong> — complying with
                applicable Australian laws, court orders, and regulatory
                requirements
              </li>
            </ul>
            <p>
              If you do not provide certain personal information, we may not be
              able to provide some or all of our services.
            </p>
          </section>

          <Divider />

          {/* 6 */}
          <section id="use-disclosure">
            <SectionHeading number="6" title="Use and Disclosure" />
            <p>
              In accordance with <strong>APP 6</strong>, we will only use or
              disclose your personal information for the primary purpose for
              which it was collected, or for a related secondary purpose that you
              would reasonably expect.
            </p>
            <SubHeading>We may disclose your information to:</SubHeading>
            <ul>
              <li>
                <strong>Cloud infrastructure and hosting providers</strong> —
                for storing and processing your data securely (see Section 8 on
                overseas disclosure)
              </li>
              <li>
                <strong>Analytics providers</strong> — to understand platform
                usage (de-identified or aggregated only, where possible)
              </li>
              <li>
                <strong>Email service providers</strong> — to send you
                transactional and service communications
              </li>
              <li>
                <strong>Healthcare professionals</strong> — only if you
                explicitly choose to share your data with them via our platform
              </li>
              <li>
                <strong>Law enforcement or regulatory bodies</strong> — if
                required by Australian law, court order, or to prevent serious
                harm
              </li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent or trade your personal
              information to any third party. We will never disclose your health
              information to insurers, employers or advertisers.
            </p>
          </section>

          <Divider />

          {/* 7 */}
          <section id="direct-marketing">
            <SectionHeading number="7" title="Direct Marketing" />
            <p>
              In accordance with <strong>APP 7</strong>, we will only use your
              personal information (including your email address) for direct
              marketing purposes with your consent, or where permitted by law.
            </p>
            <p>
              We may send you emails about:
            </p>
            <ul>
              <li>Product updates and new features</li>
              <li>Health and wellness content related to our service</li>
              <li>Early access and waitlist updates</li>
            </ul>
            <p>
              You may opt out of marketing communications at any time by:
            </p>
            <ul>
              <li>
                Clicking the{" "}
                <strong>unsubscribe link</strong> in any email we send
              </li>
              <li>
                Contacting us at{" "}
                <a
                  href="mailto:privacy@docandgo.com"
                  className="text-[#0f766e] underline"
                >
                  privacy@docandgo.com
                </a>
              </li>
            </ul>
            <p>
              We will process all opt-out requests promptly and at no cost to
              you. We will not use sensitive information (including health data)
              for direct marketing without your explicit consent.
            </p>
          </section>

          <Divider />

          {/* 8 */}
          <section id="overseas">
            <SectionHeading number="8" title="Overseas Disclosure" />
            <p>
              In accordance with <strong>APP 8</strong>, we are transparent
              about any circumstances where your personal information may be
              stored or processed outside Australia.
            </p>
            <p>
              To provide our services, we use third-party infrastructure and
              service providers that may be located overseas, including:
            </p>
            <ul>
              <li>
                <strong>Cloud hosting</strong> — we use cloud providers
                (currently AWS and/or Vercel) which may process data on servers
                located in the United States or other jurisdictions
              </li>
              <li>
                <strong>Email services</strong> — transactional email providers
                may operate from servers outside Australia
              </li>
              <li>
                <strong>AI processing</strong> — AI model inference may be
                processed via third-party APIs located overseas
              </li>
            </ul>
            <p>
              Before disclosing your personal information to any overseas
              recipient, we take reasonable steps to ensure that the recipient
              handles your information in a manner consistent with the Australian
              Privacy Principles, or that an equivalent level of protection
              applies in that country.
            </p>
            <p>
              Where we cannot ensure equivalent protection, we will seek your
              consent before making such a disclosure, or rely on a permitted
              general situation under the Privacy Act.
            </p>
          </section>

          <Divider />

          {/* 9 */}
          <section id="security">
            <SectionHeading number="9" title="Security of Your Information" />
            <p>
              In accordance with <strong>APP 11</strong>, we take reasonable
              steps to protect your personal information from misuse,
              interference, loss, and unauthorised access, modification, or
              disclosure.
            </p>
            <p>Our security measures include:</p>
            <ul>
              <li>
                <strong>Encryption at rest and in transit</strong> — all data
                is encrypted using industry-standard protocols (AES-256 at rest,
                TLS 1.2+ in transit)
              </li>
              <li>
                <strong>Access controls</strong> — strict role-based access
                controls limit who can access your data within our systems
              </li>
              <li>
                <strong>Authentication</strong> — secure login with
                password hashing and support for multi-factor authentication
              </li>
              <li>
                <strong>Regular security audits</strong> — third-party
                penetration testing and vulnerability assessments
              </li>
              <li>
                <strong>24/7 monitoring</strong> — automated alerts for
                suspicious activity or unauthorised access attempts
              </li>
              <li>
                <strong>Secure infrastructure</strong> — hosting on
                healthcare-grade cloud infrastructure
              </li>
            </ul>
            <p>
              While we work hard to protect your information, no method of
              electronic storage or transmission is 100% secure. If you have
              reason to believe your account has been compromised, please contact
              us immediately at{" "}
              <a
                href="mailto:security@docandgo.com"
                className="text-[#0f766e] underline"
              >
                security@docandgo.com
              </a>
              .
            </p>
          </section>

          <Divider />

          {/* 10 */}
          <section id="retention">
            <SectionHeading number="10" title="Data Retention" />
            <p>
              We retain your personal information only for as long as necessary
              to fulfil the purposes for which it was collected, or as required
              by Australian law.
            </p>
            <ul>
              <li>
                <strong>Account data</strong> — retained while your account is
                active and for a reasonable period after account deletion (to
                comply with legal obligations or resolve disputes)
              </li>
              <li>
                <strong>Health information</strong> — retained while you use
                the service and deleted upon your request or account deletion,
                unless we are legally required to retain it
              </li>
              <li>
                <strong>Waitlist data</strong> — retained until you are
                onboarded to the platform or request removal
              </li>
              <li>
                <strong>Technical logs</strong> — typically retained for 90
                days for security and debugging purposes
              </li>
            </ul>
            <p>
              When we no longer need your personal information, we take
              reasonable steps to securely destroy or de-identify it in
              accordance with <strong>APP 11.2</strong>.
            </p>
            <p>
              You can request deletion of your account and all associated data
              at any time. See Section 11 for how to exercise this right.
            </p>
          </section>

          <Divider />

          {/* 11 */}
          <section id="access-correction">
            <SectionHeading
              number="11"
              title="Your Right to Access and Correct Your Information"
            />
            <p>
              Under <strong>APP 12</strong> and <strong>APP 13</strong>, you
              have the right to:
            </p>
            <ul>
              <li>
                <strong>Access</strong> the personal information we hold about
                you
              </li>
              <li>
                <strong>Correct</strong> any personal information that is
                inaccurate, out-of-date, incomplete, irrelevant, or misleading
              </li>
              <li>
                <strong>Delete</strong> your account and associated personal
                information (subject to any legal obligations to retain data)
              </li>
              <li>
                <strong>Export</strong> your health data in a portable format
              </li>
            </ul>
            <SubHeading>How to make a request</SubHeading>
            <p>
              To request access, correction, deletion, or data export, contact
              us at:
            </p>
            <p className="pl-4 border-l-4 border-teal-200 text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@docandgo.com"
                className="text-[#0f766e] underline"
              >
                privacy@docandgo.com
              </a>
              <br />
              <strong>Subject line:</strong> Privacy Request — [Access /
              Correction / Deletion / Export]
            </p>
            <p>
              We will respond to your request within a{" "}
              <strong>reasonable time</strong> (generally within 30 days). We
              may need to verify your identity before processing your request.
              We will not charge you for making a request, though we may charge a
              modest fee for excessive or unusually complex access requests.
            </p>
            <p>
              If we refuse your request, we will give you a written explanation
              and advise you of how to escalate the matter.
            </p>
          </section>

          <Divider />

          {/* 12 */}
          <section id="data-breaches">
            <SectionHeading number="12" title="Notifiable Data Breaches" />
            <p>
              We are subject to the{" "}
              <strong>
                Notifiable Data Breaches (NDB) scheme
              </strong>{" "}
              under Part IIIC of the Privacy Act 1988 (Cth).
            </p>
            <p>
              If we become aware of a data breach that is likely to result in
              serious harm to any individual, we will:
            </p>
            <ul>
              <li>
                Notify the{" "}
                <strong>
                  Office of the Australian Information Commissioner (OAIC)
                </strong>{" "}
                as soon as practicable
              </li>
              <li>
                Notify all affected individuals directly, as required by law
              </li>
              <li>
                Provide you with recommendations on steps you can take to
                protect yourself
              </li>
            </ul>
            <p>
              We take all suspected data breaches seriously. If you believe your
              personal information has been compromised, please contact us
              immediately at{" "}
              <a
                href="mailto:security@docandgo.com"
                className="text-[#0f766e] underline"
              >
                security@docandgo.com
              </a>
              .
            </p>
          </section>

          <Divider />

          {/* 13 */}
          <section id="complaints">
            <SectionHeading number="13" title="Making a Privacy Complaint" />
            <p>
              If you believe we have interfered with your privacy or breached
              an Australian Privacy Principle, you have the right to make a
              complaint.
            </p>
            <SubHeading>Step 1 — Contact us directly</SubHeading>
            <p>
              We encourage you to contact us first so we can resolve your
              concern informally and promptly.
            </p>
            <p className="pl-4 border-l-4 border-teal-200 text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@docandgo.com"
                className="text-[#0f766e] underline"
              >
                privacy@docandgo.com
              </a>
              <br />
              <strong>Subject line:</strong> Privacy Complaint
            </p>
            <p>
              We will acknowledge your complaint within{" "}
              <strong>5 business days</strong> and aim to resolve it within{" "}
              <strong>30 days</strong>. If more time is needed, we will let you
              know.
            </p>
            <SubHeading>
              Step 2 — Escalate to the OAIC (if unresolved)
            </SubHeading>
            <p>
              If you are not satisfied with our response, or if we have not
              responded within 30 days, you may lodge a complaint with the{" "}
              <strong>
                Office of the Australian Information Commissioner (OAIC)
              </strong>
              :
            </p>
            <p className="pl-4 border-l-4 border-teal-200 text-gray-700">
              <strong>Website:</strong>{" "}
              <a
                href="https://www.oaic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f766e] underline"
              >
                www.oaic.gov.au
              </a>
              <br />
              <strong>Phone:</strong> 1300 363 992
              <br />
              <strong>Hours:</strong> Monday to Thursday, 10am–4pm AEST/AEDT
              <br />
              <strong>Post:</strong> GPO Box 5218, Sydney NSW 2001
            </p>
          </section>

          <Divider />

          {/* 14 */}
          <section id="changes">
            <SectionHeading number="14" title="Changes to This Policy" />
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or legal obligations. When
              we make material changes, we will:
            </p>
            <ul>
              <li>Update the "Last updated" date at the top of this page</li>
              <li>
                Notify registered users via email where the changes are
                significant
              </li>
            </ul>
            <p>
              We encourage you to review this policy periodically. Your
              continued use of our services after any changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <Divider />

          {/* 15 */}
          <section id="contact">
            <SectionHeading number="15" title="Contact Us" />
            <p>
              For all privacy-related enquiries, requests, or complaints,
              please contact our Privacy Officer:
            </p>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-4 shadow-sm">
              <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-3">
                Privacy Officer — Doc&amp;Go
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  📧{" "}
                  <a
                    href="mailto:privacy@docandgo.com"
                    className="text-[#0f766e] underline"
                  >
                    privacy@docandgo.com
                  </a>
                </li>
                <li>🌐 docandgo.com</li>
                <li>🇦🇺 Australia</li>
              </ul>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              This Privacy Policy is governed by the laws of Australia and
              should be read in conjunction with our{" "}
              <a href="/terms" className="text-[#0f766e] underline">
                Terms of Service
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          © 2026 Doc&amp;Go. This Privacy Policy was prepared in accordance with
          the Privacy Act 1988 (Cth) and the Australian Privacy Principles
          (APPs).
          <br className="hidden sm:block" /> For the full text of the APPs,
          visit{" "}
          <a
            href="https://www.oaic.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0f766e] underline"
          >
            www.oaic.gov.au
          </a>
          .
        </div>
      </div>
    </main>
  );
}

/* ─── Helper components ─── */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-start gap-3">
      <span className="text-[#14b8a6] font-mono text-lg mt-0.5">{number}.</span>
      {title}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-[#1a1a1a] mt-6 mb-2">
      {children}
    </h3>
  );
}

function Divider() {
  return <hr className="border-gray-100" />;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-teal-50 border-l-4 border-[#14b8a6] rounded-r-xl px-5 py-4 my-4 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  );
}
