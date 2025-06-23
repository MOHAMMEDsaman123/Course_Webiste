

import { content } from "./content_.js";
import { courses } from "./course_object.js";
export function details(courseId) {


   
  let matchingProduct;

  courses.forEach((course) => {
    if (course.id === courseId) {
      matchingProduct = course;
    }
  });

  if (!courseId) return alert("no course in the list");

  let moduleContent1;
  let moduleContent = courses
  .map((item) => {
    moduleContent1=item.modules
      .map((module, index) => {
        return `
          <div class="modules">
            <button class="module-title"><span>➕</span>
              Module ${index + 1}: ${module.title}
            </button>
          </div>
          <div class="module-content">
            <ul>
              ${module.content
                .map((lecture, lectureIndex) => {
                  return `<li>
                    <button class="li-button" 
                      data-module-index="${index}" 
                      data-lecture-index="${lectureIndex}">
                      ${lecture.title}
                    </button>
                  </li>`;
                })
                .join("")}
            </ul>
          </div>
        `;
      })
      .join(""); 
  })
  .join(""); 

  

  let details = (document.querySelector(".js").innerHTML = `

  <style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #121212;
  color: #e0e0e0;
}

.main {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 24px;
  background-color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}


.left-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.topic-name {
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
}

.about {
  font-size: 20px;
  font-weight: bold;
   background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.course-details {
  background-color: #2a2a2a;
  padding: 16px;
  border-radius: 8px;
  line-height: 1.6;
  color: #cccccc;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
}


.course-meta {
  display: flex;
  gap: 30px;
  flex-wrap: wrap; 
  font-size: 14px;
  color: #bbbbbb;
  margin-top: 10px;
  font-weight: bold;
  
}
.course-meta > div {
  white-space: nowrap;
}


.block {
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  font-family: 'Segoe UI', sans-serif;
}

.box-div h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
   background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

}

.bock-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
}

.bock-box > div {
  flex: 1 1 250px;
  background-color: #2a2a2a;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #333;
  transition: transform 0.3s ease, background 0.3s ease;
}

.bock-box > div:hover {
  transform: translateY(-5px);
  background-color: #333333;
}

.bock-box > div p {
  font-size: 0.95rem;
  color: #cccccc;
  margin-top: 0.5rem;
}



.course-cir {
  font-size: 20px;
  font-weight: 600;
  color: #90caf9;
  margin-top: 20px;
  border-top: 1px solid #444;
  padding-top: 16px;
}
.course-cir h1 {
    
    font-weight: 600;
    background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
    flex: 1;

}
.course-cir > .course-lectures {
  display:flex;
  justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
    color: #b0b0b0;

    gap: 10px;
    font-weight: 600;

  font-size: 14px;
  color: #b0b0b0;
}
.drop-down-list {
  margin-top: 10px;
}
.course-list ul {
  list-style-type: none;
  padding-left: 0;
}
.course-list li {
  padding: 10px 16px;
  background: #262626;
  border-bottom: 1px solid #333;
  position: relative;
}
.course-list li::before {
  content: "▶";
  position: absolute;
  left: 8px;
  color: #777;
  font-size: 12px;
}

.course-req > h1{
 background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.get-certified {
 background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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


.course-learn ul,
.course-req ul {
  padding-left: 20px;
 
}
.course-learn li,
.course-req li {
  margin-bottom: 10px;
  color: #ccc;
}
.line{
    border-top: 1px solid #444;
}

.faq-heading {
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
   background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.faq-question {
  margin-top: 12px;
  font-weight: 600;
}
.faq-answer {
  color: #bcbcbc;
  margin-top: 4px;
}


.Course-instructor {
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
.instructor-details-box {
  display: flex;
  gap: 20px;
  background: #252525;
  padding: 16px;
  border-radius: 8px;
}
.instructor-name {
  font-size: 18px;
  font-weight: bold;
}
.instructor-about, .instructor-rating, .instructor-experience {
  font-size: 14px;
  color: #bcbcbc;
  line-spacing: 1.5;
}
.read-more a {
  color: #64b5f6;
  text-decoration: none;
}
.read-more a:hover {
  text-decoration: underline;
}
.social-connect img {
  width: 28px;
  margin-right: 10px;
}
.certificate-details{
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    }

.certificate-image {
    text-align: center;
    margin-bottom: 16px;
    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

}
.certificate-text {
    font-size: 16px;
    color: #cccccc;
    margin-bottom: 12px;
    line-height: 1.5;
    text-align: center;
    font-weight: bolder;

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

.certificate-description{
font-size: 16px;
    color: #cccccc;
    margin-bottom: 12px;
    line-height: 1.5;
    text-align: center;
    font-weight: bolder;
}
.freq{
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    margin-top: 20px;


}
.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  position: sticky;
    top: 20px;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    padding-right: 20px;

}
.course-description {
 background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 15px;

}
.course-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}
.course-price, .course-created {
  font-size: 16px;
  font-weight: 600;
}
.enroll-now button {
   background: linear-gradient(to right,#ED5EF2, #4E0CD1);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
  width: 100%;
  
}
.enroll-now button:hover {
    background: linear-gradient(to right, #4E0CD1, #ED5EF2);
}

.course-details ul {
  list-style: none;
  padding-left: 16px;
}
.course-details li {
  margin-bottom: 8px;
  color: #cccccc;
}


.course-share {
  background: #1f1f1f;
  padding: 16px;
  border-radius: 8px;
}
.share-heading {
  font-weight: 600;
  margin-bottom: 10px;
}
.share-button {
  background-color: transparent;
  color: #90caf9;
 margin-right: 10px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s;
   background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.share-button:hover {
  background-color: #444;
}
.course-learn > h1{
 background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.modules {
  margin-bottom: 10px;
}

.module-title {
  width: 100%;
  text-align: left;
  padding: 15px 20px;
  background: linear-gradient(to right, #ED5EF2, #4E0CD1);
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  position: relative;
}

.module-title:hover {
   background: linear-gradient(to right, #4E0CD1, #ED5EF2);
}

.module-content {
  background-color: #1f1f1f;
  padding: 15px 25px;
  margin-top: 5px;
  border-left: 3px solid #5a67d8;
  border-radius: 4px;
  display: none; 
  animation: fadeIn 0.3s ease;
}

.module-content ul {
  list-style-type: disc;
  padding-left: 20px;
}

.module-content li {
  padding: 6px 0;
  color: #dddddd;
  font-size: 16px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


  </style>
    <div class="main">
    <div class="go-back"><button>X</button></div>
    <div class="left-content">
    <div class="topic-name">${matchingProduct.name}</div>
    <div class="about">About The Course</div>
    <div class="course-details">This is a complete SQL Course that covers SQL from beginner to advanced level. It includes recorded videos and course materials from the recently concluded SQL Bootcamp.
    Become a Python Programmer and learn one of the employer's most requested skills of 2025!
    This is the most comprehensive, yet straightforward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    With over 100 lectures and more than 21 hours of video, this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for pieces of information, working with image files, and much more!
    This course will practically teach you Python, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    </div>

    <div class="course-meta">
    <div class="ratings">Rating: ${matchingProduct.rating}</div>
    <div class="enrolled">👥 ${matchingProduct.enrolled} Enrolled</div>
    <div class="last-updated">${matchingProduct.last_updated}</div>
    <div class="course-lang">Language: English</div>
    </div>
    
    <div class="block">
    <div class="box-div">
    <h1>Free Lifetime Access</h1>
    </div>
    <div class="bock-box">
    <div class="no-experience">No Experience Needed<p>Start from scratch and build up</p></div>
     <div class="flexible-schedule">Flexible Schedule<p>Learn at your own pace</p></div>
    <div class="quality-content">Quality Content<p>Just quality education</p></div>
    <div class="quality-content">Easily Accessible<p>Access from anywhere, anytime</p></div>

    </div>
    </div>

   
    <div class="course-cir">
    <div class="course-lectures"><h1>Course Curriculum</h1>Lectures: 70 | Duration: 21 Hours </div>
    

    <div class="drop-down-list">

    ${moduleContent1}

    </div>
    </div>
    <div class="line"></div>

    <div class="course-learn"><h1>What you will learn</h1>
    <ul>
    <li>You will learn how to leverage the power of Python to solve tasks.</li>
    <li>You will build games and programs that use Python libraries.</li>
    <li>You will be able to use Python for your work problems or personal projects.</li>
    <li>Learn to use Python professionally, learning both Python 2 and Python 3!</li>
    <li>Create games with Python, like Tic Tac Toe and Blackjack!</li>
    <li>Learn to use Python for data analysis and visualization.</li>
    <li>Learn advanced Python features, like the collections module, and how to work with timestamps!</li>
    <li>Learn to use Object Oriented Programming with classes!</li>
    <li>Understand complex topics, like decorators.</li>
    <li>Learn to use Python for working with files, like reading and writing CSV files.</li>
    <li>Understand how to use both the Jupyter Notebook and create .py files</li>
    <li>Get an understanding of how to create GUIs in the Jupyter Notebook system!</li>
    </ul>
    </div>

    <div class="course-req"><h1>System Requirements</h1>
    <ul>
    <li>OS: Windows / MAC</li>
    <li>Memory: 4 GB or more (Recommended)</li>
    <li>Processor: 1 GHz or faster (Recommended)</li>
    <li>Display: 1440*900 or larger display resolution (Recommended)</li>
    <li>Web: Latest version of Safari, Chrome, Edge, or Firefox</li>
    <li>Note: Excel on MacBook has some limitations on features like Power Pivot, DAX, and Power Query. Due to this limitation, you might not be able to replicate all operations that are taught in the course.</li>
    </ul>
    </div>

    <div class="line"> </div>


    <div class="Course-instructor">Course Instructors</div>
    <div class="instructor-details-box">
    <div class="left-instructor">
    <img src="${matchingProduct.instructor_img}" width="100px" height="100px"  style="border-radius:30px">
    </div>
    <div class="right-instructor">
    <div class="instructor-name">Thoufiq Mohammed</div>
    <div class="instructor-about">Thoufiq is a seasoned educator with over 5 years of experience in teaching SQL and Python. He has helped thousands of students master these languages through his engaging and practical teaching style.</div>
    <div class="instructor-rating">Rating: ⭐⭐⭐⭐⭐</div>
    <div class="instructor-experience">Experience: 5+ years in SQL and Python education</div>
    <div class="read-more">
    <a href="#">Read More</a>
    </div>
    <div class="social-connect">
    <a href="https://www.youtube.com/@techTFQ" target="_blank"><img src="https://img.icons8.com/color/48/000000/youtube-play.png"/></a>
    <a href="https://www.linkedin.com/in/thoufiq-mohammed-123456789/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
    </div>
    </div>
    </div>


    <div class="certificate-details">
    <h1 class="get-certified">Get Certified</h1>
    <div class="course-certificate">
    <div class="certificate-image">
    <img src="${matchingProduct.certificate_img}" width="200" height="100">
    </div>
    
    <div class="certificate-text">Get a certificate of completion after finishing the course.</div>
    <div class="certificate-description">You receive a Certificate of Completion signed and addressed personally by me, your guide and mentor. - Thoufiq Mohammed</div>
    <div class="certificate-note">Note: Add and share this certificate with your Resume/CV or on your LinkedIn profile.</div>
    </div>
    
    
    </div>

    <div class="line"></div>

    <div class="freq">
    <div class="faq-heading"><h1>Frequently Asked Questions</h1></div>
    <div class="faq-item">
    <div class="modules">
    <button class="module-title"><span>➕</span>
    Is there a certificate provided?</button>
    </div>
    <div class="module-content">
    <ul>
   <li>Yes, a certificate of completion is provided after finishing the course.</li>
    </ul>
    </div>
    </div>

    <div class="faq-item">
    <div class="modules">
    <button class="module-title"><span>➕</span>
    Do I need any prior knowledge of SQL or Python?</button>
    </div>
    <div class="module-content">
    <ul>
   <li>No, this course is designed for beginners, and no prior knowledge is required.</li>
    </ul>
    </div>
    </div>

    <div class="faq-item">
    <div class="modules">
    <button class="module-title"><span>➕</span>
    Can I access the course materials after completion?</button>
    </div>
    <div class="module-content">
    <ul>
   <li>Yes, you will have lifetime access to all course materials.</li>
    </ul>
    </div>
    </div>

    <div class="faq-item">
    <div class="modules">
    <button class="module-title"><span>➕</span>
    Do I need any prior knowledge of SQL or Python?</button>
    </div>
    <div class="module-content">
    <ul>
   <li>No, this course is designed for beginners, and no prior knowledge is required.</li>
    </ul>
    </div>
    </div>

    <div class="faq-item">
    <div class="modules">
    <button class="module-title"><span>➕</span>
    Join our community for more resources and support!</button>
    </div>
    <div class="module-content">
    <ul>
   <li><a href="#">Join our Discord community</a> for more resources and support!</li>
    </ul>
    </div>
    </div>


    </div>
    </div>


    <div class="right-content">
    <div class="course-image">
    <img src="${matchingProduct.image}" alt="${matchingProduct.name}" />
    </div>

    <div class="course-created">Created By: <a href="#">Thoufiq Mohammed</a></div>
    <div class="enroll-now"><button>Enroll Now</button></div>
    <div class="course-details">
    <div class="course-description"><h1>This course includes:</h1></div>
    <ul>
    <li>9hr:00min on-demand videos</li>
    <li>70 Lectures</li>
    <li>8 Exercises</li>
    <li>9 Quizzes</li>
    <li>Hands-on projects and assignments</li>
    <li>Lifetime access to all course materials</li>
    <li>Certificate of completion</li>
    </ul>
    </div>

    <div class="line"></div>
    
    <div class="course-share">
    <div class="share-heading">Share With Friends</div>
    <div class="share-buttons">
    <a href="#" class="share-button">Facebook</a>
    <a href="#" class="share-button">Twitter</a>
    <a href="#" class="share-button">LinkedIn</a>
    <a href="#" class="share-button">WhatsApp</a>
    
    
    </div>
    </div>



    
    </div>
    
    </div>
    `);

  document.querySelectorAll(".module-title").forEach((button, index) => {
    button.addEventListener("click", () => {
      const moduleContent = document.querySelectorAll(".module-content")[index];
      moduleContent.style.display =
        moduleContent.style.display === "block" ? "none" : "block";
      button.querySelector("span").textContent =
        button.querySelector("span").textContent === "➕" ? "➖" : "➕";
    });

    document.querySelectorAll(".li-button")
    .forEach((liButton,index) => {

        liButton.addEventListener('click',()=>{

            const moduleIndex = liButton.dataset.moduleIndex;
            const lectureIndex = liButton.dataset.lectureIndex;
            content(moduleIndex, lectureIndex);

        })


    })
    document.querySelector(".go-back").addEventListener("click", () => {
      window.location.reload();

      
    });
  });
}
