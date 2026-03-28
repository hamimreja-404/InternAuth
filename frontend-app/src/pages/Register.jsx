
// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { 
// //   User, Mail, Phone, Lock, School, BookOpen, 
// //   Users, Calendar, UserPlus, ArrowRight, Loader2, ShieldCheck,
// //   Eye, EyeOff
// // } from 'lucide-react';
// // import {registerUser} from '../api';

// // // IMPORT THE AVATAR
// // import InteractiveAvatar from '../Components/InteractiveAvatar';

// // const itemVariants = { 
// //   hidden: { opacity: 0, y: 15 }, 
// //   visible: { opacity: 1, y: 0 } 
// // };

// // // Reusable Input Component
// // const InputField = ({ icon: Icon, label, colSpan = false, rightElement, ...props }) => (
// //   <motion.div variants={itemVariants} className={`relative group flex flex-col gap-1 ${colSpan ? 'sm:col-span-2' : ''}`}>
// //     <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">{label}</label>
// //     <div className="relative">
// //       <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
// //         <Icon className="h-4 w-4 text-slate-500 group-focus-within:text-purple-400 transition-colors duration-300" />
// //       </div>
// //       {props.type === 'select' ? (
// //         <select 
// //           {...props} 
// //           className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-2.5 pl-10 pr-4 text-white focus:bg-slate-900/80 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 outline-none shadow-inner appearance-none"
// //         >
// //           {props.children}
// //         </select>
// //       ) : (
// //         <>
// //           <input 
// //             {...props} 
// //             className={`w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-2.5 pl-10 ${rightElement ? 'pr-12' : 'pr-4'} text-white placeholder-slate-600 focus:bg-slate-900/80 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 outline-none shadow-inner`}
// //           />
// //           {rightElement && (
// //             <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
// //               {rightElement}
// //             </div>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   </motion.div>
// // );

// // export default function Register() {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     first_name: '', last_name: '', email: '', password: '', phone: '',
// //     university_name: '', department: '', gender: '', year_joined: ''
// //   });
  
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // --- NEW: A single state to track which field is focused ---
// //   const [focusedField, setFocusedField] = useState(null);
// //   const [showPassword, setShowPassword] = useState(false);

// //   // Handlers for tracking focus globally across all inputs
// //   const handleFocus = (e) => setFocusedField(e.target.name);
// //   const handleBlur = () => setFocusedField(null);

// //   const containerVariants = {
// //     hidden: { opacity: 0, scale: 0.95 },
// //     visible: { 
// //       opacity: 1, 
// //       scale: 1, 
// //       transition: { staggerChildren: 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
// //     }
// //   };

// //   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setIsLoading(true);
    
// // try {
// //       // Just pass the formData directly to our function!
// //       await registerUser(formData); 
// //       setSuccess(true);
// //       setTimeout(() => navigate('/login'), 2000);
// //     } catch (err) {
// //       // Supabase returns standard JavaScript errors with a simple .message
// //       setError(err.message || 'Registration failed. Please try again.');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-purple-500/30">
// //       <motion.div 
// //         className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] my-8"
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         <motion.div variants={itemVariants} className="text-center mb-8">
          
// //           <div className="flex justify-center mb-6">
// //             <InteractiveAvatar 
// //               // 1. Password peek logic remains exactly the same
// //               isPasswordFocused={focusedField === 'password'} 
// //               showPassword={showPassword} 
              
// //               // 2. Feed the length of WHICHEVER field is currently focused
// //               emailLength={focusedField && formData[focusedField] ? String(formData[focusedField]).length : 0}
              
// //               // 3. Trick the avatar into looking down/tracking if ANY field (except password) is focused
// //               isEmailFocused={!!focusedField && focusedField !== 'password'}
// //             />
// //           </div>

// //           <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin / Teacher Setup</h2>
// //           <p className="text-slate-400 text-sm">Provision a new account for the portal.</p>
// //         </motion.div>
        
