const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.remove("active");
    faqs.forEach((qstn) => {
      qstn.classList.add("active");
    });
  });
});
