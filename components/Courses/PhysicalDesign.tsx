"use client";
import React from 'react';
export default function physicalDesign() {
  return (
    <>
      <section className="py-12 px-6 bg-blue-50 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold mb-6">React Basics Curriculum</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>JSX and Components</li>
          <li>State and Props</li>
          <li>Event Handling</li>
          <li>Lifecycle Methods</li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Why Learn React Basics?</h2>
        <p className="text-gray-700">
          React is one of the most popular libraries for building web UIs. This course
          will help you build a solid foundation.
        </p>
      </section>
    </>
  );
}
