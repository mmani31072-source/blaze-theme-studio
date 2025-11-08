import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import gamingBg from "@/assets/gaming-bg.jpg";
import { useNavigate } from "react-router-dom";
import { Trophy, Target, Zap, Users } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const stats = [
    { icon: Trophy, label: "Victories", value: "124", color: "text-primary" },
    { icon: Target, label: "Kills", value: "2,847", color: "text-primary" },
    { icon: Zap, label: "Level", value: "45", color: "text-primary" },
    { icon: Users, label: "Squad", value: "4/4", color: "text-primary" },
  ];

  return (
    <div 
      className="min-h-screen bg-background relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${gamingBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      
      <div className="relative z-10">
        <header className="border-b border-primary/20 backdrop-blur-md bg-gaming-panel/50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-black text-primary">FREE FIRE</h1>
            <Button variant="gaming" onClick={handleLogout}>
              LOGOUT
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-4xl font-black text-foreground mb-2">DASHBOARD</h2>
            <p className="text-muted-foreground">Welcome back, Warrior!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <Card 
                key={stat.label}
                className="gaming-panel border border-primary/20 glow-effect hover:glow-intense transition-all cursor-pointer"
              >
                <div className="p-6 flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="gaming-panel border border-primary/20 glow-effect">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Recent Matches</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((match) => (
                    <div 
                      key={match}
                      className="p-4 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-all"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-foreground">Victory Royale</p>
                          <p className="text-sm text-muted-foreground">Bermuda Map • 12 kills</p>
                        </div>
                        <div className="text-right">
                          <p className="text-primary font-bold">+250 XP</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="gaming-panel border border-primary/20 glow-effect">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="gaming" className="w-full" size="lg">
                    START MATCH
                  </Button>
                  <Button variant="secondary" className="w-full" size="lg">
                    TRAINING GROUND
                  </Button>
                  <Button variant="secondary" className="w-full" size="lg">
                    VIEW INVENTORY
                  </Button>
                  <Button variant="secondary" className="w-full" size="lg">
                    FRIEND LIST
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
