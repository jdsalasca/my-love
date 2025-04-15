import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeCount {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountupProps {
  t: any;
}

const AnniversaryCountdown: React.FC<CountupProps> = ({ t }) => {
  const [timeCount, setTimeCount] = useState<TimeCount>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the relationship start date to March 15, 2024
    const startDate = new Date(2025, 2, 15); // March is month 2 (0-indexed)
    
    const calculateTimeElapsed = () => {
      const now = new Date();
      const difference = +now - +startDate;
      
      if (difference > 0) {
        // Calculate full months since March 15
        const startYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();
        const startDay = startDate.getDate();
        
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const currentDay = now.getDate();
        
        let monthsElapsed = (currentYear - startYear) * 12 + (currentMonth - startMonth);
        // Adjust if we haven't reached the same day of the month yet
        if (currentDay < startDay) {
          monthsElapsed--;
        }
        
        // Calculate remaining time parts
        const msInSecond = 1000;
        const msInMinute = msInSecond * 60;
        const msInHour = msInMinute * 60;
        const msInDay = msInHour * 24;
        
        setTimeCount({
          months: monthsElapsed,
          days: Math.floor(difference / msInDay),
          hours: Math.floor((difference / msInHour) % 24),
          minutes: Math.floor((difference / msInMinute) % 60),
          seconds: Math.floor((difference / msInSecond) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeElapsed, 1000);
    calculateTimeElapsed();

    return () => clearInterval(timer);
  }, []);

  const countupItems = [
    { label: "Meses juntos", value: timeCount.months },
    { label: t.days, value: timeCount.days },
    { label: t.hours, value: timeCount.hours },
    { label: t.minutes, value: timeCount.minutes },
    { label: t.seconds, value: timeCount.seconds },
  ];

  return (
    <div className="bg-love-light p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-center text-love-accent mb-4">
        {t.anniversary} {t.together}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {countupItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-white rounded-lg p-3 w-20 h-16 flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold text-love-accent">{item.value}</span>
            </div>
            <span className="mt-2 text-love-dark font-medium text-center">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnniversaryCountdown; 