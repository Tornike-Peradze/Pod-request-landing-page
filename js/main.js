const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((qstn) => {
      qstn.classList.remove("active");
    });
    faq.classList.add("active");
  });
});
