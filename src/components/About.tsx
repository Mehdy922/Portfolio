
const About = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/10d1cd26-56bc-4d53-adb4-3cc18579ef42.png" 
              alt="Muhammad Mehdy Hasnain" 
              className="w-80 h-96 object-cover rounded-lg animate-float"
            />
            {/* Orange decorative cube */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded transform rotate-12 animate-pulse"></div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">About me</h2>
              <div className="space-y-4">
                <p className="text-2xl font-medium text-foreground">
                  Aspiring software engineer passionate about building scalable solutions.
                </p>
                <p className="text-sm text-muted-foreground">
                  Freelancing: 2+ Years • Open-Source Contribution: 1+ Year
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate developer 👨‍💻 with a never-ending drive for picking up new coding languages and creating efficient software solutions. When I'm not immersed in code, I actively contribute to open-source projects 💻 and stay updated with the latest advancements in the tech world. My path in technology is fueled by innovation, a commitment to lifelong learning, and a love for solving real-world problems.
                </p>
              </div>
            </div>
            {/* Orange decorative cube */}
            <div className="absolute bottom-20 right-20 w-6 h-6 bg-primary rounded transform rotate-45 opacity-80 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
