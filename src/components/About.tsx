import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const About = () => {
  const experiences = [
    {
      company: "PakWheels",
      role: "Product Manager Intern",
      location: "Lahore, Pakistan",
      period: "Aug 2025 – Present",
      achievements: [
        "Own product initiatives from concept to deployment, translating stakeholder requirements into actionable plans.",
        "Drive execution by facilitating sprint ceremonies and collaborating with engineering on roadmap priorities."
      ],
      current: true
    },
    {
      company: "Bank of Punjab",
      role: "Information Security Intern",
      location: "Lahore, Pakistan",
      period: "Aug 2024 – Sep 2024",
      achievements: [
        "Researched and implemented API security practices, reducing vulnerabilities by 15%.",
        "Gained hands-on experience with cybersecurity testing tools and security protocols."
      ],
      current: false
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/lovable-uploads/10d1cd26-56bc-4d53-adb4-3cc18579ef42.png" 
                alt="Muhammad Mehdy Hasnain" 
                className="w-full h-[500px] object-cover animate-float transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded transform rotate-12 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/50 rounded-full blur-sm animate-bounce"></div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">About me</h2>
              <div className="space-y-4">
                <p className="text-2xl font-medium text-foreground">
                  Computer Science graduate passionate about AI and building scalable solutions.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Briefcase size={16} />
                    <span className="font-semibold">FAST-NUCES</span> • BS Computer Science • GPA: 3.31/4.00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🏆 Dean's List (Fall 2023, Fall 2024 & Spring 2025) • Silver Medal (Fall 2024)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    💼 Freelancing: 2+ Years • Open-Source Contribution: 1+ Year
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate developer 👨‍💻 with expertise in AI, machine learning, and full-stack development. My research in DNA computing and AI for healthcare demonstrates my commitment to innovative solutions. When I'm not coding, I actively contribute to open-source projects 💻 and stay updated with the latest tech advancements. My journey is fueled by a product mindset, continuous learning, and solving real-world problems through technology.
                </p>
              </div>
            </div>

            {/* Research Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <line x1="10" y1="9" x2="8" y2="9"/>
                </svg>
                Research Publication
              </h3>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <Badge className="bg-accent/20 text-accent border-accent/30 mb-2">
                        arXiv Preprint
                      </Badge>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                        Computer Simulation of DNA Computing-Based Boolean Matrix Multiplication
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tariq, M. A., <span className="font-semibold">Hasnain, M. M.</span>, & Junaid, R. (2024)
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">●</span>
                        <span>Built a Python-based simulation framework for DNA computing algorithms to implement Boolean matrix multiplication through molecular operations.</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">●</span>
                        <span>Designed to validate theoretical DNA computation models and serve as a teaching tool for unconventional computing.</span>
                      </li>
                    </ul>
                    
                    <a 
                      href="https://doi.org/10.48550/arXiv.2406.00407" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:underline mt-2"
                    >
                      View Publication →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Work Experience Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Briefcase className="text-primary" size={24} />
                Work Experience
              </h3>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary bg-card/50 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.role}
                            </h4>
                            {exp.current && (
                              <Badge className="bg-primary/20 text-primary border-primary/30">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <TrendingUp className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">●</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
