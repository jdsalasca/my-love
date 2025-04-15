import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  t: any;
}

const AnniversaryCountdown: React.FC<CountdownProps> = ({ t }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the anniversary date to May 15
    const now = new Date();
    const currentYear = now.getFullYear();
    const anniversaryDate = new Date(currentYear, 4, 15); // May is month 4 (0-indexed)
    
    // If today's date is past May 15 of this year, set to next year's May 15
    if (now > anniversaryDate) {
      anniversaryDate.setFullYear(currentYear + 1);
    }

    const calculateTimeLeft = () => {
      const difference = +anniversaryDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  return (
    <div className="bg-love-light p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-center text-love-accent mb-4">
        {t.anniversary} {t.together}
      </h3>
      <div className="flex justify-center space-x-4">
        {countdownItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-white rounded-lg p-3 w-16 h-16 flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold text-love-accent">{item.value}</span>
            </div>
            <span className="mt-2 text-love-dark font-medium">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnniversaryCountdown; 