
export async function fetchWeeklyData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          thisWeek: [2, 4, 6, 8, 10, 7, 8],
          lastWeek: [1, 3, 5, 7, 9, 6, 7],
        });
      }, 1000);
    });
  }
  