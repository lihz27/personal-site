import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal1"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="resume modal-dialog" role="document">
        <div className="resume modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <div id="page-wrap">
    
    <img src="https://media.licdn.com/dms/image/C5603AQExZfKddm1r4w/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=T1SejHWE05CtVyaUXfQ2luyr2ox5xNUUbUvQJpNcG9g" alt="Profile photo" id="resume-profile" />

    <div id="contact-info" className="vcard">
    
        {/* <!-- Microformats! --> */}
    
        <h1 className="fn">Jack Li</h1>
    
        <p>
            Cell: <span className="tel">555-666-7777</span><br />
            Email: <a className="email" href="mailto:greatoldone@lovecraft.com">greatoldone@lovecraft.com</a>
        </p>
    </div>
            
    <div id="objective">
        <p>
            I am an outgoing and energetic (ask anybody) young professional, seeking a 
            career that fits my professional skills, personality, and murderous tendencies. 
            My squid-like head is a masterful problem solver and inspires fear in who gaze upon it. 
            I can bring world domination to your organization. 
        </p>
    </div>
    
    <div className="clear"></div>
    
    <dl>
        <dd className="clear"></dd>
        
        <dt>Education</dt>
        <dd>
            <h2>Withering Madness University - Planet Vhoorl</h2>
            <p><strong>Major:</strong> Public Relations<br />
               <strong>Minor:</strong> Scale Tending</p>
        </dd>
        
        <dd className="clear"></dd>
        
        <dt>Skills</dt>
        <dd>
            <h2>Office skills</h2>
            <p>Office and records management, database administration, event organization, customer support, travel coordination</p>
            
            <h2>Computer skills</h2>
            <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
        </dd>
        
        <dd className="clear"></dd>
        
        <dt>Experience</dt>
        <dd>
            <h2>Doomsday Cult <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span></h2>
            <ul>
                <li>Inspired and won highest peasant death competition among servants</li>
                <li>Helped coordinate managers to grow cult following</li>
                <li>Provided untimely deaths to all who opposed</li>
            </ul>
            
            <h2>The Watering Hole <span>Bartender/Server - Milwaukee, WI - 2009</span></h2>
            <ul>
                <li>Worked on grass-roots promotional campaigns</li>
                <li>Reduced theft and property damage percentages</li>
                <li>Janitorial work, Laundry</li>
            </ul> 
        </dd>
        
        <dd className="clear"></dd>
        
        <dt>Hobbies</dt>
        <dd>World Domination, Deep Sea Diving, Murder Most Foul</dd>
        
        <dd className="clear"></dd>
        
        <dt>References</dt>
        <dd>Available on request</dd>
        
        <dd className="clear"></dd>
    </dl>
    
    <div className="clear"></div>

</div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
