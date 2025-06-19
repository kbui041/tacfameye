import React from 'react';
import '../index.css';

function Services() {
  return (
    <div className="Services">
      <h1>Our Services</h1>

      {/* Adult Care */}
      <section>
        <h2>Adult Eye Care</h2>
        <p>
          The American Optometric Association recommends that most people have their eyes examined every one to two years depending on their age and health.
        </p>
        <p>
          Routine eye exams are an important way of maintaining your best vision and eye health. Our exams include tests for:
        </p>
        <ul>
          <li>Eye alignment</li>
          <li>Pupil testing and reflexes</li>
          <li>Visual fields</li>
          <li>Vision testing (myopia, hyperopia, astigmatism, presbyopia)</li>
          <li>
            Eye health evaluation (external and internal), including screening for:
            <ul>
              <li>Cataracts</li>
              <li>Glaucoma</li>
              <li>Macular degeneration</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Pediatric Care */}
      <section>
        <h2>Pediatric Eye Care</h2>
        <p>
          Experts say 25% of school-aged children suffer from some vision problem. Early detection is important to prevent permanent vision loss.
        </p>
        <p>
          School screenings often miss issues like muscle coordination, diseases, and peripheral vision problems. Most visual defects discovered before age five can be treated.
        </p>
        <p>Signs your child may be experiencing vision issues:</p>
        <ul>
          <li>Squinting</li>
          <li>Headaches</li>
          <li>Eyes pointing in different directions</li>
          <li>Blurred or double vision</li>
          <li>Tilted head when looking at objects</li>
          <li>Holding books too close or too far</li>
          <li>Short attention span while reading</li>
          <li>Frequent blinking or eye rubbing</li>
          <li>Red or swollen eyes</li>
          <li>Poor depth perception or judging distances</li>
          <li>Using finger to follow words</li>
          <li>Poor school or athletic performance</li>
        </ul>
        <p>
          Our exam includes alignment checks, depth perception, visual acuity, color vision testing, and full external and internal eye evaluation. We accept children as young as 6 years old.
        </p>
      </section>

      {/* Equipment */}
      <section>
        <h2>Facilities & Equipment</h2>
        <p>
          Our state-of-the-art facility offers retinal imaging and documentation. We provide superior diagnostics and uphold the highest standard of ophthalmic healthcare.
        </p>
      </section>

      {/* Services List */}
      <section>
        <h2>Complete Eye Care Services</h2>
        <ul>
          <li>General Eye Exams</li>
          <li>Comprehensive Eye Exams</li>
          <li>Computer Vision Refractions</li>
          <li>Refractive Surgery Co-Management</li>
          <li>Cataract Surgery Co-Management</li>
          <li>Contact Lens Fittings</li>
          <li>Retinal Photography — Optomap</li>
          <li>Dry Eye Analysis</li>
          <li>Medical Office Visits</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
