import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-wpa-blue/10 blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
        >
          <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Effective Date: May 11, 2026</p>

          <p className="mb-4">Welcome to Web Pros Africa. Your privacy is important to us. This Privacy Policy explains how Web Pros Africa (“we,” “our,” or “us”) collects, uses, stores, and protects your information when you use our website and services.</p>

          <p className="mb-8">By accessing or using our website, you agree to the terms outlined in this Privacy Policy.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">1. Company Information</h2>
          <p className="mb-2"><strong>Web Pros Africa</strong><br/>
          52 Disa Rd, Gordons Bay, Cape Town, 7155<br/>
          South Africa</p>
          <p className="mb-6"><strong>Email:</strong> <a href="mailto:info@webprosafrica.co.za" className="text-wpa-blue hover:underline">info@webprosafrica.co.za</a><br/>
          <strong>Phone:</strong> +27 78 178 1007</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Personal Information</h3>
          <p className="mb-2">When you interact with our website, request services, submit forms, or create an account, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Billing information</li>
            <li>Project requirements</li>
            <li>Uploaded files and documents</li>
            <li>Login credentials</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Technical Information</h3>
          <p className="mb-2">We may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Website usage statistics</li>
            <li>Cookies and tracking data</li>
            <li>Session information</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">PC Builder Information</h3>
          <p className="mb-2">If you use our PC Builder system, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Selected hardware configurations</li>
            <li>Saved builds</li>
            <li>Budget preferences</li>
            <li>Performance requirements</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">3. How We Use Your Information</h2>
          <p className="mb-2">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Provide our services</li>
            <li>Respond to inquiries</li>
            <li>Process quotations and requests</li>
            <li>Manage customer accounts</li>
            <li>Improve website performance</li>
            <li>Deliver technical support</li>
            <li>Send service updates</li>
            <li>Provide marketing communications (with consent)</li>
            <li>Enhance cybersecurity and fraud prevention</li>
            <li>Analyze website usage and trends</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">4. POPIA Compliance</h2>
          <p className="mb-2">Web Pros Africa complies with the Protection of Personal Information Act (POPIA) of South Africa.</p>
          <p className="mb-4">We process personal information lawfully and transparently and only for legitimate business purposes.</p>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent</li>
            <li>Object to certain processing activities</li>
          </ul>
          <p className="mb-6">Requests can be sent to: <a href="mailto:info@webprosafrica.co.za" className="text-wpa-blue hover:underline">info@webprosafrica.co.za</a></p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">5. Cookies & Tracking Technologies</h2>
          <p className="mb-2">Our website uses cookies and similar technologies to improve user experience and analyze website traffic.</p>
          <p className="mb-2">Cookies may be used for:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Login sessions</li>
            <li>Remembering preferences</li>
            <li>Analytics</li>
            <li>Security</li>
            <li>Performance optimization</li>
          </ul>
          <p className="mb-6">Users may disable cookies through their browser settings, though some features may not function correctly.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">6. Data Security</h2>
          <p className="mb-2">We implement industry-standard security measures to protect your information, including:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>SSL encryption</li>
            <li>Secure authentication systems</li>
            <li>Firewall protection</li>
            <li>Database security</li>
            <li>Access control measures</li>
            <li>Secure cloud infrastructure</li>
            <li>Regular system monitoring</li>
          </ul>
          <p className="mb-6">While we strive to protect your information, no online platform can guarantee absolute security.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">7. Sharing of Information</h2>
          <p className="mb-2">We do not sell personal information.</p>
          <p className="mb-2">We may share information with trusted third parties only when necessary to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Deliver services</li>
            <li>Process payments</li>
            <li>Host infrastructure</li>
            <li>Provide analytics</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mb-6">Third-party providers are required to maintain confidentiality and data protection standards.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">8. Third-Party Services</h2>
          <p className="mb-2">Our website may integrate with third-party services including:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Google Analytics</li>
            <li>WhatsApp</li>
            <li>Payment gateways</li>
            <li>Cloud hosting providers</li>
            <li>Social media platforms</li>
            <li>Email delivery services</li>
          </ul>
          <p className="mb-6">These third parties may collect data according to their own privacy policies.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">9. Data Retention</h2>
          <p className="mb-2">We retain personal information only as long as necessary to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Fulfill business purposes</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
            <li>Maintain records</li>
          </ul>
          <p className="mb-6">Unused or unnecessary data may be securely deleted.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">10. User Accounts</h2>
          <p className="mb-2">Users are responsible for:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Maintaining account confidentiality</li>
            <li>Protecting passwords</li>
            <li>Reporting unauthorized access</li>
          </ul>
          <p className="mb-6">Web Pros Africa is not responsible for losses resulting from compromised user credentials caused by user negligence.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">11. Children's Privacy</h2>
          <p className="mb-6">Our services are not directed toward children under the age of 18. We do not knowingly collect information from minors.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">12. International Data Transfers</h2>
          <p className="mb-6">Some data may be processed or stored outside South Africa using secure cloud infrastructure providers. We ensure reasonable safeguards are implemented for international data transfers.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">13. Your Rights</h2>
          <p className="mb-2">You may request to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Restrict processing</li>
            <li>Export your information</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="mb-6">To exercise these rights, contact: <a href="mailto:info@webprosafrica.co.za" className="text-wpa-blue hover:underline">info@webprosafrica.co.za</a></p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">14. Changes to This Policy</h2>
          <p className="mb-2">Web Pros Africa reserves the right to update this Privacy Policy at any time.</p>
          <p className="mb-6">Updated versions will be posted on this page with a revised effective date.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">15. Contact Us</h2>
          <p className="mb-2">If you have questions regarding this Privacy Policy or your personal information, contact us:</p>
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

export default PrivacyPolicy;
