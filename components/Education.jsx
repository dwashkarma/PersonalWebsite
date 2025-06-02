import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Bachelor in Information Technology",
      institution: "Texas College of Management and IT",
      // year: "2019 - 2024",
      // description:
      //   "Focused on software development, data structures, and web technologies.",
    },
    {
      degree: "Mangement with Computer Science (+2)",
      institution: "Oxford Secondary School",
      // year: "2017 - 2019",
      // description:
      //   "Science stream with focus on Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "Secondary Education Examination (SEE)",
      institution: "Munal Academy",
      // year: "2017",
      // description: "Completed with distinction in science and mathematics.",
    },
  ];

  return (
    <div id="education" className="flex flex-col gap-10 md:px-8">
      <h2 className="text-3xl font-bold text-textSecondary uppercase text-center md:text-start">
        Education
      </h2>
      <div className="flex flex-col gap-8">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-start gap-4">
              <FaGraduationCap className="text-2xl text-textSecondary mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-textSecondary">
                  {edu.degree}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm text-gray-600">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="hidden md:inline">•</span>
                  <span className="text-green-800">{edu.year}</span>
                </div>
                <p className="mt-2 text-gray-700">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
