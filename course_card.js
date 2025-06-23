
import { courses } from "./course_object.js";
import { headinggg } from "./course_heading.js";
import { details } from "./course_details.js";

export function courseeCard() {
  

    

  let totalHtml = "";
  courses.forEach((items) => {
    totalHtml += `
        <div class="cont">
        <div class="list">
        <div class="single">
        <div class="course-img">
        <img src="${items.image}" width="100%" height="200px">
        </div>
        <div class="Free">${items.priceCents}</div>
        <div class="course-content">
        <div class="course-instructor"><img src="${items.instructor_img}" width="25px" height="25px"  style="border-radius:30px">Thoufiq Mohammed</div>
        <div class="course-rating">${items.rating}</div>

        <div class="course-enrolled">👥 ${items.enrolled} Enrolled</div>
        <div class="course-heading"><br>${items.name}</div>
        <div class="details"><h6>🎯 Top 3 SQL Interview Questions You Must Know (With Answers)
        Welcome back to the channel! In this video, I’m breaking down 3 of the most common and important SQL interview questions that every aspiring Data Engineer, Data Analyst, or Data Scientist should know.</h6></div>
        </div>
        <div class="course-button1"><button class="view">View More</button></div>
        </div>
        </div>
        </div>
        `;
  });
  document.querySelector(".course-cart").innerHTML = totalHtml;

  document.querySelectorAll('.view')
  .forEach((button,index)=>{
    
    button.addEventListener('click',()=>{
        details(courses[index].id);
        
    })
    
  })
}
courseeCard();

