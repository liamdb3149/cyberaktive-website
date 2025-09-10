import { Card, CardContent } from "@/components/ui/card";
import { Phone, FileText, Users, TrendingDown, Wrench, Moon } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: Phone,
      title: "24/7 Tenant Calls & Emergencies",
      description: "Limited staff coverage means missed calls, frustrated tenants, and lost revenue opportunities after hours."
    },
    {
      icon: FileText,
      title: "Manual Administrative Tasks",
      description: "40+ hours per week consumed by repetitive paperwork, data entry, and administrative overhead."
    },
    {
      icon: Users,
      title: "Staff Turnover Disruption",
      description: "Constant training new employees disrupts operations and damages client relationships."
    },
    {
      icon: TrendingDown,
      title: "Rising Payroll Costs",
      description: "60-70% of expenses go to payroll, squeezing already thin margins down to single digits."
    },
    {
      icon: Wrench,
      title: "Maintenance Coordination Inefficiencies",
      description: "Poor coordination frustrates tenants, delays repairs, and damages property owner relationships."
    },
    {
      icon: Moon,
      title: "Missing After-Hours Inquiries",
      description: "Every missed inquiry is lost revenue while competitors capture leads 24/7."
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-32 section-gradient-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground">
            If you're running a property management company, you know these problems all too well...
          </h2>
          <p className="premium-text-lg text-muted-foreground">
            The daily struggles that are crushing your margins and limiting your growth
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="premium-card-sm" data-testid={`card-problem-${index}`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg mb-3" data-testid={`text-problem-title-${index}`}>
                  {problem.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-problem-description-${index}`}>
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
