import React from 'react';
import { motion } from 'framer-motion';

const InteractiveAvatar = ({ isPasswordFocused, showPassword, emailLength, isEmailFocused }) => {
  // Determine the state of the arms
  const armState = isPasswordFocused ? (showPassword ? "peek" : "up") : "down";

  const armVariants = {
    down: { y: 150, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    up: { y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
    peek: { y: 45, transition: { type: 'spring', stiffness: 120, damping: 14 } }
  };

  // --- EYE TRACKING LOGIC ---
  let eyeX = 0;
  let eyeY = 0;

  if (isEmailFocused) {
    // Track typing: move from left (-8) to right (+8) as length increases
    eyeX = Math.min(Math.max((emailLength * 0.8) - 8, -8), 8);
    eyeY = 4; // Look down at the input box
  } else if (isPasswordFocused) {
    // Look up/away slightly when peeking at the password
    eyeX = showPassword ? 4 : 0;
    eyeY = showPassword ? -4 : 0;
  }

  const faceTransition = { type: 'spring', stiffness: 300, damping: 20 };

  return (
    <div className="w-36 h-36 rounded-full bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full transform scale-[1.15] translate-y-2">
        <defs>
          <clipPath id="armMask">
            <circle cx="100" cy="100" r="100"/>
          </clipPath>
        </defs>
        
        {/* Transparent glass circle instead of bright blue */}
        <circle cx="100" cy="100" r="100" fill="rgba(255, 255, 255, 0.05)"/>
        
        {/* Body */}
        <g className="body">
          <path stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" d="M200,158.5c0-20.2-14.8-36.5-35-36.5h-14.9V72.8c0-27.4-21.7-50.4-49.1-50.8c-28-0.5-50.9,22.1-50.9,50v50 H35.8C16,122,0,138,0,157.8L0,213h200L200,158.5z"/>
          <path fill="#e2e8f0" d="M100,156.4c-22.9,0-43,11.1-54.1,27.7c15.6,10,34.2,15.9,54.1,15.9s38.5-5.8,54.1-15.9 C143,167.5,122.9,156.4,100,156.4z"/>
        </g>
        
        {/* Left Ear */}
        <g className="earL">
          <g fill="#e2e8f0" stroke="#475569" strokeWidth="2.5">
            <circle cx="47" cy="83" r="11.5"/>
            <path d="M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <g>
            <rect x="51" y="64" fill="#FFFFFF" width="15" height="35"/>
            <path d="M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9" fill="#fff" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </g>
        
        {/* Right Ear */}
        <g className="earR">
          <g>
            <circle fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" cx="153" cy="83" r="11.5"/>
            <path fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M153.7,78.9 c2.3,0,4.1,1.9,4.1,4.1c0,2.3-1.9,4.1-4.1,4.1"/>
          </g>
          <g>
            <rect x="134" y="64" fill="#FFFFFF" width="15" height="35"/>
            <path fill="#FFFFFF" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M146.6,62.8 c4.9,4.6,8.4,9.4,10.6,14.2c-3.4-0.1-6.8-0.1-10.1,0.1c4,3.7,6.8,7.6,8.2,11.6c-2.1,0-4.2,0-6.3,0.2c2.6,4.1,3.8,8.3,3.7,12.5 c-1.2-0.7-3.4-1.4-5.2-1.9"/>
          </g>
        </g>
        
        {/* Face Elements */}
        <path className="chin" d="M84.1 121.6c2.7 2.9 6.1 5.4 9.8 7.5l.9-4.5c2.9 2.5 6.3 4.8 10.2 6.5 0-1.9-.1-3.9-.2-5.8 3 1.2 6.2 2 9.7 2.5-.3-2.1-.7-4.1-1.2-6.1" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="face" fill="#e2e8f0" d="M134.5,46v35.5c0,21.815-15.446,39.5-34.5,39.5s-34.5-17.685-34.5-39.5V46"/>
        <path className="hair" fill="#FFFFFF" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M81.457,27.929 c1.755-4.084,5.51-8.262,11.253-11.77c0.979,2.565,1.883,5.14,2.712,7.723c3.162-4.265,8.626-8.27,16.272-11.235 c-0.737,3.293-1.588,6.573-2.554,9.837c4.857-2.116,11.049-3.64,18.428-4.156c-2.403,3.23-5.021,6.391-7.852,9.474"/>
        
        {/* Eyebrows, Eyes & Nose (ANIMATED FOR TRACKING) */}
        <motion.g className="eyebrow" animate={{ x: eyeX * 0.6, y: eyeY * 0.6 }} transition={faceTransition}>
          <path fill="#FFFFFF" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M63.56,55.102 c6.243,5.624,13.38,10.614,21.296,14.738c2.071-2.785,4.01-5.626,5.816-8.515c4.537,3.785,9.583,7.263,15.097,10.329 c1.197-3.043,2.287-6.104,3.267-9.179c4.087,2.004,8.427,3.761,12.996,5.226c0.545-3.348,0.986-6.696,1.322-10.037 c4.913-0.481,9.857-1.34,14.787-2.599"/>
        </motion.g>
        
        <motion.g className="eyeL" animate={{ x: eyeX, y: eyeY }} transition={faceTransition}>
          <circle cx="85.5" cy="78.5" r="3.5" fill="#475569"/>
          <circle cx="84" cy="76" r="1" fill="#fff"/>
        </motion.g>
        
        <motion.g className="eyeR" animate={{ x: eyeX, y: eyeY }} transition={faceTransition}>
          <circle cx="114.5" cy="78.5" r="3.5" fill="#475569"/>
          <circle cx="113" cy="76" r="1" fill="#fff"/>
        </motion.g>

        {/* Nose animated slightly more than eyebrows for depth/parallax */}
        <motion.path animate={{ x: eyeX * 0.8, y: eyeY * 0.8 }} transition={faceTransition} d="M97.7 79.9h4.7c1.9 0 3 2.2 1.9 3.7l-2.3 3.3c-.9 1.3-2.9 1.3-3.8 0l-2.3-3.3c-1.3-1.6-.2-3.7 1.8-3.7z" fill="#475569"/>

        {/* Mouth (Static to prevent clipPath issues) */}
        <g className="mouth">
          <defs>
            <path id="mouthMaskPath" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"/>
          </defs>
          <clipPath id="mouthClip">
            <use href="#mouthMaskPath"/>
          </clipPath>
          <path fill="#617E92" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"/>
          <g clipPath="url(#mouthClip)">
            <circle cx="100" cy="107" r="8" fill="#cc4a6c"/>
            <ellipse cx="100" cy="100.5" rx="3" ry="1.5" opacity=".1" fill="#fff"/>
          </g>
          <path clipPath="url(#mouthClip)" style={{ fill: '#FFFFFF' }} d="M106,97h-4c-1.1,0-2-0.9-2-2v-2h8v2C108,96.1,107.1,97,106,97z"/>
          <path fill="none" stroke="#475569" strokeWidth="2.5" strokeLinejoin="round" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"/>
        </g>
        
        {/* Animated Arms Group */}
        <g clipPath="url(#armMask)">
          {/* Left Arm */}
          <motion.g animate={armState} variants={armVariants} initial="down">
            <polygon fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="121.3,98.4 111,59.7 149.8,49.3 169.8,85.4"/>
            <path fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M134.4,53.5l19.3-5.2c2.7-0.7,5.4,0.9,6.1,3.5v0c0.7,2.7-0.9,5.4-3.5,6.1l-10.3,2.8"/>
            <path fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M150.9,59.4l26-7c2.7-0.7,5.4,0.9,6.1,3.5v0c0.7,2.7-0.9,5.4-3.5,6.1l-21.3,5.7"/>
            <path fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M158.3,67.8l23.1-6.2c2.7-0.7,5.4,0.9,6.1,3.5v0c0.7,2.7-0.9,5.4-3.5,6.1l-23.1,6.2"/>
            <path fill="#FFFFFF" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M123.5,97.8 c-41.4,14.9-84.1,30.7-108.2,35.5L1.2,81c33.5-9.9,71.9-16.5,111.9-21.8"/>
            <path fill="#FFFFFF" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M108.5,60.4 c7.7-5.3,14.3-8.4,22.8-13.2c-2.4,5.3-4.7,10.3-6.7,15.1c4.3,0.3,8.4,0.7,12.3,1.3c-4.2,5-8.1,9.6-11.5,13.9 c3.1,1.1,6,2.4,8.7,3.8c-1.4,2.9-2.7,5.8-3.9,8.5c2.5,3.5,4.6,7.2,6.3,11c-4.9-0.8-9-0.7-16.2-2.7"/>
          </motion.g>

          {/* Right Arm */}
          <motion.g animate={armState} variants={armVariants} initial="down">
            <path fill="#e2e8f0" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.5" d="M265.4 97.3l10.4-38.6-38.9-10.5-20 36.1z"/>
            <path fill="#e2e8f0" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.5" d="M252.4 52.4L233 47.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l10.3 2.8M226 76.4l-19.4-5.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l18.3 4.9M228.4 66.7l-23.1-6.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l23.1 6.2M235.8 58.3l-26-7c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l21.3 5.7"/>
            <path fill="#fff" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M263.3 96.7c41.4 14.9 84.1 30.7 108.2 35.5l14-52.3C352 70 313.6 63.5 273.6 58.1"/>
            <path fill="#fff" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M278.2 59.3l-18.6-10 2.5 11.9-10.7 6.5 9.9 8.7-13.9 6.4 9.1 5.9-13.2 9.2 23.1-.9M284.5 100.1c-.4 4 1.8 8.9 6.7 14.8 3.5-1.8 6.7-3.6 9.7-5.5 1.8 4.2 5.1 8.9 10.1 14.1 2.7-2.1 5.1-4.4 7.1-6.8 4.1 3.4 9 7 14.7 11 1.2-3.4 1.8-7 1.7-10.9M314 66.7s5.4-5.7 12.6-7.4c1.7 2.9 3.3 5.7 4.9 8.6 3.8-2.5 9.8-4.4 18.2-5.7.1 3.1.1 6.1 0 9.2 5.5-1 12.5-1.6 20.8-1.9-1.4 3.9-2.5 8.4-2.5 8.4"/>
          </motion.g>
        </g>
      </svg>
    </div>
  );
};

export default InteractiveAvatar;