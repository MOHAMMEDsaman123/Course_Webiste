import { courses } from "./course_object.js";

export function content(moduleIndex = 0, lectureIndex = 0) {
  courses.forEach((item) => {
    let modulesHtml = item.modules
      .map((mod, modIndex) => {
        return `
    <div class="modules">
      <button class="module-title"><span>➕</span>Module ${modIndex + 1}: ${
          mod.title
        }</button>
    </div>
    <div class="module-content" style="display: none;">
      <ul>
        ${mod.content
          .map(
            (lecture, lecIndex) => `
          <li>
            <button class="li-button" 
              data-module-index="${modIndex}" 
              data-lecture-index="${lecIndex}">
              ${lecture.title || lecture}
            </button>
          </li>`
          )
          .join("")}
      </ul>
    </div>`;
      })
      .join("");

    let contentHtml = (document.querySelector(".js").innerHTML = `
    <style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0f172a;
  font-family: 'Segoe UI', sans-serif;
  color: #e2e8f0;
  line-height: 1.6;
}

.main-content {
  display: flex;
  min-height: 100vh;
}

.left-content {
  flex: 1;
  overflow-y: auto;
  padding: 30px 20px;
  border-right: 1px solid #334155;
  background-color: #0f172a;
}

.left-content::-webkit-scrollbar {
  width: 6px;
}
.left-content::-webkit-scrollbar-thumb {
  background-color: #475569;
  border-radius: 4px;
}

.right-content {
  width: 600px;
  padding: 30px 20px;
  background-color: #1e293b;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 0;
}

.content-heading {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #f1f5f9;
}

.module-title {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: linear-gradient(to right, #7c3aed, #ec4899);
  border: none;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  margin-bottom: 10px;
  transition: transform 0.2s ease, background 0.3s ease;
}

.module-title:hover {
  transform: scale(1.02);
  background: linear-gradient(to right, #ec4899, #7c3aed);
}

.module-content {
  background-color: #1e293b;
  margin-bottom: 20px;
  padding: 12px 20px;
  border-left: 3px solid #6366f1;
  border-radius: 6px;
}

.module-content ul {
  list-style-type: none;
  padding-left: 0;
}

.module-content li {
  margin: 8px 0;
}

.li-button {
  background: none;
  border: none;
  color: #cbd5e1;
  font-size: 15px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  padding: 6px 8px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.li-button:hover {
  background-color: #334155;
}

.course-heading h1 {
  font-size: 24px;
  color: #f8fafc;
  border-bottom: 2px solid #475569;
  padding-bottom: 10px;
}

.course-video iframe {
  width: 100%;
  height: 320px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.duration,
.prerequisitesLink,
.additionalNotesLink {
  font-size: 15px;
  margin-top: 10px;
  padding: 10px;
  background-color: #0f172a;
  border-left: 3px solid #64748b;
  border-radius: 5px;
  color: #cbd5e1;
}
  .go-back button {
    background-color: crimson;
    color: white;
    padding: 8px 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    }

.go-back button:hover {
    background-color: darkred;
    }
.certificate-note {
    font-size: 14px;
    color: #b0b0b0;
    margin-top: 8px;
    text-align: center;
    font-style: italic;
    font-weight: 600;
}

    </style>


    <div class="main-content">
    <div class="go-back"><button>X</button></div>
    <div class="left-content">
    <div class="content-heading">Contents</div>

    ${modulesHtml}

    
    </div>


    <div class="right-content">
    <div class="course-heading">
    <h1>${item.modules[0].title}</h1>
    </div>
    <div class="course-video">
</div>

    </div>

    </div>

    `);
  });

  document.querySelectorAll(".module-title").forEach((button, index) => {
    button.addEventListener("click", () => {
      const moduleContent = document.querySelectorAll(".module-content")[index];
      moduleContent.style.display =
        moduleContent.style.display === "none" ? "block" : "none";
      button.querySelector("span").textContent =
        button.querySelector("span").textContent === "➕" ? "➖" : "➕";
    });
  });

  document.querySelectorAll(".li-button").forEach((button) => {
    button.addEventListener("click", () => {
      const moduleIndex = parseInt(button.dataset.moduleIndex);
      const lectureIndex = parseInt(button.dataset.lectureIndex);

      const selectedModule = courses.find(
        (course) => course.modules[moduleIndex]
      )?.modules[moduleIndex];

      const selectedLecture = selectedModule.content[lectureIndex];
      const videoLink =
        selectedLecture.resources.find((r) => r.type === "Video")?.link || "";

      const durationLink = selectedLecture.duration;
      const prerequisitesLink = selectedLecture.prerequisites;
      const additionalNotesLink = selectedLecture.additional_notes;

      document.querySelector(".course-heading h1").innerText =
        selectedLecture.title;
      const videoContainer = document.querySelector(".course-video");
      videoContainer.innerHTML = `
      <iframe width="100%" height="315"
        src="${videoLink}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div class="duration">
      Duration: ${durationLink}
      </div>
      <div class="prerequisitesLink">prerequisites: ${prerequisitesLink}
      </div>
      <div class="additionalNotesLink">additionalNotes: ${additionalNotesLink}</div>


    `;
    });
  });

  document.querySelector(".go-back").addEventListener("click", () => {
    window.location.reload();
  });
}
