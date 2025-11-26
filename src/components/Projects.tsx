import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Database, FileText, TrendingUp, Zap } from "lucide-react";

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Elder Ring – Real-Time Monitoring System (FYP)",
      description: "Designed and implemented an AI-based elderly care system featuring real-time fall detection, custom gesture recognition, and distressing sound alerts. Automated monitoring reduced caregiver workload by 40%, improving operational efficiency while maintaining high care standards.",
      tags: ["Flutter", "Firebase", "Python", "YOLOv8", "AI/ML"],
      icon: Users,
      metrics: "40% Less Caregiver Workload",
      timeline: "2024-2025",
      category: "AI Monitoring"
    },
    {
      id: 2,
      title: "MoveOn – Vehicle Provisioning System",
      description: "Designed and deployed a cross-platform fleet management application for Faizan Movers, enabling real-time bookings for tours and wedding transport with 100+ registered users (40+ MAU). Engineered scalable backend architecture using Firebase Auth, Firestore, and Cloud Functions, reducing booking processing time by 60%.",
      tags: ["Flutter", "Firebase", "Firestore", "Cloud Functions"],
      icon: TrendingUp,
      metrics: "100+ Users • 40+ MAU",
      timeline: "2024",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "HWCS – Handwriting Classification System",
      description: "Developed a handwriting recognition model by training on a custom dataset, leveraging Grey Scale Co-occurrence Matrix (GSCM) for feature extraction. Achieved 93% classification accuracy, outperforming baseline methods by 30% in error reduction. Deployed the optimized model into a Django web application.",
      tags: ["Python", "KNN", "GSCM", "Django", "ML"],
      icon: FileText,
      metrics: "93% Accuracy",
      timeline: "2024",
      category: "ML/AI"
    },
    {
      id: 4,
      title: "BaatCheet – Decentralized Chat App",
      description: "Developed anonymous blockchain-based decentralized chat application with MetaMask login integration. Built using Go for backend services and Solidity for smart contracts, ensuring secure and private communication.",
      tags: ["Go", "Solidity", "Web3", "Blockchain"],
      icon: Zap,
      metrics: "Blockchain-Based",
      timeline: "2024",
      category: "Web3"
    },
    {
      id: 5,
      title: "Janwar – Pet Adoption Platform",
      description: "Built a user-friendly e-commerce application for pet adoption and accessories. Included secure posting, real-time chat, and payment flows using the MERN stack.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      icon: Database,
      metrics: "Full-Stack MERN",
      timeline: "2023",
      category: "E-Commerce"
    },
    {
      id: 6,
      title: "LibraLinks – Personalized Content Chatbot",
      description: "Built during MLH Global Hack Week 2023 with a team member. Developed a WhatsApp chatbot delivering personalized download links for over 100 books, movies, and anime.",
      tags: ["Python", "Node.js", "WhatsApp Bot"],
      icon: Zap,
      metrics: "100+ Content Links",
      timeline: "2023",
      category: "Chatbot"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-muted/50"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of software projects that deliver real value through thoughtful engineering and user-centric design
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-300"></div>
          {/* Timeline Line - Mobile */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300"></div>

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={project.id} className="relative">
                  {/* Timeline dot - Desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  {/* Timeline dot - Mobile */}
                  <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg z-10"></div>
                  
                  {/* Project Card - Desktop */}
                  <div className={`hidden md:flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors flex-shrink-0">
                              <IconComponent className="text-primary" size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  {project.category}
                                </Badge>
                                <span className="text-sm font-semibold text-primary">
                                  {project.timeline}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-primary">
                              {project.metrics}
                            </span>
                            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Project Card - Mobile */}
                  <div className="md:hidden pl-10 pr-4">
                    <Card className="group hover:shadow-xl transition-all duration-300 bg-card border-border">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors flex-shrink-0">
                            <IconComponent className="text-primary" size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <Badge variant="secondary" className="text-xs">
                                {project.category}
                              </Badge>
                              <span className="text-xs font-semibold text-primary">
                                {project.timeline}
                              </span>
                            </div>
                            <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-primary">
                            {project.metrics}
                          </span>
                          <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                6+
              </div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                100+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                93%
              </div>
              <div className="text-sm text-muted-foreground">ML Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
