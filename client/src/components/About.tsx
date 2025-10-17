export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12" data-testid="text-about-title">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p data-testid="text-about-paragraph-1">
            I'm a Computer Science Engineer skilled in Java, SQL, PySpark, and
            React.js, with practical experience in debugging, workflow
            optimization, and product enhancement.
          </p>
          <p data-testid="text-about-paragraph-2">
            I completed a stipend-based internship at DataSwitch (TridentSoft
            Intelligence Solutions), where I worked on ETL tools and XML-to-JSON
            data transformations.
          </p>
          <p data-testid="text-about-paragraph-3">
            Currently, I'm developing real-world and personal frontend projects to
            sharpen my design and problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}