// //         {/* Status Messages */}
// //         <AnimatePresence mode="wait">
// //           {/* ... (Error and Success messages remain exactly the same) ... */}
// //           {error && (
// //             <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
// //               <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm text-center font-medium backdrop-blur-md">
// //                 {error}
// //               </div>
// //             </motion.div>
// //           )}
// //           {success && (
// //             <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
// //               <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm text-center font-medium backdrop-blur-md flex items-center justify-center gap-2">
// //                 <Loader2 className="w-4 h-4 animate-spin" /> Your account has been created! Redirecting to login...
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         <form onSubmit={handleRegister} className="space-y-6">
          
// //           {/* === USER PROFILE SECTION === */}
// //           <motion.div variants={itemVariants} className="space-y-4">
// //             <div className="border-b border-white/10 pb-2">
// //               <h4 className="text-sm font-semibold text-indigo-300 flex items-center gap-2 uppercase tracking-wide">
// //                 <UserPlus className="w-4 h-4" /> User Profile
// //               </h4>
// //             </div>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               {/* Added onFocus and onBlur to EVERY input */}
// //               <InputField icon={User} label="First Name" type="text" name="first_name" placeholder="John" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
// //               <InputField icon={User} label="Last Name" type="text" name="last_name" placeholder="Doe" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
// //               <InputField icon={Mail} label="Email Address" type="email" name="email" placeholder="john@university.edu" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
// //               <InputField icon={Phone} label="Phone Number" type="tel" name="phone" placeholder="+1 234 567 8900" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              
// //               <InputField 
// //                 icon={Lock} 
// //                 label="Secure Password" 
// //                 type={showPassword ? "text" : "password"} 
// //                 name="password" 
// //                 placeholder="••••••••" 
// //                 onChange={handleChange} 
// //                 onFocus={handleFocus} 
// //                 onBlur={handleBlur} 
// //                 required 
// //                 minLength="6" 
// //                 colSpan={true} 
// //                 rightElement={
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowPassword(!showPassword)}
// //                     className="text-slate-400 hover:text-white transition-colors focus:outline-none"
// //                   >
// //                     {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
// //                   </button>
// //                 }
// //               />
// //             </div>
// //           </motion.div>

// //           {/* === ACADEMIC DETAILS SECTION === */}
// //           <motion.div variants={itemVariants} className="space-y-4 pt-2">
// //             <div className="border-b border-white/10 pb-2">
// //               <h4 className="text-sm font-semibold text-pink-300 flex items-center gap-2 uppercase tracking-wide">
// //                 <School className="w-4 h-4" /> Academic Details
// //               </h4>
// //             </div>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <InputField icon={School} label="University Name" type="text" name="university_name" placeholder="State University" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
// //               <InputField icon={BookOpen} label="Department" type="text" name="department" placeholder="e.g. Computer Science" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              
// //               <InputField icon={Users} label="Gender" type="select" name="gender" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required>
// //                 <option value="" className="bg-slate-900 text-slate-400">Select Gender...</option>
// //                 <option value="Male" className="bg-slate-900 text-white">Male</option>
// //                 <option value="Female" className="bg-slate-900 text-white">Female</option>
// //                 <option value="Other" className="bg-slate-900 text-white">Other</option>
// //               </InputField>
              
// //               <InputField icon={Calendar} label="Year Joined" type="number" name="year_joined" placeholder="YYYY" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required min="1950" max="2026" />
// //             </div>
// //           </motion.div>

// //           {/* Action Button */}
// //           <motion.div variants={itemVariants} className="pt-4">
// //             <motion.button 
// //               whileHover={{ scale: 1.01 }}
// //               whileTap={{ scale: 0.98 }}
// //               type="submit" 
// //               disabled={isLoading || success}
// //               className="relative w-full overflow-hidden bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl py-3.5 font-semibold tracking-wide shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
// //             >
// //               <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
// //               {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Provision Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
// //             </motion.button>
// //           </motion.div>

// //           <motion.div variants={itemVariants} className="text-center pt-2">
// //             <p className="text-slate-400 text-sm">
// //               Back to portal? <Link to="/login" className="text-white font-semibold hover:text-purple-400 transition-colors">Login here</Link>
// //             </p>
// //           </motion.div>

