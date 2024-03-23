function secondsInCurrentMonth() {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  
    const secondsInDay = 24 * 60 * 60; 
  
    const secondsInMonth = daysInMonth * secondsInDay;
    return secondsInMonth;
  }
  
  const secondsInThisMonth = secondsInCurrentMonth();
  console.log(`Seconds in the current month: ${secondsInThisMonth}`);