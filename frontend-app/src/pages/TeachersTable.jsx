// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import api from '../api';

// export default function TeachersTable() {
//   const [teachers, setTeachers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await api.get('/teachers');
//         console.log("Fetched teachers data:", response.data); // Debug log
//         setTeachers(response.data);
//       } catch (error) {
//         if (error.response?.status === 401) navigate('/login');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTeachers();
//   }, [navigate]);

//   const tableVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.15 } } // Slightly slower stagger for effect
//   };

//   const rowVariants = {
//     hidden: { opacity: 0, y: 20 }, // Slide up instead of slide right
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <div style={{ width: '100%', padding: '20px' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Teachers Directory</h2>
      
//       <div className="glass-table-container">
//         {loading ? (
//           <div className="loading-text">Fetching Secure Data...</div>
//         ) : (
//           <motion.table className="glass-table" variants={tableVariants} initial="hidden" animate="show">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>University</th>
//                 <th>Department</th>
//                 <th>Gender</th>
//                 <th>Year Joined</th>
//               </tr>
//             </thead>
//             <tbody>
//               {teachers.map((teacher) => (
//                 <motion.tr key={teacher.id} variants={rowVariants}>
//                   <td>{teacher.id}</td>
//                   {/* Using the JOIN data we created in the backend controller */}
//                   <td>{teacher.first_name} {teacher.last_name}</td>
//                   <td>{teacher.email}</td>
//                   <td>{teacher.university_name}</td>
//                   <td>{teacher.department || 'N/A'}</td>
//                   <td>{teacher.gender}</td>
//                   <td>{teacher.year_joined}</td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </motion.table>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Mail, School, BookOpen, Calendar, 
  Loader2, Search, UserCircle 
} from 'lucide-react';

import api from '../api';
export default function TeachersTable() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await api.get('/teachers');
        console.log("Fetched teachers data:", response.data);
        setTeachers(response.data);
      } catch (error) {
        if (error.response?.status === 401) navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, [navigate]);

  // Filter logic based on Name
  const filteredTeachers = teachers.filter((teacher) => {
    const fullName = `${teacher.first_name} ${teacher.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const tableVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 15, x: -10 },
    show: { opacity: 1, y: 0, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 relative overflow-hidden font-sans selection:bg-purple-500/30">


      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">

              Teachers Directory
            </h2>
            <p className="text-slate-400 mt-2 text-sm">Manage and view all registered academic staff.</p>
          </div>
          
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white placeholder-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all outline-none backdrop-blur-md"
            />
          </div>
        </motion.div>

        {/* Table Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <div className="min-w-250 p-6">
              
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div 
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-20 gap-4"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                      <Loader2 className="w-10 h-10 text-purple-400 animate-spin relative z-10" />
                    </div>
                    <p className="text-slate-400 font-medium animate-pulse">Fetching Secure Data...</p>
                  </motion.div>
                ) : (
                  <motion.table 
                    key="table"
                    variants={tableVariants} 
                    initial="hidden" 
                    animate="show"
                    className="w-full text-left border-collapse"
                  >
                    <thead>
                      <tr>
                        <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">ID</th>
                        <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">
                          <div className="flex items-center gap-2"><UserCircle className="w-4 h-4" /> Name</div>
                        </th>
                        <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">
                          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div>
                        </th>
                        <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">
                          <div className="flex items-center gap-2"><School className="w-4 h-4" /> University</div>
                        </th>
                        <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">
                          <div className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> Dept.</div>
                        </th>
                        <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">Gender</th>
                        <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">
                          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Joined</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredTeachers.map((teacher) => (
                        <motion.tr 
                          key={teacher.teacher_id} 
                          variants={rowVariants}
                          className="group hover:bg-white/3 transition-colors duration-300"
                        >
                          <td className="py-4 px-4 text-sm text-slate-500 font-mono">#{teacher.teacher_id}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-linear-to-tr from-indigo-500/20 to-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-semibold text-xs">
                                {teacher.first_name[0]}{teacher.last_name[0]}
                              </div>
                              <span className="text-white font-medium group-hover:text-purple-300 transition-colors">
                                {teacher.first_name} {teacher.last_name}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-slate-300">{teacher.email}</td>
                          <td className="py-4 px-4 text-sm text-slate-300">{teacher.university_name}</td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                              {teacher.department || 'N/A'}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`text-sm ${teacher.gender === 'Female' ? 'text-pink-300' : teacher.gender === 'Male' ? 'text-blue-300' : 'text-slate-300'}`}>
                              {teacher.gender}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-slate-400 font-mono">{teacher.year_joined}</td>
                        </motion.tr>
                      ))}
                      {filteredTeachers.length === 0 && !loading && (
                        <tr>
                          <td colSpan="7" className="py-12 text-center text-slate-400">
                            No teachers found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </motion.table>
                )}
              </AnimatePresence>
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}