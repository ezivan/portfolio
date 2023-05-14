// ********* Menu btn *********

((d) => {
  const $btn = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".nav");

  $btn.addEventListener("click", (e) => {
    $btn.firstElementChild.classList.toggle("none");
    $btn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(".nav a")) {
      $btn.firstElementChild.classList.remove("none");
      $btn.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    }
  });
})(document);

// ********* Skills section *********

((d) => {
  let $section = d.getElementById("habilidades");
  let $skills = d.querySelectorAll(".progress");
  let classes = [
    "htmlcss",
    "javascript",
    "bootstrap",
    "react",
    "photoshop",
    "teamwork",
    "english",
    "dedication",
    "positive-attitude",
    "flexibility",
    "confidence",
  ];

  let callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $skills[0].classList.add(classes[0]);
        $skills[1].classList.add(classes[0]);
        $skills[2].classList.add(classes[1]);
        $skills[3].classList.add(classes[2]);
        $skills[4].classList.add(classes[3]);
        $skills[5].classList.add(classes[4]);
        $skills[6].classList.add(classes[5]);
        $skills[7].classList.add(classes[6]);
        $skills[8].classList.add(classes[7]);
        $skills[9].classList.add(classes[8]);
        $skills[10].classList.add(classes[9]);
        $skills[11].classList.add(classes[10]);
      }
    });
  };

  let observer = new IntersectionObserver(callback, {
    threshold: 0.5,
  });

  observer.observe($section);
})(document);

// ********* Form validate *********

((d) => {
  const $inputs = d.querySelectorAll(".form-input[required]"),
        $form = d.querySelector("form"),
        $toast = d.getElementById("toast");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form-error");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;

    if (pattern && $input.value != "") {
      let regexp = new RegExp(pattern);
      if (!regexp.exec($input.value)) {
        $input.classList.add("error");
        d.getElementById($input.name).classList.add("active");
        return;
      } else {
        $input.classList.remove("error");
        d.getElementById($input.name).classList.remove("active");
        return;
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/ivancontacto65@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => {
      $toast.classList.add("active");
      e.target.reset();
    })
    .catch(error => {
      let message = `<small>${error.statusText}</small>` || `<small>Falló al enviar el mensaje, intente de nuevo.</small>`,
          $icon = d.getElementById("toast-icon");
      
      $toast.classList.add("error");
      $icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      `;
      d.getElementById("toast-title").innerHTML = "Error";
      d.getElementById("toast-message").innerHTML = message;
      $toast.classList.add("active");
    })
    .finally(() => setTimeout(() => {
      $toast.classList.remove("active");
    }, 4000))
  });
})(document);
