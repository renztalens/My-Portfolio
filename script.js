const projectDetails = {
  robot: {
    title: "Greenhouse Planting Robot",
    description:
      "An Arduino-based robot designed to automate seed planting tasks inside a greenhouse setup, helping improve planting speed and consistency.",
    tech: "Tech Stack: Arduino, Sensors, Encoder",
  },
  starlink: {
    title: "Starlink Installation Project",
    description:
      "Participated in deploying and configuring satellite internet systems for remote schools, including setup, connectivity validation, and network hardening.",
    tech: "Tech Stack: Networking, Hardware, Firewall",
  },
  upcoming: {
    title: "Upcoming Project",
    description:
      "A cloud/DevOps-focused project in progress involving automation, deployment workflows, and scalable infrastructure concepts.",
    tech: "Tech Stack: Cloud, CI/CD, Automation",
  },
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const projectCards = document.querySelectorAll(".project-card");
const resumeButton = document.querySelector('#resume a[download]');

function openModal(projectKey) {
  const details = projectDetails[projectKey];
  if (!details) return;

  modalTitle.textContent = details.title;
  modalDescription.textContent = details.description;
  modalTech.textContent = details.tech;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.project));

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card.dataset.project);
    }
  });
});

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-modal")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Friendly fallback if resume.pdf is missing from the project folder.
resumeButton.addEventListener("click", () => {
  const resumePath = resumeButton.getAttribute("href");
  if (resumePath !== "resume.pdf") return;
  setTimeout(() => {
    if (document.hasFocus()) {
      console.info("Add resume.pdf to enable actual file download.");
    }
  }, 200);
});
