
import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Database, CreditCard, FileText, TrendingUp, Zap } from "lucide-react";
import { useCountAnimation } from "@/hooks/useCountAnimation";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Count animations for metrics - fix the hook usage
  const recordsMigrated = useCountAnimation({ end: 200, duration: 2000 });
  const apisDeveloped = useCountAnimation({ end: 60, duration: 2000 });

  const projects = [
    {
      id: 1,
      title: "Elder Ring (Real Time Monitoring System for Elderly People)",
      description: "Developed an AI-based elderly monitoring system using YOLOv8 for gesture and posture recognition. Reduced caregiver workload by 40% through autonomous monitoring and real-time emergency alerts. Enhanced elderly safety with fall detection, custom gestures, sound-enabled commands, and a user-friendly Flutter interface.",
      tags: ["Flutter", "Firebase", "Python", "YOLOv8", "Real-time Alerts"],
      icon: Users,
      metrics: "40% Less Caregiver Workload",
      timeline: "",
      category: "AI Monitoring"
    },
    {
      id: 2,
      title: "MoveOn (Vehicle Provisioning Application)",
      description: "Designed and deployed a cross-platform app for Faizan Movers, streamlining real-time bookings for tours and wedding transport. Implemented a secure backend with Firebase Auth, Firestore, and Cloud Functions.",
      tags: ["Flutter", "Firebase Auth", "Firestore", "Cloud Functions"],
      icon: TrendingUp,
      metrics: "100+ Users • 40+ MAU",
      timeline: "",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "HWCS (Handwriting Classification System)",
      description: "Achieved 93% accuracy in handwriting classification using KNN and GSCM. Reduced classification errors by 30% through optimized preprocessing, scaling, and model training. Integrated into a Django-based application.",
      tags: ["Python", "KNN", "GSCM", "Django"],
      icon: FileText,
      metrics: "93% Accuracy",
      timeline: "",
      category: "ML/AI"
    },
    {
      id: 4,
      title: "Janwar (Pet Adoption E-Commerce Platform)",
      description: "Built a pet adoption and sales platform with features for buying pets, adopting pets, and selling accessories.",
      tags: ["MongoDB Atlas", "Express", "React", "Node.js"],
      icon: Database,
      metrics: "Full-Stack MERN",
      timeline: "",
      category: "E-Commerce"
    },
    {
      id: 5,
      title: "Libra Links (Personalized Content Chatbot — GHW 2023)",
      description: "WhatsApp chatbot delivering personalized download links for over 100 books, movies, and anime. Developed during MLH Global Hack Week 2023.",
      tags: ["Python", "Node.js", "WhatsApp Bot"],
      icon: Zap,
      metrics: "100+ Personalized Links",
      timeline: "2023",
      category: "Chatbot"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
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
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-300"></div>

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={project.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Project Card */}
                  <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                              <IconComponent className="text-primary" size={24} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
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
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md mx-auto">
            <div ref={recordsMigrated.ref} className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                {recordsMigrated.count}K+
              </div>
              <div className="text-sm text-muted-foreground">Records Migrated</div>
            </div>
            <div ref={apisDeveloped.ref} className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                {apisDeveloped.count}+
              </div>
              <div className="text-sm text-muted-foreground">APIs Developed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
