

import React, { useState } from "react";
import "./Service.css";

const Service = () => {
  const [category, setCategory] = useState("fan-club");
  const [planType, setPlanType] = useState("standard");
  const [submittedInfo, setSubmittedInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedInfo(
      `Selected Service: ${category} | Plan: ${planType}`
    );
  };

  return (
    <div className="service-wrapper">
      <div className="service-card">
        <h2>Vijay Services</h2>
        <p className="service-subtitle">
          Choose a service option and preferred plan below.
        </p>

        <form onSubmit={handleSubmit} className="service-form">
          {/* Option Box (Select Dropdown) */}
          <div className="form-row">
            <label htmlFor="service-option" className="form-label">
              Service Option:
            </label>
            <select
              id="service-option"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="fan-club">Fan Club Membership</option>
              <option value="event-updates">Movie & Event Updates</option>
              <option value="merchandise">Official Merchandise</option>
              <option value="welfare-drive">Welfare & Charity Drive</option>
            </select>
          </div>


          <div className="form-row radio-row">
            <span className="form-label">Plan Type:</span>
            <div className="radio-options">
              <label className="radio-item">
                <input
                  type="radio"
                  name="planType"
                  value="basic"
                  checked={planType === "basic"}
                  onChange={(e) => setPlanType(e.target.value)}
                />
                <span>Basic</span>
              </label>

              <label className="radio-item">
                <input
                  type="radio"
                  name="planType"
                  value="standard"
                  checked={planType === "standard"}
                  onChange={(e) => setPlanType(e.target.value)}
                />
                <span>Standard</span>
              </label>

              <label className="radio-item">
                <input
                  type="radio"
                  name="planType"
                  value="vip"
                  checked={planType === "vip"}
                  onChange={(e) => setPlanType(e.target.value)}
                />
                <span>VIP</span>
              </label>
            </div>
          </div>

          <button type="submit" className="service-btn">
            Confirm Selection
          </button>

          {submittedInfo && (
            <div className="service-result">{submittedInfo}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Service;