import { useState } from "react";

export default function UserInputs({ inputs, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={inputs.initialInv}
            required
            onChange={(event) => handleChange("initialInv", event)}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={inputs.annualInv}
            required
            onChange={(event) => handleChange("annualInv", event)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={inputs.expReturn}
            required
            onChange={(event) => handleChange("expReturn", event)}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={inputs.duration}
            required
            onChange={(event) => handleChange("duration", event)}
          />
        </p>
      </div>
    </section>
  );
}
