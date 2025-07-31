document.addEventListener("DOMContentLoaded", function () {
  // Dynamic greeting based on time
  const greetingEl = document.querySelector("h2");
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Welcome";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 22) {
    greeting = "Good Evening";
  } else {
    greeting = "Working Late?";
  }

  greetingEl.textContent = `${greeting}, Admin!`;

  // Simulate fetching total employee/project/task data (optional)
  function simulateDashboardStats() {
    const totalEmployees = 132 + Math.floor(Math.random() * 5);
    const activeProjects = 8 + Math.floor(Math.random() * 2);
    const pendingTasks = 21 + Math.floor(Math.random() * 4);

    document.querySelector(".card.text-bg-primary .card-text").textContent = totalEmployees;
    document.querySelector(".card.text-bg-success .card-text").textContent = activeProjects;
    document.querySelector(".card.text-bg-warning .card-text").textContent = pendingTasks;
  }

  simulateDashboardStats();

  // Simulate logging an activity
  function logActivity(message) {
    const activityList = document.querySelector(".list-group");
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = message;
    activityList.prepend(item); // show new activity on top
  }

  // Example: Log fake activity every 10s
  setInterval(() => {
    const messages = [
      "System scan completed.",
      "New leave request submitted.",
      "Payroll updated.",
      "Security policy reviewed.",
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    logActivity(randomMsg);
  }, 10000);
});
document.addEventListener("DOMContentLoaded", function () {
  // Dynamic greeting based on time
  const greetingEl = document.querySelector("h2");
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Welcome";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 22) {
    greeting = "Good Evening";
  } else {
    greeting = "Working Late?";
  }

  greetingEl.textContent = `${greeting}, Admin!`;

  // Simulate fetching total employee/project/task data (optional)
  function simulateDashboardStats() {
    const totalEmployees = 132 + Math.floor(Math.random() * 5);
    const activeProjects = 8 + Math.floor(Math.random() * 2);
    const pendingTasks = 21 + Math.floor(Math.random() * 4);

    document.querySelector(".card.text-bg-primary .card-text").textContent = totalEmployees;
    document.querySelector(".card.text-bg-success .card-text").textContent = activeProjects;
    document.querySelector(".card.text-bg-warning .card-text").textContent = pendingTasks;
  }

  simulateDashboardStats();

  // Simulate logging an activity
  function logActivity(message) {
    const activityList = document.querySelector(".list-group");
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = message;
    activityList.prepend(item); // show new activity on top
  }

  // Example: Log fake activity every 10s
  setInterval(() => {
    const messages = [
      "System scan completed.",
      "New leave request submitted.",
      "Payroll updated.",
      "Security policy reviewed.",
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    logActivity(randomMsg);
  }, 10000);
});
