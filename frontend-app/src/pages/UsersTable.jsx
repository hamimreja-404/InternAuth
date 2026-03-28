// // import { useEffect, useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { useNavigate } from 'react-router-dom';
// // import api from '../api';

// // export default function UsersTable() {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await api.get('/users');
// //         setUsers(response.data);
// //       } catch (error) {
// //         console.error("Failed to fetch users", error);
// //         // If unauthorized (token missing/expired), send them back to login
// //         if (error.response?.status === 401) {
// //           navigate('/login');
// //         }
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchUsers();
// //   }, [navigate]);

// //   // Framer Motion staggered row animation
// //   const tableVariants = {
// //     hidden: { opacity: 0 },
// //     show: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.1 }
// //     }
// //   };

// //   const rowVariants = {
// //     hidden: { opacity: 0, x: -20 },
// //     show: { opacity: 1, x: 0 }
// //   };

// //   return (
// //     <div style={{ width: '100%', padding: '20px' }}>
// //       <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Registered Users Data</h2>
      
// //       <div className="glass-table-container">
// //         {loading ? (
// //           <div className="loading-text">Fetching Secure Data...</div>
// //         ) : (
// //           <motion.table className="glass-table" variants={tableVariants} initial="hidden" animate="show">
// //             <thead>
// //               <tr>
// //                 <th>ID</th>
// //                 <th>First Name</th>
// //                 <th>Last Name</th>
// //                 <th>Email</th>
// //                 <th>Phone Number</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {users.map((user) => (
// //                 <motion.tr key={user.id} variants={rowVariants}>
// //                   <td>{user.id}</td>
// //                   <td>{user.first_name}</td>
// //                   <td>{user.last_name}</td>
// //                   <td>{user.email}</td>
// //                   <td>{user.phone}</td>
// //                 </motion.tr>
// //               ))}
// //             </tbody>
// //           </motion.table>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Users, Mail, Phone, Loader2, Search, UserCircle 
// } from 'lucide-react';

// import {getUsers} from '../api';

// export default function UsersTable() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUsers = async () => {
// try {
//         const data = await getUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error("Failed to fetch users", error);
//         // If unauthorized (token missing/expired), send them back to login
//         if (error.response?.status === 401) {
//           navigate('/login');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, [navigate]);

//   // Filter logic based on Name
//   const filteredUsers = users.filter((user) => {
//     const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
//     return fullName.includes(searchQuery.toLowerCase());
//   });

//   // Framer Motion Variants
//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
//     }
//   };

//   const tableVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   const rowVariants = {
//     hidden: { opacity: 0, y: 15, x: -10 },
//     show: { opacity: 1, y: 0, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
//   };

//   return (
//     <div className="min-h-screenp-4 sm:p-8 relative overflow-hidden font-sans selection:bg-purple-500/30">
      
//       {/* Animated Background Vectors */}


//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <motion.div 
//           variants={containerVariants} 
//           initial="hidden" 
//           animate="visible"
//           className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
//         >
//           <div>
//             <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">

//               Registered Users
//             </h2>
//             <p className="text-slate-400 mt-2 text-sm">Manage and view all registered users.</p>
//           </div>
          
//           <div className="relative w-full sm:w-auto">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//             <input 
//               type="text" 
//               placeholder="Search by name..." 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white placeholder-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all outline-none backdrop-blur-md"
//             />
//           </div>
//         </motion.div>

//         {/* Table Container */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden"
//         >
//           <div className="overflow-x-auto">
//             <div className="min-w-200 p-6">
              
//               <AnimatePresence mode="wait">
//                 {loading ? (
//                   <motion.div 
//                     key="loader"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="flex flex-col items-center justify-center py-20 gap-4"
//                   >
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full"></div>
//                       <Loader2 className="w-10 h-10 text-pink-400 animate-spin relative z-10" />
//                     </div>
//                     <p className="text-slate-400 font-medium animate-pulse">Fetching Secure Data...</p>
//                   </motion.div>
//                 ) : (
//                   <motion.table 
//                     key="table"
//                     variants={tableVariants} 
//                     initial="hidden" 
//                     animate="show"
//                     className="w-full text-left border-collapse"
//                   >
//                     <thead>
//                       <tr>
//                         <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4 w-24">ID</th>
//                         <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">
//                           <div className="flex items-center gap-2"><UserCircle className="w-4 h-4" /> Name</div>
//                         </th>
//                         <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">
//                           <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> Email</div>
//                         </th>
//                         <th className="pb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-white/10 px-4">
//                           <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> Phone Number</div>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-white/5">
//                       {filteredUsers.map((user) => (
//                         <motion.tr 
//                           key={user.id} 
//                           variants={rowVariants}
//                           className="group hover:bg-white/3 transition-colors duration-300"
//                         >
//                           <td className="py-4 px-4 text-sm text-slate-500 font-mono">#{user.id}</td>
//                           <td className="py-4 px-4">
//                             <div className="flex items-center gap-3">
//                               <div className="w-8 h-8 rounded-full bg-linear-to-tr from-indigo-500/20 to-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-300 font-semibold text-xs">
//                                 {user.first_name[0]}{user.last_name[0]}
//                               </div>
//                               <span className="text-white font-medium group-hover:text-pink-300 transition-colors">
//                                 {user.first_name} {user.last_name}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="py-4 px-4 text-sm text-slate-300">{user.email}</td>
//                           <td className="py-4 px-4 text-sm text-slate-400 font-mono">{user.phone}</td>
//                         </motion.tr>
//                       ))}
//                       {filteredUsers.length === 0 && !loading && (
//                         <tr>
//                           <td colSpan="4" className="py-12 text-center text-slate-400">
//                             No users found matching your search.
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </motion.table>
//                 )}
//               </AnimatePresence>
              
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Phone, Mail, User } from 'lucide-react';
import { getUsers } from '../api';

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen p-8 relative font-sans max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Users Directory</h2>
        <p className="text-slate-400">Basic authentication data for all registered accounts.</p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase border-b border-white/10">ID</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase border-b border-white/10">Name</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase border-b border-white/10">Email</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase border-b border-white/10">Mobile Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user) => (
                <motion.tr key={user.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-white/5">
                  <td className="p-4 text-sm text-slate-500 font-mono">{user.id.substring(0, 8)}...</td>
                  <td className="p-4 text-white font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400"/> {user.first_name} {user.last_name}
                  </td>
                  <td className="p-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-slate-400"/> {user.email}</div>
                  </td>
                  {/* THIS IS WHERE THE MOBILE NUMBER SHOWS */}
                  <td className="p-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400"/> {user.mobile || 'No Number Provided'}</div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}