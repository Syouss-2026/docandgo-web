import Link from "next/link";

const footerLinks = {
  COMPANY: [
    { label: "About Doc&Go", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
  LEGAL: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  RESOURCES: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Security", href: "/security" },
    { label: "FAQ", href: "/#faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1929] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#7c3aed] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <span className="font-semibold text-white text-base">
                Doc&amp;Go
              </span>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Your health, simplified. Manage medical records, test results, and
              family health in one secure place.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-widest text-[#64748b] uppercase mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[#94a3b8] text-sm hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e2d3d] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© {new Date().getFullYear()} Doc&amp;Go. All rights reserved.</p>
          <p>
            Built in Australia 🇦🇺 &nbsp;·&nbsp; Compliant with the Privacy Act
            1988 (Cth)
          </p>
        </div>
      </div>
    </footer>
  );
}
