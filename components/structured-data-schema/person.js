function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "Diwash Karmacharya",
          url: "https://www.diwashkarmacharya.com.np/",
          image: "",
          sameAs: "https://www.linkedin.com/in/diwashkarmacharya/",
          jobTitle: "Frontend Developer",
          worksFor: {
            "@type": "Organization",
            name: "Waterflow Technology Pvt.Ltd",
          },
        }),
      }}
    ></script>
  );
}

export default PersonSchema;
