// DARK MODE
const theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// COURSE DATA
const courses = {
  web: {
    title: "Web Development Bootcamp",
    desc: "Learn HTML, CSS, JavaScript & projects",
    video: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  python: {
    title: "Python Programming",
    desc: "Python from beginner to advanced",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc"
  },
  uiux: {
    title: "UI/UX Design",
    desc: "Design modern interfaces",
    video: "https://www.youtube.com/embed/c9Wg6Cb_YlU"
  }
};

// LOAD COURSE
const params = new URLSearchParams(window.location.search);
const courseKey = params.get("course");

if (courseKey && courses[courseKey]) {
  document.getElementById("courseVideo").src = courses[courseKey].video;
  document.getElementById("courseTitle").innerText = courses[courseKey].title;
  document.getElementById("courseDesc").innerText = courses[courseKey].desc;
}

// PROGRESS
let progress = localStorage.getItem("progress") || 0;

function updateProgress() {
  if (progress < 100) {
    progress = Number(progress) + 10;
    localStorage.setItem("progress", progress);
    alert("Lesson Completed!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const fill = document.getElementById("progress-fill");
  const text = document.getElementById("progress-text");

  if (fill && text) {
    fill.style.width = progress + "%";
    text.innerText = progress + "%";
  }
});