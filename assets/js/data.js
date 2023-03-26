let position = document.querySelectorAll("span.designation");
let email = document.querySelectorAll(".email");
let adress = document.querySelectorAll(".left-sidebar .address");
let image = document.querySelectorAll(".left-sidebar .me");
let whatsapp = document.querySelectorAll(".whatsapp");
let facebook = document.querySelectorAll(".facebook");
let linkedin = document.querySelectorAll(".linkedin");
let github = document.querySelectorAll(".github");
let telegram = document.querySelectorAll(".telegram");
let pageTitle = document.querySelector(".hero-content .section-header h1");
let titleAbout = document.querySelector(".title-about");
let experienceYear = document.querySelector(".experience-year");
let projectsCount = document.querySelector(".projectsCount");
let aboutTitle = document.querySelector("#about h1");
let aboutMain = document.querySelector("#about p");
let educat = document.querySelector(".resume-timeline");
let experiencesDiv = document.querySelector(".exp");
let specializations = document.querySelector(".services-items");
let advantagesDiv = document.querySelector(".row.skills.text-center");
let projectsDiv = document.querySelector(".row.portfolio-items");
let modal_add_data = document.querySelector("#modal_add_data");

fetch("https://admin.qaraqura.com/portfolio/2/")
  .then((a) => a.json())
  .then((portfolio) => {
    [...position].map((pos) => {
      pos.innerText = portfolio.positon;
    });
    [...email].map((mail) => {
      mail.innerText = portfolio.mail;
    });
    [...adress].map((adr) => {
      adr.innerText = portfolio.adress;
    });
    [...image].map((img) => {
      img.src = portfolio.image;
    });
    [...telegram].map((tel) => {
      tel.href = portfolio.telegram;
    });
    [...linkedin].map((link) => {
      link.href = portfolio.linkedin;
    });
    [...whatsapp].map((wp) => {
      wp.href = `https://wa.me/${portfolio.twitter}`;
    });
    [...facebook].map((fb) => {
      fb.href = portfolio.facebook;
    });
    [...github].map((gh) => {
      gh.href = portfolio.github;
    });
    pageTitle.innerText = portfolio.page_title;
    titleAbout.innerText = portfolio.title_about;
    experienceYear.innerText = `${portfolio.experience_year}+`;
    projectsCount.innerText = `${portfolio.projects_count}+`;
    aboutTitle.innerText = portfolio.about_title;
    aboutMain.innerText = portfolio.about_main;
    let education = portfolio.education.sort(() => -1);
    education.map((edu) => {
      let item = document.createElement("div");
      item.classList.add("item", "scroll-animation");
      item.setAttribute("data-animation", "fade_from_right");
      educat.append(item);
      let eduDate = document.createElement("span");
      eduDate.classList.add("date");
      eduDate.innerText = `${edu.start_year} - ${edu.end_year}`;
      let educationPosition = document.createElement("h2");
      educationPosition.innerText = edu.title;
      let educationPlace = document.createElement("p");
      educationPlace.innerText = edu.place;
      item.append(eduDate, educationPosition, educationPlace);
    });
    let experiences = portfolio.experience.sort(() => -1);
    experiences.map((exp) => {
      let item = document.createElement("div");
      item.classList.add("item", "scroll-animation");
      item.setAttribute("data-animation", "fade_from_right");
      experiencesDiv.append(item);
      let eduDate = document.createElement("span");
      eduDate.classList.add("date");
      eduDate.innerText = `${exp.start_year} - ${exp.end_year}`;
      let educationPosition = document.createElement("h2");
      educationPosition.innerText = exp.title;
      let educationPlace = document.createElement("p");
      educationPlace.innerText = exp.place;
      item.append(eduDate, educationPosition, educationPlace);
    });
    let specialization = portfolio.specialization.sort(() => -1);
    specialization.map((sp) => {
      let specializationDiv = document.createElement("div");
      specializationDiv.classList.add("service-item", "scroll-animation");
      specializationDiv.setAttribute("data-animation", "fade_from_bottom");
      specializations.append(specializationDiv);
      let i = document.createElement("i");
      i.classList.add("las", "la-code");
      let specializationTitle = document.createElement("h2");
      specializationTitle.innerText = sp.title;
      let specializationText = document.createElement("p");
      specializationText.innerText = sp.about;
      let specializationProjectCount = document.createElement("span");
      specializationProjectCount.classList.add("projects");
      specializationProjectCount.innerText = `${sp.count} PROJECTS`;
      specializationDiv.append(
        i,
        specializationTitle,
        specializationText,
        specializationProjectCount
      );
    });
    let advantages = portfolio.skills;
    advantages.map((skil) => {
      let div = document.createElement("div");
      div.classList.add("col-md-3", "scroll-animation");
      advantagesDiv.append(div);
      let skillDiv = document.createElement("div");
      skillDiv.classList.add("skill");
      div.append(skillDiv);
      let skillInner = document.createElement("div");
      skillInner.classList.add("skill-inner");
      let skillImage = document.createElement("img");
      skillImage.src = skil.image;
      let percent = document.createElement("h1");
      percent.classList.add("percent");
      percent.innerHTML = "&nbsp";
      skillInner.append(skillImage);
      let skillName = document.createElement("p");
      skillName.classList.add("name");
      skillName.innerText = skil.name;
      skillDiv.append(skillInner, skillName);
    });

    let projects = portfolio.projects;
    console.log(projects, "projectsssssssss");
    projects.map((project, index) => {
      let div = document.createElement("div");
      if ((index + 3) % 4 === 0 || (index + 2) % 4 === 0) {
        div.classList.add("col-md-6", "scroll-animation");
      } else {
        div.classList.add("col-md-12", "scroll-animation");
      }
      div.setAttribute("data-animation", "fade_from_bottom");
      projectsDiv.append(div);
      let portfolioItem = document.createElement("div");
      portfolioItem.classList.add("portfolio-item", "portfolio-full");
      div.append(portfolioItem);
      let portfolioItemInner = document.createElement("div");
      portfolioItemInner.classList.add("portfolio-item-inner");
      portfolioItemInner.setAttribute("data-bs-toggle", "modal");
      portfolioItemInner.setAttribute("data-bs-target", "#id2");
      portfolioItemInner.setAttribute("data-lightbox", "example-1");
      portfolioItemInner.setAttribute("id", `project-${project.id}`);
      let portfolioNameH2 = document.createElement("h2");
      let portfolioName = document.createElement("a");
      portfolioName.innerText = project.name;
      portfolioNameH2.append(portfolioName);
      portfolioItem.append(portfolioItemInner, portfolioNameH2);
      let portfolioLink = document.createElement("a");
      //   portfolioLink.href = project.main_image;/
      let portfolioMainImage = document.createElement("img");
      portfolioMainImage.src = project.main_image;
      portfolioMainImage.setAttribute("alt", "Portfolio");
      portfolioLink.append(portfolioMainImage);
      let projectTechnologies = project.technology;
      let projectTechnologiesUl = document.createElement("ul");
      projectTechnologiesUl.classList.add("portfolio-categories");
      projectTechnologies.map((tech) => {
        let portfolioTechnology = document.createElement("li");
        let portfolioTechnologyA = document.createElement("a");
        portfolioTechnologyA.innerText = tech.name;
        portfolioTechnology.append(portfolioTechnologyA);
        projectTechnologiesUl.append(portfolioTechnology);
      });
      portfolioItemInner.append(portfolioLink, projectTechnologiesUl);
      //   let projectDiv = document.createElement("a");
      //   projectDiv.href = `/assets/detail.html?${project.id}`;
      //   projectDiv.classList.add("project");
      //   let projectImageDiv = document.createElement("div");
      //   projectImageDiv.classList.add("project-image");
      //   let projectImage = document.createElement("img");
      //   projectImage.src = project.main_image;
      //   let projectText = document.createElement("h5");
      //   projectText.classList.add("project-text");
      //   projectText.innerText = project.name;
      //   projectImageDiv.append(projectImage);
      //   projectDiv.append(projectImageDiv, projectText);
      //   projectsDiv.append(projectDiv);

      // __________________________________________________

      let portfolioItemInners = document.querySelectorAll(
        ".portfolio-item-inner"
      );
      // console.log(portfolioItemInners);

      portfolioItemInner.addEventListener("click", (event) => {
        let clickedId = event.currentTarget.getAttribute("id");
        console.log(clickedId); // or do something else with the clickedId

        // Make API request

        fetch(`https://admin.qaraqura.com/project/${clickedId.split("-")[1]}/`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("API request failed.");
            }
          })
          .then((data) => {
            console.log(data);
            // let detail = document.createElement("div");
            // detail.classList.add("modal_data_div");

            // let detailVideo = document.createElement("div");
            // detailVideo.classList.add("modal_data_div_img");
            // let detailMainVideo = document.createElement("img");
            // detailMainVideo.src = data.main_image;
            // detailMainVideo.setAttribute("alt", "Portfolio");
            // detailVideo.append(detailMainVideo);

            // detail.append(detailVideo);
            // modal_add_data.append(detail);

            modal_add_data.innerHTML = `
              <div class="modal_data_div">
              <div class="${
                data.video_link ? "modal_data_div_img" : "modal_data_div_img_no"
              }">
 ${data.video_link}
  
</div>

              <div
                class="modal_data_div_tecnology"
              >
                <ul>
                  ${data.technology.map((i) => `<li>${i.name}</li>`)}
                </ul> <br/>
               
                <b>
                ${
                  data.url
                    ? "Project URL: " +
                      "<a href='" +
                      data.url +
                      "'>" +
                      data.url +
                      "</a>"
                    : ""
                }
              </b>

              </div>
              <div>
                <h2>
                  ${data.main_title}
                  elit.
                </h2>
                <p>
                  ${data.text}
                </p>
              </div>
              <div
                class="modal_mini_img_div"
              >
              ${data.images
                .map(
                  (i) => `
              <div class="modal_mini_img_div1" >
                <img src="${i.image}" />
              </div>
            `
                )
                .join("")}
              </div>
            </div>
              
              `;
          });
        // .catch((error) => {
        //   console.error(error);
        // });
      });
    });
  });
