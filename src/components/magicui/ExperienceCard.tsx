import React from "react";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <h3 className="role">{role}</h3>
      <p className="company-period">
        {company} — {period}
      </p>
      <p className="description">
        {description.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
