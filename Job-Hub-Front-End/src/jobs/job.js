import Request from "../defaultFetch.mjs";

const request = new Request();

const main = document.querySelector("main");
const jobContent = document.querySelector("#jobContent");

main.setAttribute("data-id", sessionStorage.getItem("currentJob"));

const deleteButton = document.querySelector("#deleteJob");
const updateForm = document.querySelector("#updateJobForm");
deleteButton.addEventListener("click", deleteJob);
updateForm.addEventListener("submit", updateJob);

const res = await request.Get(`jobs/${sessionStorage.getItem("currentJob")}`);

if (!res.ok) {
  console.error(await res.json());
} else {
  const job = await res.json();
  const {
    company,
    title,
    description,
    requirement,
    coverPage,
    link,
    createdBy,
  } = job;
  if (
    createdBy.username.toLowerCase() !=
    sessionStorage.getItem("currentUser").toLowerCase()
  ) {
    document.querySelector("#editJob").disabled = true;
    deleteButton.disabled = true;
  }

  document.querySelector("title").innerHTML = title;
  if (coverPage) {
    jobContent.innerHTML = `
      <div class="job-content">
        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid rounded-start" src="${request.domain}${coverPage}" alt="${title} job cover poster">
          </div>
          <div class="col-md-8">
            <p class="job-title"><strong>${title}</strong></p>
            <p><strong>Company:</strong> ${company}</p>
            <p class="job-description"><strong>Description:</strong> ${description}</p>
            <p class="job-requirements"><strong>Requirements:</strong> ${requirement}</p>
            <p class="link-style">
            <strong>Application Link/Form:</strong>
            <a href="${link}" target="_blank" class="custom-link">${link}</a>
            </p>
          </div>
        </div>
      </div>
    `;
  } else {
    jobContent.innerHTML = `
      <div class="job-content">
        <p class="job-title"><strong>${title}</strong></p>
        <p><strong>Company:</strong> ${company}</p>
        <p class="job-description"><strong>Description:</strong> ${description}</p>
        <p class="job-requirements"><strong>Requirements:</strong> ${requirement}</p>
        <p class="link-style">
        <strong>Application Link/Form:</strong>
        <a href="${link}" target="_blank" class="custom-link">${link}</a>
        </p>
      </div>
    `;
  }
}

async function deleteJob() {
  const res = await request.Del(`jobs/${sessionStorage.getItem("currentJob")}`);
  const data = await res.json();

  if (!res.ok) {
    console.error(data.error);
    alert(
      data.message + ": jobs can only be deleted by the users that created them"
    );
    location.reload();
  } else {
    location.replace("jobs.html");
  }
}

async function updateJob(e) {
  e.preventDefault();

  const company = document.querySelector("#company ").value.trim();
  const title = document.querySelector("#title").value.trim();
  const desc = document.querySelector("#desc").value.trim();
  const requirement = document.querySelector("#requirement").value.trim();
  const cover = document.querySelector("#cover");
  const link = document.querySelector("#link").value.trim();

  if (desc && desc.length < 11) {
    alert("Description must be more than 10 characters");
    document.querySelector("#desc").focus();
    return;
  }

  if (requirement && requirement.length < 11) {
    alert("Requirement must be more than 10 characters");
    document.querySelector("#requirement").focus();
    return;
  }

  const formData = new FormData();

  if (company) {
    formData.append("company", company);
  }

  if (title) {
    formData.append("title", title);
  }
  if (desc) {
    formData.append("description", desc);
  }
  if (requirement) {
    formData.append("requirement", requirement);
  }
  if (cover.value) {
    formData.append("coverPage", cover.files[0]);
  }
  if (link) {
    formData.append("link", link);
  }

  const response = await fetch(
    `http://localhost:3000/jobs/${sessionStorage.getItem("currentJob")}`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
      body: formData,
    }
  );

  if (!res.ok) {
    const resData = await res.json();
    if (resData.message.constructor === Array) {
      alert(resData.message[0]);
    } else {
      alert(resData.message);
    }
  } else {
    location.reload();
  }
}
