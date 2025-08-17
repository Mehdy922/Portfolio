
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Format message for WhatsApp
    const whatsappMessage = `Hi Muhammad Mehdy Hasnain! 👋

*New Project Inquiry*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Project Type:* ${formData.project || 'Not specified'}

*Message:*
${formData.message}

Looking forward to discussing this project with you!`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/923178453636?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    toast({
      title: "Message Prepared!",
      description: "Opening WhatsApp to send your message to Muhammad Mehdy Hasnain.",
    });

    // Clear form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-background relative">
      {/* Geometric decorations */}
      <div className="geometric-decoration top-16 right-16 opacity-30"></div>
      <div className="geometric-decoration bottom-16 left-16 w-8 h-8 opacity-20"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get a quote</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A software engineer with a critical product mindset. Passionate about spotting problems from people around me and building solutions that make their lives easier.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project">Project Type</Label>
                  <Input 
                    id="project" 
                    placeholder="e.g., Mobile App, Web App, ML/AI, Cloud" 
                    value={formData.project}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project requirements..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full glow-effect">
                  Send via WhatsApp
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
                <p className="text-muted-foreground mb-8">
                  Freelancing: 2+ Years • Open-Source Contribution: 1+ Year. Aspiring software engineer passionate about building scalable solutions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:mehdy922@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        mehdy922@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+923178453636" className="text-muted-foreground hover:text-primary transition-colors">
                        +92 3178453636
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">
                        Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-8 p-4 bg-background/80 rounded-lg">
                  <p className="font-semibold text-primary mb-2">Current Availability</p>
                  <p className="text-sm text-muted-foreground">
                    Available for new projects • Response within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">2+ Years</div>
                  <div className="text-sm text-muted-foreground">Freelancing</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">1+ Year</div>
                  <div className="text-sm text-muted-foreground">Open-Source Contribution</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
