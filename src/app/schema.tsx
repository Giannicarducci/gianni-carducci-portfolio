'use client'

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gianni Carducci",
    "jobTitle": "Independent Product Builder",
    "description": "AI-assisted product development, software deployment, and user training. Creator of ProfitTracker and Professional Scrum Master I certified.",
    "url": "https://www.giannicarducci.com",
    "sameAs": [
      "https://www.linkedin.com/in/giannicarducci",
      "https://github.com/giannicarducci"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "FIU"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Professional Scrum Master I (PSM I)",
        "recognizedBy": { "@type": "Organization", "name": "Scrum.org" },
        "validFrom": "2019-11-26"
      }
    ],
    "knowsAbout": [
      "Product Management",
      "Agile Project Management",
      "Digital Transformation",
      "AI Product Development",
      "Product Strategy",
      "Sprint Planning",
      "Stakeholder Management",
      "Product Lifecycle Management"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
