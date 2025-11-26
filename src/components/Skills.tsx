
import { Card, CardContent } from "@/components/ui/card";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const Skills = () => {
  const experienceCounter = useCountAnimation({ end: 2, suffix: '+' });
  const projectsCounter = useCountAnimation({ end: 1, suffix: '+' });
  const usersCounter = useCountAnimation({ end: 5, suffix: '+' });
  
  // Salesforce and tech stack icons for the cloud
  const iconSlugs = [
    "salesforce",
    "javascript",
    "typescript",
    "html5",
    "css3",
    "react",
    "nodedotjs",
    "amazonaws",
    "github",
    "git",
    "visualstudiocode",
    "docker",
    "postgresql",
    "mysql",
    "postman",
    "jira",
    "figma",
    "stripe",
    "oauth",
    "jwt",
    "xml",
    "json",
    "bootstrap",
    "tailwindcss",
    "heroku",
    "firebase",
    "nginx",
    "linux"
  ];
  
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "C++", icon: "➕" },
        { name: "JavaScript", icon: "🟨" },
        { name: "SQL", icon: "🗃️" },
        { name: "Go", icon: "🔷" },
        { name: "Solidity", icon: "⛓️" }
      ]
    },
    {
      category: "Frameworks & Tools",
      skills: [
        { name: "Flutter", icon: "📱" },
        { name: "Django", icon: "🎯" },
        { name: "Firebase", icon: "🔥" },
        { name: "Git", icon: "🧭" },
        { name: "AWS", icon: "☁️" },
        { name: "Linux", icon: "🐧" },
        { name: "Unity", icon: "🎮" },
        { name: "Web3", icon: "🌐" }
      ]
    },
    {
      category: "Specializations",
      skills: [
        { name: "AI/ML", icon: "🤖" },
        { name: "Product Management", icon: "📊" },
        { name: "Full-Stack Dev", icon: "💻" },
        { name: "Blockchain", icon: "⛓️" },
        { name: "Cloud Computing", icon: "🌩️" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-card relative">
      {/* Geometric decorations */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-accent/30 rounded transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-6 h-6 bg-primary/40 rounded-full animate-ping"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core languages, tools, and interests that power my software development
          </p>
        </div>

        {/* Two-column layout: Skills on left, Icon Cloud on right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Section - Left Side */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="bg-background border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex flex-col items-center text-center p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                        >
                          <span className="text-lg mb-1 group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </span>
                          <span className="text-xs font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Experience Summary */}
            <div className="mt-8">
              <div ref={experienceCounter.ref} className="flex items-center justify-center gap-6 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{experienceCounter.count}</div>
                  <div className="text-sm text-muted-foreground">Years Freelancing</div>
                </div>
                <div className="w-px h-10 bg-border"></div>
                <div ref={projectsCounter.ref} className="text-center">
                  <div className="text-2xl font-bold text-primary">{projectsCounter.count}</div>
                  <div className="text-sm text-muted-foreground">Year Open-Source Contribution</div>
                </div>
                <div className="w-px h-10 bg-border"></div>
                <div ref={usersCounter.ref} className="text-center">
                  <div className="text-2xl font-bold text-primary">{usersCounter.count}</div>
                  <div className="text-sm text-muted-foreground">Core Interests</div>
                </div>
              </div>
            </div>
          </div>

          {/* Icon Cloud Section - Right Side */}
          <div className="flex justify-center items-center">
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm px-8 pb-8 pt-8">
              <IconCloud iconSlugs={iconSlugs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
