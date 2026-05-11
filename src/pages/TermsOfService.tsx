import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-wpa-blue/10 blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
        >
          <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Effective Date: May 11, 2026</p>

          <p className="mb-4">Welcome to Web Pros Africa. These Terms of Service (“Terms”) govern your access to and use of the Web Pros Africa website, services, software solutions, hardware products, and digital platforms.</p>

          <p className="mb-8">By accessing our website or using our services, you agree to comply with these Terms.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">1. Company Information</h2>
          <p className="mb-2"><strong>Web Pros Africa</strong><br/>
          52 Disa Rd, Gordons Bay, Cape Town, 7155<br/>
          South Africa</p>
          <p className="mb-6"><strong>Email:</strong> <a href="mailto:info@webprosafrica.co.za" className="text-wpa-blue hover:underline">info@webprosafrica.co.za</a><br/>
          <strong>Phone:</strong> +27 78 178 1007</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">2. Services Provided</h2>
          <p className="mb-2">Web Pros Africa provides professional digital and technology services including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Full-stack web development</li>
            <li>Mobile application development</li>
            <li>Cloud infrastructure solutions</li>
            <li>DevOps and system maintenance</li>
            <li>API integrations</li>
            <li>eCommerce development</li>
            <li>UI/UX design</li>
            <li>Custom gaming PC builds</li>
            <li>Workstation computer builds</li>
            <li>Technical consulting</li>
            <li>Digital transformation services</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">3. Quotations & Pricing</h2>
          <p className="mb-2">All quotations issued by Web Pros Africa are valid for the period stated on the quotation document unless otherwise specified.</p>
          <p className="mb-2">Prices may change due to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Hardware market fluctuations</li>
            <li>Supplier pricing changes</li>
            <li>Exchange rate volatility</li>
            <li>Scope adjustments requested by the client</li>
          </ul>
          <p className="mb-6">Additional work outside the agreed project scope may result in additional charges.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">4. Payment Terms</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">4.1 Upfront Deposit Requirement</h3>
          <p className="mb-2">No service, development work, consultation, deployment, procurement, or project execution shall commence unless a minimum upfront payment of 50% of the quoted project amount has been received and cleared.</p>
          <p className="mb-2">This applies to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Web development</li>
            <li>Mobile applications</li>
            <li>Cloud deployments</li>
            <li>Digital systems</li>
            <li>API integrations</li>
            <li>Maintenance contracts</li>
            <li>Custom software development</li>
            <li>Design services</li>
            <li>Technical consulting</li>
          </ul>
          <p className="mb-6">Failure to make the required deposit may result in project delays or cancellation.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">4.2 Final Payments</h3>
          <p className="mb-2">The remaining balance must be paid according to the agreed invoice or milestone schedule.</p>
          <p className="mb-2">Web Pros Africa reserves the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Suspend work</li>
            <li>Restrict access to systems</li>
            <li>Delay deployment</li>
            <li>Withhold deliverables</li>
          </ul>
          <p className="mb-6">until all outstanding amounts are settled in full.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">5. PC Build & Hardware Sales Policy</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">5.1 Non-Negotiable Hardware Pricing</h3>
          <p className="mb-2">All PC build and hardware pricing provided by Web Pros Africa is strictly non-negotiable once quoted and approved.</p>
          <p className="mb-2">Due to supplier pricing volatility and procurement logistics:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Hardware quotations are time-sensitive</li>
            <li>Component availability may change without notice</li>
            <li>Substitute components may be recommended where necessary</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">5.2 Full Payment Before Hardware Release</h3>
          <p className="mb-2">All hardware, custom-built PCs, gaming systems, workstations, peripherals, and related equipment remain the sole property of Web Pros Africa until full payment has been received and cleared.</p>
          <p className="mb-2">No hardware shall be:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Collected</li>
            <li>Delivered</li>
            <li>Released</li>
            <li>Shipped</li>
            <li>Installed</li>
          </ul>
          <p className="mb-6">until payment has been made in full.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">5.3 Custom Orders</h3>
          <p className="mb-2">Custom PC builds and special-order hardware may require:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Full upfront payment</li>
            <li>Non-refundable procurement deposits</li>
          </ul>
          <p className="mb-6">once components have been ordered from suppliers.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">6. Project Timelines</h2>
          <p className="mb-2">Estimated project timelines are provided in good faith and may vary depending on:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Scope changes</li>
            <li>Client feedback delays</li>
            <li>Third-party integrations</li>
            <li>Hosting or infrastructure issues</li>
            <li>Supplier delays</li>
            <li>Force majeure events</li>
          </ul>
          <p className="mb-6">Clients are responsible for providing required materials, approvals, and feedback in a timely manner.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">7. Intellectual Property</h2>
          <p className="mb-2">Unless otherwise agreed in writing:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Web Pros Africa retains ownership of all proprietary development tools, frameworks, templates, and internal systems.</li>
            <li>Clients receive rights to paid deliverables upon full payment.</li>
            <li>Unpaid work remains the intellectual property of Web Pros Africa.</li>
          </ul>
          <p className="mb-6">Web Pros Africa may showcase completed public projects within its portfolio unless confidentiality agreements prohibit disclosure.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">8. Client Responsibilities</h2>
          <p className="mb-2">Clients agree to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Provide accurate information</li>
            <li>Respond to communications promptly</li>
            <li>Supply necessary project content</li>
            <li>Maintain lawful use of systems</li>
            <li>Avoid misuse of services</li>
          </ul>
          <p className="mb-6">Clients are solely responsible for content uploaded or distributed through systems developed by Web Pros Africa.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">9. Acceptable Use</h2>
          <p className="mb-2">Clients may not use our services for:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Illegal activities</li>
            <li>Fraudulent conduct</li>
            <li>Malware distribution</li>
            <li>Cyberattacks</li>
            <li>Hate speech</li>
            <li>Copyright infringement</li>
            <li>Unauthorized data collection</li>
            <li>Spamming or abusive activities</li>
          </ul>
          <p className="mb-6">Web Pros Africa reserves the right to suspend services violating these terms.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">10. Hosting & Third-Party Services</h2>
          <p className="mb-2">Some services may rely on third-party providers including:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Cloud hosting providers</li>
            <li>Domain registrars</li>
            <li>Payment gateways</li>
            <li>Email platforms</li>
            <li>Analytics services</li>
          </ul>
          <p className="mb-6">Web Pros Africa is not liable for outages or failures caused by third-party providers.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">11. Limitation of Liability</h2>
          <p className="mb-2">To the maximum extent permitted by law, Web Pros Africa shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Indirect damages</li>
            <li>Business interruption</li>
            <li>Data loss</li>
            <li>Loss of profits</li>
            <li>Delays caused by third parties</li>
            <li>Security breaches beyond reasonable control</li>
          </ul>
          <p className="mb-6">Clients are responsible for maintaining backups unless backup services are explicitly included.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">12. Warranties</h2>
          <p className="mb-2">Web Pros Africa provides services “as is” and does not guarantee:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Continuous uninterrupted availability</li>
            <li>Specific ranking results</li>
            <li>Guaranteed revenue increases</li>
            <li>Compatibility with unsupported third-party systems</li>
          </ul>
          <p className="mb-6">Hardware warranties are subject to manufacturer warranty terms.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">13. Refund Policy</h2>
          <p className="mb-2">Deposits and payments may be non-refundable in cases where:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Development work has commenced</li>
            <li>Hardware has been procured</li>
            <li>Custom services have been delivered</li>
            <li>Digital assets have been created</li>
          </ul>
          <p className="mb-6">Refund decisions remain at the sole discretion of Web Pros Africa unless otherwise required by law.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">14. Termination</h2>
          <p className="mb-2">Web Pros Africa reserves the right to terminate or suspend services if:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Payments are overdue</li>
            <li>Terms are violated</li>
            <li>Abuse or unlawful activity occurs</li>
            <li>Communication breaks down significantly</li>
          </ul>
          <p className="mb-6">Clients remain liable for all work completed up to termination.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">15. Privacy</h2>
          <p className="mb-6">Use of our website and services is also governed by our Privacy Policy.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">16. Governing Law</h2>
          <p className="mb-2">These Terms shall be governed by and interpreted in accordance with the laws of the Republic of South Africa.</p>
          <p className="mb-6">Any disputes arising shall fall under the jurisdiction of South African courts.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">17. Changes to Terms</h2>
          <p className="mb-2">Web Pros Africa reserves the right to modify these Terms at any time.</p>
          <p className="mb-6">Updated versions will be published on the website with the revised effective date.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">18. Contact Information</h2>
          <p className="mb-2">For any questions regarding these Terms, contact:</p>
          <p className="mb-2"><strong>Web Pros Africa</strong><br/>
          52 Disa Rd, Gordons Bay, Cape Town, 7155<br/>
          South Africa</p>
          <p className="mb-6"><strong>Email:</strong> <a href="mailto:info@webprosafrica.co.za" className="text-wpa-blue hover:underline">info@webprosafrica.co.za</a><br/>
          <strong>Phone:</strong> +27 78 178 1007</p>

        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
