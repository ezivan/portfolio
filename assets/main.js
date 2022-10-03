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
  const $inputs = d.querySelectorAll(".form-input[required]");

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

  d.addEventListener("click", (e) => {
    if (e.target.matches(".form-btn *")) {
      setTimeout(() => {
        d.querySelector(".form").reset();
      }, 3000);
    }
  });
})(document);
