import React from 'react';
import '../index.css';

export default function Location() {
  return (
    <div className="location-page">
      {/* Centered Page Title */}
      <h1 className="location-heading">Tacoma Family Eyecare</h1>

      <div className="location-top">
        {/* Left: Contact Info & Hours */}
        <div className="location-info">
          <p>2219 South 37th Street<br />Tacoma, WA 98409</p>
          <p>
            <strong>P:</strong> (253) 671 – 6012<br />
            <strong>F:</strong> (253) 671 – 6013<br />
            <strong>E:</strong> tacomafamilyeyecare@gmail.com
          </p>

          <h3>Office Hours:</h3>
          <table className="hours-table">
            <tbody>
              <tr><td>Monday</td><td>10:00 AM – 6:00 PM</td></tr>
              <tr><td>Tuesday</td><td>10:00 AM – 6:00 PM</td></tr>
              <tr><td>Wednesday</td><td>10:00 AM – 6:00 PM</td></tr>
              <tr><td>Thursday</td><td>10:00 AM – 6:00 PM</td></tr>
              <tr><td>Friday</td><td>10:00 AM – 6:00 PM</td></tr>
              <tr><td>Saturday</td><td>9:30 AM – 4:30 PM</td></tr>
              <tr><td>Sunday</td><td>Closed</td></tr>
            </tbody>
          </table>
        </div>

        {/* Right: Google Map */}
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.5531935104254!2d-122.4681162!3d47.2253242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905555d7acd713%3A0xa04fecf00e53ef7c!2sCostco%20Wholesale!5e0!3m2!1sen!2sus!4v1750321231270!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            title="Tacoma Costco Map"
          ></iframe>
        </div>
      </div>

      {/* Bottom: Instructions */}
      <div className="location-note">
        <p>
          We are conveniently located <span style={{ color: 'red' }}>INSIDE</span> the Tacoma COSTCO WAREHOUSE.
          You do not need to be a COSTCO member to use our services. Simply let the COSTCO ID checker
          at the warehouse door know you are going to the eye clinic.
        </p>
      </div>
    </div>
  );
}
