const searchInputs = document.querySelectorAll("[data-search-input]");

searchInputs.forEach((input) => {
  const targetSelector = input.getAttribute("data-search-input");
  const cards = Array.from(document.querySelectorAll(targetSelector));
  const emptyState = document.querySelector("[data-no-results]");

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const isVisible = text.includes(query);
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.classList.toggle("is-visible", visibleCount === 0);
    }
  });
});

const governanceSearch = document.querySelector("[data-governance-search]");
const governanceFilters = Array.from(document.querySelectorAll("[data-governance-filter]"));
const governanceSections = Array.from(document.querySelectorAll("[data-governance-section]"));
const governanceDocuments = Array.from(document.querySelectorAll(".document-card[data-category]"));
const governanceEmpty = document.querySelector("[data-governance-empty]");

if (governanceSearch && governanceDocuments.length) {
  let activeCategory = "all";

  const applyGovernanceFilters = () => {
    const query = governanceSearch.value.trim().toLowerCase();
    let visibleDocuments = 0;

    governanceDocuments.forEach((card) => {
      const categories = card.dataset.category.split(/\s+/);
      const matchesCategory = activeCategory === "all" || categories.includes(activeCategory);
      const matchesSearch = card.textContent.toLowerCase().includes(query);
      const isVisible = matchesCategory && matchesSearch;
      card.hidden = !isVisible;
      if (isVisible) visibleDocuments += 1;
    });

    governanceSections.forEach((section) => {
      const sectionCards = Array.from(section.querySelectorAll(".document-card[data-category]"));
      if (!sectionCards.length) {
        section.hidden = activeCategory !== "all" && section.dataset.governanceSection !== activeCategory;
        return;
      }

      const hasVisibleCard = sectionCards.some((card) => !card.hidden);
      const sectionMatches = activeCategory === "all" || section.dataset.governanceSection === activeCategory || hasVisibleCard;
      section.hidden = !sectionMatches || (!hasVisibleCard && activeCategory !== "all");
    });

    if (governanceEmpty) {
      governanceEmpty.classList.toggle("is-visible", visibleDocuments === 0);
    }
  };

  governanceSearch.addEventListener("input", applyGovernanceFilters);

  governanceFilters.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.governanceFilter;
      governanceFilters.forEach((item) => item.classList.toggle("is-active", item === button));
      applyGovernanceFilters();
    });
  });
}