// //         </form>
// //       </motion.div>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Loader2 } from 'lucide-react';
// import { registerUser } from '../api';

// export default function Register() {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
  
//   // Exact state names matching our API and Trigger
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     first_name: '',
//     last_name: '',
//     mobile: '',          // Needs to match trigger NEW.raw_user_meta_data->>'mobile'
//     university: '',      // Needs to match trigger NEW.raw_user_meta_data->>'university'
//     department: '',
//     gender: 'Female',
//     year_of_join: ''     // Needs to match trigger NEW.raw_user_meta_data->>'year_of_join'
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       // Calls the api.js function we wrote, which passes this directly to Supabase
//       await registerUser(formData);
//       navigate('/users'); // Go straight to users table on success
//     } catch (err) {
//       setError(err.message || 'Registration failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 text-white">
//       <div className="w-full max-w-xl bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
//           Register New Teacher
//         </h2>
        
//         {error && <div className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-center">{error}</div>}

//         <form onSubmit={handleRegister} className="space-y-4">
//           {/* Account Basics */}
//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" name="first_name" placeholder="First Name" required onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500" />
//             <input type="text" name="last_name" placeholder="Last Name" required onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500" />
//           </div>
          
//           <div className="grid grid-cols-2 gap-4">
//             <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500" />
//             <input type="password" name="password" placeholder="Password (Min 6 chars)" required onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500" />
//           </div>

//           <input type="tel" name="mobile" placeholder="Mobile Number" required onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-500" />

//           {/* Teacher Specifics */}
//           <hr className="border-slate-700 my-4"/>
          
//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" name="university" placeholder="University Name" required onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-purple-500" />
//             <input type="text" name="department" placeholder="Department" required onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-purple-500" />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <select name="gender" onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-purple-500 text-slate-300">
//               <option value="Female">Female</option>
//               <option value="Male">Male</option>
//               <option value="Other">Other</option>
//             </select>
//             <input type="number" name="year_of_join" placeholder="Year Joined (e.g. 2024)" required onChange={handleChange} className="w-full bg-black/30 border border-slate-700 rounded-xl p-3 outline-none focus:border-purple-500" />
//           </div>

//           <button type="submit" disabled={isLoading} className="w-full mt-6 bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2">
//             {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Register & Save Data"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { 
  User, Mail, Phone, Lock, School, BookOpen, 
  Users, Calendar, UserPlus, ArrowRight, Loader2,
  Eye, EyeOff
} from 'lucide-react';
import { registerUser } from '../api';

// IMPORT THE AVATAR
import InteractiveAvatar from '../Components/InteractiveAvatar';

const itemVariants = { 
  hidden: { opacity: 0, y: 15 }, 
  visible: { opacity: 1, y: 0 } 
};

// Reusable Input Component
const InputField = ({ icon: Icon, label, colSpan = false, rightElement, ...props }) => (
  <motion.div variants={itemVariants} className={`relative group flex flex-col gap-1 ${colSpan ? 'sm:col-span-2' : ''}`}>
    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
        <Icon className="h-4 w-4 text-slate-500 group-focus-within:text-purple-400 transition-colors duration-300" />
      </div>
      {props.type === 'select' ? (
        <select 
          {...props} 
          className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-2.5 pl-10 pr-4 text-white focus:bg-slate-900/80 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 outline-none shadow-inner appearance-none"
        >
          {props.children}
        </select>
      ) : (
        <>
          <input 
            {...props} 
            className={`w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-2.5 pl-10 ${rightElement ? 'pr-12' : 'pr-4'} text-white placeholder-slate-600 focus:bg-slate-900/80 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 outline-none shadow-inner`}
          />
          {rightElement && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {rightElement}
            </div>
          )}
        </>
      )}
    </div>
  </motion.div>
);

