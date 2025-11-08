import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import gamingBg from "@/assets/gaming-bg.jpg";
import { toast } from "sonner";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    if (username && email && password) {
      toast.success("Registration successful!");
      setTimeout(() => navigate("/"), 1000);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-8"
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
              REGISTER
            </h1>
            <p className="text-muted-foreground">Create your account</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-input border-border focus:border-primary focus:ring-primary transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border focus:border-primary focus:ring-primary transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              REGISTER
            </Button>

            <div className="text-center pt-4">
              <p className="text-muted-foreground text-sm">
                Already have an account?{" "}
                <Link 
                  to="/" 
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
