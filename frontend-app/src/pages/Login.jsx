
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InteractiveAvatar from '../Components/InteractiveAvatar';
import api from '../api';

// --- INTERACTIVE AVATAR COMPONENT ---
// Replaces the monkey. Animates based on focus state and types.
// --- END INTERACTIVE AVATAR ---

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/users');
    } catch (err) {
      const actualError = err.response?.data?.messages?.error 
        || err.response?.data?.error 
        || 'Invalid login credentials.';
      setError(actualError);
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center p-4 relative font-sans">
      
      {/* Main Glassmorphism Card */}
      <motion.div 
        className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Interactive SVG Avatar */}
        <div className="flex justify-center mb-8">
          <InteractiveAvatar 
            isPasswordFocused={isPasswordFocused} 
            showPassword={showPassword} 
            emailLength={email.length}
            isEmailFocused={isEmailFocused}
          />
        </div>

        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl font-bold text-white mb-2 tracking-tight flex items-center justify-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          >
            Welcome Back <Sparkles className="w-6 h-6 text-cyan-400" />
          </motion.h2>
          <motion.p 
            className="text-slate-400 text-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            Please enter your details to sign in.
          </motion.p>
        </div>
        
        {/* Error Message with Animation */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="mb-6 overflow-hidden"
            >
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm text-center font-medium backdrop-blur-md">
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
            </div>
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 focus:bg-slate-900/80 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 outline-none shadow-inner"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => { setIsEmailFocused(true); setIsPasswordFocused(false); }}
              onBlur={() => setIsEmailFocused(false)}
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
            </div>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3.5 pl-12 pr-12 text-white placeholder-slate-500 focus:bg-slate-900/80 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 outline-none shadow-inner"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => { setIsPasswordFocused(true); setIsEmailFocused(false); }}
              onBlur={() => setIsPasswordFocused(false)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors focus:outline-none"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </motion.div>

          {/* Action Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="pt-2"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isLoading}
              className="relative w-full overflow-hidden bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl py-3.5 font-semibold tracking-wide shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
              
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.div>
        </form>

      </motion.div>
    </div>
  );
}