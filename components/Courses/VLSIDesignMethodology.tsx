// components/Courses/AdvancedNodeSections.tsx
import React from 'react';

export default function VLSIDesignMethodology() {
  return (
    <>
      <section className="py-12 px-6 bg-green-50 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold mb-6">Advanced Node.js Curriculum</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Express Middleware</li>
          <li>Authentication & Authorization</li>
          <li>Database Integration</li>
          <li>Scaling Node Applications</li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Why Take Advanced Node.js?</h2>
        <p className="text-gray-700">
          This course is designed for backend developers wanting to master scalable
          and secure Node.js applications.
        </p>
      </section>
    </>
  );
}
