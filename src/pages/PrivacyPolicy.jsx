import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="container py-5" style={{ marginTop: "80px" }}>
      <h1 className="fw-bold mb-4 display-6 text-center">
        Privacy <span style={{ color: "#be0d07" }}>Policy</span>
      </h1>

      <p className="text-muted text-center mb-5">
        Technology Transfer Office (TTO), IIT Hyderabad
      </p>

      <div className="privacy-content">
        <h5 className="fw-bold mt-4">1. Introduction</h5>
        <p>
          The Technology Transfer Office (TTO) at the Indian Institute of
          Technology Hyderabad is committed to protecting the privacy of users
          who visit our website. This Privacy Policy explains how we collect,
          use, and safeguard your information.
        </p>

        <h5 className="fw-bold mt-4">2. Information We Collect</h5>
        <p>
          We may collect personal information such as your name, email address,
          contact number, and message details when you voluntarily submit forms
          on our website (for example, through the Contact Us page).
        </p>

        <h5 className="fw-bold mt-4">3. Use of Information</h5>
        <p>
          The information collected is used solely for the purpose of responding
          to your queries, providing requested information, improving our
          services, and facilitating communication related to technology
          transfer, innovation, and collaboration activities.
        </p>

        <h5 className="fw-bold mt-4">4. Data Sharing & Disclosure</h5>
        <p>
          TTO, IIT Hyderabad does not sell, rent, or trade your personal
          information. Your data may be shared internally within IIT Hyderabad
          only when necessary to address your request or comply with legal
          obligations.
        </p>

        <h5 className="fw-bold mt-4">5. Data Security</h5>
        <p>
          We implement reasonable technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction.
        </p>

        <h5 className="fw-bold mt-4">6. Cookies & Analytics</h5>
        <p>
          Our website may use cookies or basic analytics tools to understand user
          behavior and improve website performance. These do not personally
          identify users.
        </p>

        <h5 className="fw-bold mt-4">7. External Links</h5>
        <p>
          This website may contain links to external websites. TTO, IIT
          Hyderabad is not responsible for the privacy practices or content of
          such external sites.
        </p>

        <h5 className="fw-bold mt-4">8. Changes to This Policy</h5>
        <p>
          This Privacy Policy may be updated from time to time. Any changes will
          be posted on this page with the updated effective date.
        </p>

        <h5 className="fw-bold mt-4">9. Contact Information</h5>
        <p>
          If you have any questions regarding this Privacy Policy or how your
          information is handled, please contact us at:
        </p>

        <p className="fw-semibold">
          Technology Transfer Office, IIT Hyderabad<br />
          Email: office.tto@iith.ac.in
        </p>
      </div>

      {/* Page Styles */}
      <style>{`
        .privacy-content p {
          color: #555;
          line-height: 1.7;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
}
