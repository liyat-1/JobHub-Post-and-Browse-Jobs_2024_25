import Request from "../defaultFetch.mjs";

const request = new Request();

class jobTemplate {
  job;
  constructor(id, company, title, desc, requirement, coverPage, link) {
    this.job = `  
        <div class="card mb-4 shadow-sm">
          <a href="job.html" onclick="sessionStorage.setItem('currentJob', ${id})" class="text-decoration-none text-dark">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${request.domain}${coverPage}"
                  class="img-fluid rounded-start"
                  alt="${title} job cover poster"
                  style="height: 100%; object-fit: cover;"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <!-- Title: Only bold -->
                  <h5 class="card-title text-purple fw-bold">${company}</h5>
                  <h6 class="card-title fw-bold">${title}</h6>
                  <p class="card-text" style="font-size: 0.9rem; font-weight: 500;">
                    <!-- Description with smaller text size and medium font weight -->
                    ${desc.slice(0, 100) + (desc.length > 100 ? "..." : "")}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>`;
  }
}

if (document.querySelector("#createJob")) {
  document.querySelector("#createJob").addEventListener("submit", createJob);
}

const jobList = document.querySelector("#jobList");

const response = await request.Get("jobs");

if (!response.ok) {
  const data = await response.json();
  alert(data.message);
  console.error(data);
} else {
  const data = await response.json();
  data.forEach((job) => {
    const jobItem = new jobTemplate(
      job.id,
      job.company,
      job.title,
      job.description,
      job.requirement,
      job.coverPage,
      job.link
    );
    jobList.innerHTML += jobItem.job;
  });
}

async function createJob(e) {
  e.preventDefault();
  const company = document.querySelector("#company").value.trim();
  const title = document.querySelector("#title").value.trim();
  const desc = document.querySelector("#desc").value.trim();
  const requirement = document.querySelector("#requirement").value.trim();
  const cover = document.querySelector("#cover");
  const link = document.querySelector("#link").value.trim();

  //CREATE MOVIE WITH CREATE MOVIE REQUEST TO API
  const formData = new FormData();
  formData.append("coverPage", cover.files[0]);
  formData.append("company", company);
  formData.append("title", title);
  formData.append("description", desc);
  formData.append("requirement", requirement);
  formData.append("link", link);

  const response = await fetch("http://localhost:3000/jobs", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("jwt"),
    },
    body: formData,
  });

  if (!response.ok) {
    const data = await response.json();

    if (data.message == "Unauthorized") {
      alert("Unauthorized: you should be logged in to post jobs");
      location.href = "login.html";
    } else {
      alert(data.message + data.error);
    }
    console.error(data);
  } else {
    const data = response.json();
    const { id } = data;
    sessionStorage.setItem("currentJob", id);
    location.reload();
  }
}
