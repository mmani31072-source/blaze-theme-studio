import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import gamingBg from "@/assets/gaming-bg.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - navigate to dashboard
    if (username && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${gamingBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      <Card className="w-full max-w-md mx-4 gaming-panel border border-primary/20 glow-effect relative z-10">
        <div className="p-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-black text-foreground mb-2">
              FREE FIRE
            </h1>
            <p className="text-muted-foreground">Login to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-input border-border focus:border-primary focus:ring-primary transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border focus:border-primary focus:ring-primary transition-all"
                required
              />
            </div>

            <Button 
              type="submit" 
              variant="gaming"
              className="w-full"
              size="lg"
            >
              LOGIN
            </Button>

            <div className="text-center pt-4">
              <p className="text-muted-foreground text-sm">
                Don't have an account?{" "}
                <Link 
                  to="/register" 
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Register now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
