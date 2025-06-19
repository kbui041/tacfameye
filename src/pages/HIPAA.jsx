import React from 'react';
import '../index.css';
import pdfFile from '../assets/SODO-HIPAA-Privacy-Practices.pdf';

function HIPAA() {
  return (
    <div className="hipaa-page">
      <div className="hipaa-content">
        <h1>HIPAA Privacy Practices</h1>
        <p>You can view our full HIPAA Notice of Privacy Practices below:</p>
        <div className="pdf-wrapper">
          <iframe
            src={pdfFile}
            title="HIPAA Privacy Practices"
            className="hipaa-pdf"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HIPAA;
