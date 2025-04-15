import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const AnniversaryCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the anniversary date (one month from now)
    const anniversaryDate = new Date();
    anniversaryDate.setMonth(anniversaryDate.getMonth() + 1);

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
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className="bg-love-light p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-center text-love-accent mb-4">
        Tiempo para nuestro próximo mes juntos
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