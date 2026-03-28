// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Hexagon, LogOut, LogIn, UserPlus } from 'lucide-react';
// import { supabase } from '../api';
// export default function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const location = useLocation(); 
//   const navigate = useNavigate();

// useEffect(() => {
//     // 1. Check current session on load
//     const checkAuth = async () => {
//       const { data: { session } } = await supabase.auth.getSession();
//       setIsAuthenticated(!!session);
//     };
//     checkAuth();

//     // 2. Listen for login/logout events automatically
//     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
//       setIsAuthenticated(!!session);
//     });

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   const handleLogout = async () => {
//     // Tell Supabase to destroy the secure session
//     await supabase.auth.signOut(); 
//     setIsAuthenticated(false);
//     navigate('/login');
//   };

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//       className="fixed top-4 left-4 right-4 sm:left-8 sm:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-7xl z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
//     >
//       {/* Brand / Logo */}
//       <Link to="/" className="flex items-center gap-3 cursor-pointer group">
//         <div className="p-2 bg-linear-to-tr from-indigo-500 to-pink-500 rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.3)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300">
//           <Hexagon className="w-5 h-5 text-white" />
//         </div>
//         <span className="text-white font-bold tracking-wide text-lg hidden sm:block">AdminSpace</span>
//       </Link>

//       {/* Dynamic Navigation Links */}
//       <div className="hidden md:flex items-center gap-2 bg-white/3 px-2 py-1.5 rounded-full border border-white/5">
//         {isAuthenticated ? (
//           <>
//             <Link 
//               to="/users" 
//               className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === '/users' ? 'bg-white/10 text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
//             >
//               Users
//             </Link>
//             <Link 
//               to="/teachers" 
//               className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === '/teachers' ? 'bg-white/10 text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
//             >
//               Teachers
//             </Link>
//           </>
//         ) : (
//           <span className="px-4 py-1.5 text-sm font-medium text-slate-500 italic">
//             Please log in to access directory
//           </span>
//         )}
//       </div>

//       {/* Dynamic Actions & Profile */}
//       <div className="flex items-center gap-4">
//         {isAuthenticated ? (
//           <>
//             {/* Authenticated User Profile */}
//             <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-white/10">
//               <div className="flex flex-col text-right">

             
//               </div>
//               <div className="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500/20 to-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-300 font-bold shadow-inner">
//                 <img src="https://images.unsplash.com/photo-1772371272179-3ecc656fc677?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D" alt="Image" className='rounded-full'/>
//               </div>
//             </div>
            
//             {/* Logout Button */}
//             <button 
//               onClick={handleLogout}
//               className="p-2.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 rounded-xl group relative overflow-hidden"
//               title="Logout"
//             >
//               <LogOut className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
//             </button>
//           </>
//         ) : (
//           <>
//             {/* Unauthenticated Actions */}
//             <Link 
//               to="/login"
//               className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
//             >
//               <LogIn className="w-4 h-4 text-slate-300" />
//               <span className="hidden sm:inline">Login</span>
//             </Link>
            
//             <Link 
//               to="/register"
//               className="relative overflow-hidden bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl px-4 py-2 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center gap-2 group"
//             >
//               <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
//               <UserPlus className="w-4 h-4" />
//               <span className="hidden sm:inline">Register</span>
//             </Link>
//           </>
//         )}
//       </div>
//     </motion.nav>
//   );
// }


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Hexagon, LogOut, LogIn, UserPlus } from 'lucide-react';

// Import Supabase directly to check auth state
import { supabase } from '../api'; 

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate();

  // Listen to Supabase Auth State
  useEffect(() => {
    // Check initial session
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    checkAuth();

    // Set up a listener for login/logout events
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut(); // Tell Supabase to destroy session
    setIsAuthenticated(false);
    navigate('/login'); 
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-4 right-4 sm:left-8 sm:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-7xl z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
    >
      {/* Brand / Logo */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer group">
        <div className="p-2 bg-linear-to-tr from-indigo-500 to-pink-500 rounded-xl">
          <Hexagon className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-bold tracking-wide text-lg hidden sm:block">AdminSpace</span>
      </Link>

      {/* Dynamic Navigation Links */}
      <div className="hidden md:flex items-center gap-2 bg-white/3 px-2 py-1.5 rounded-full border border-white/5">
        {isAuthenticated ? (
          <>
            <Link to="/users" className={`px-4 py-1.5 rounded-full text-sm font-medium ${location.pathname === '/users' ? 'bg-white/10 text-pink-400' : 'text-slate-400 hover:text-white'}`}>
              Users
            </Link>
            <Link to="/teachers" className={`px-4 py-1.5 rounded-full text-sm font-medium ${location.pathname === '/teachers' ? 'bg-white/10 text-pink-400' : 'text-slate-400 hover:text-white'}`}>
              Teachers
            </Link>
          </>
        ) : (
          <span className="px-4 py-1.5 text-sm font-medium text-slate-500 italic">
            Please log in to access directory
          </span>
        )}
      </div>

      {/* Dynamic Actions */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="p-2.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
            <LogOut className="w-5 h-5" />
          </button>
        ) : (
          <>
            <Link to="/login" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10">
              <LogIn className="w-4 h-4 text-slate-300" />
              <span className="hidden sm:inline">Login</span>
            </Link>
            <Link to="/register" className="bg-linear-to-r from-indigo-500 to-pink-500 text-white rounded-xl px-4 py-2 text-sm font-semibold flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Register</span>
            </Link>
          </>
        )}
      </div>
    </motion.nav>
  );
}