export default function Register() {
  const navigate = useNavigate();
  
  // MATCHED TO SUPABASE: These exact keys must match your working code
  const [formData, setFormData] = useState({
    first_name: '', 
    last_name: '', 
    email: '', 
    password: '', 
    mobile: '',          // Updated from 'phone'
    university: '',      // Updated from 'university_name'
    department: '', 
    gender: '', 
    year_of_join: ''     // Updated from 'year_joined'
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Avatar Interaction State
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // Handlers for tracking focus globally across all inputs
  const handleFocus = (e) => setFocusedField(e.target.name);
  const handleBlur = () => setFocusedField(null);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { staggerChildren: 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Send the perfectly formatted data to Supabase
      await registerUser(formData); 
      setSuccess(true);
      
      // Delay navigation so the user sees the success animation!
      setTimeout(() => navigate('/users'), 2000);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-purple-500/30">
      <motion.div 
        className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] my-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          
          {/* INTERACTIVE AVATAR */}
          <div className="flex justify-center mb-6">
            <InteractiveAvatar 
              isPasswordFocused={focusedField === 'password'} 
              showPassword={showPassword} 
              emailLength={focusedField && formData[focusedField] ? String(formData[focusedField]).length : 0}
              isEmailFocused={!!focusedField && focusedField !== 'password'}
            />
          </div>

          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin / Teacher Setup</h2>
          <p className="text-slate-400 text-sm">Provision a new account for the portal.</p>
        </motion.div>
        
        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm text-center font-medium backdrop-blur-md">
                {error}
              </div>
            </motion.div>
          )}
          {success && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm text-center font-medium backdrop-blur-md flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Account created securely! Forwarding to directory...
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleRegister} className="space-y-6">
          
          {/* === USER PROFILE SECTION === */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="border-b border-white/10 pb-2">
              <h4 className="text-sm font-semibold text-indigo-300 flex items-center gap-2 uppercase tracking-wide">
                <UserPlus className="w-4 h-4" /> User Profile
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField icon={User} label="First Name" type="text" name="first_name" placeholder="John" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              <InputField icon={User} label="Last Name" type="text" name="last_name" placeholder="Doe" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              <InputField icon={Mail} label="Email Address" type="email" name="email" placeholder="john@university.edu" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              {/* Note the name is 'mobile' now! */}
              <InputField icon={Phone} label="Mobile Number" type="tel" name="mobile" placeholder="+1 234 567 8900" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              
              <InputField 
                icon={Lock} 
                label="Secure Password" 
                type={showPassword ? "text" : "password"} 
                name="password" 
                placeholder="••••••••" 
                onChange={handleChange} 
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                required 
                minLength="6" 
                colSpan={true} 
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-white transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
              />
            </div>
          </motion.div>

          {/* === ACADEMIC DETAILS SECTION === */}
          <motion.div variants={itemVariants} className="space-y-4 pt-2">
            <div className="border-b border-white/10 pb-2">
              <h4 className="text-sm font-semibold text-pink-300 flex items-center gap-2 uppercase tracking-wide">
                <School className="w-4 h-4" /> Academic Details
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Note the name is 'university' now! */}
              <InputField icon={School} label="University Name" type="text" name="university" placeholder="State University" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              <InputField icon={BookOpen} label="Department" type="text" name="department" placeholder="e.g. Computer Science" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              
              <InputField icon={Users} label="Gender" type="select" name="gender" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required>
                <option value="" className="bg-slate-900 text-slate-400">Select Gender...</option>
                <option value="Male" className="bg-slate-900 text-white">Male</option>
                <option value="Female" className="bg-slate-900 text-white">Female</option>
                <option value="Other" className="bg-slate-900 text-white">Other</option>
              </InputField>
              
              {/* Note the name is 'year_of_join' now! */}
              <InputField icon={Calendar} label="Year Joined" type="number" name="year_of_join" placeholder="YYYY" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required min="1950" max="2026" />
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isLoading || success}
              className="relative w-full overflow-hidden bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl py-3.5 font-semibold tracking-wide shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Provision Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center pt-2">
            <p className="text-slate-400 text-sm">
              Back to portal? <Link to="/login" className="text-white font-semibold hover:text-purple-400 transition-colors">Login here</Link>
            </p>
          </motion.div>

        </form>
      </motion.div>
    </div>
  );
}