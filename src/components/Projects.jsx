import React from 'react';
import '../styles.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Phishing Website Detection</h3>
        <p>
            Built a Webpage, that identifies the given link is a phishing link or a legitimate link. Phishing attacks presentan enduring threat, 
            it’s disclosing sensitive information of a user. — This project train upon various Machine
            Learning algorithms, then the best performed model is selected to train the model based on accuracy. 
            Here we got the Gradient Boost algorithm with accuracy over 97%. — Project Enhancing detection accuracy by
            mitigating false positives and false negatives. Developing a User-friendly interface for seamless interaction.
        </p>
        <a href="https://github.com/Karthik-Balli/PhishDetector">Link</a>
      </div>
      <div className="project">
        <h3>Continuous Monitoring Glucose Trace [CGM Trace]</h3>
        <p>
            Built a webpage that is used to monitor the glucose levels of a patient. 
            The given glucose values diagnosis of the patient data then produces the result. 
            Based on metrics values it states that the patient suffering from which type of Diabetes. 
            — This webpage shows the findings of a patient and also displays the glucose trends by using charts..
        </p>
        <a href="https://github.com/Karthik-Balli/CGM-Trace">Link</a>
      </div>
      
    </section>
  );
}

export default Projects;
