"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
  showSelectedDateInfo?: boolean;
  className?: string;
  maxWidth?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  onDateSelect,
  showSelectedDateInfo = true,
  className = "",
  maxWidth = "max-w-2xl",
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date): CalendarDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days: CalendarDay[] = [];
    const today = new Date();

    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      days.push({
        date: currentDate,
        isCurrentMonth: currentDate.getMonth() === month,
        isToday: currentDate.toDateString() === today.toDateString(),
        isSelected: selectedDate
          ? currentDate.toDateString() === selectedDate.toDateString()
          : false,
      });
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <motion.div
      initial={{ scale: 0.9, y: 10, filter: "blur(10px)" }}
      animate={{ scale: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-white rounded-2xl shadow-2xl p-8 w-full",
        maxWidth,
        className
      )}
    >
      {/* Header */}
      <motion.div
        initial={{ y: -10, filter: "blur(5px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        className="flex items-center justify-between mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.h1
          key={currentDate.getMonth()}
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="text-3xl font-bold text-gray-800"
        >
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <motion.div
            key={day}
            initial={{ opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            className="p-3 text-center font-semibold text-gray-600"
          >
            {day}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        <AnimatePresence mode="wait">
          {days.map((day, index) => (
            <motion.button
              key={`${day.date.toDateString()}-${index}`}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
              transition={{ delay: index * 0.001 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDateClick(day.date)}
              className={cn(
                "p-4 rounded-lg text-center transition-all duration-200",
                day.isCurrentMonth
                  ? "text-gray-800 hover:bg-blue-50"
                  : "text-gray-400 hover:bg-gray-50",
                day.isToday ? "bg-blue-500 !text-white hover:bg-blue-600" : "",
                day.isSelected && !day.isToday
                  ? "bg-blue-200 text-blue-800 hover:bg-blue-200"
                  : ""
              )}
            >
              {day.date.getDate()}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Selected Date Info */}
      {showSelectedDateInfo && selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="mt-8 p-4 bg-gray-50 rounded-lg"
        >
          <p className="text-gray-600">
            Selected:{" "}
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Calendar;
