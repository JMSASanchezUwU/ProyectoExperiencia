document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const professors = document.querySelectorAll('#professorsList .card');
    const noResults = document.getElementById('noResultsMessage');
    const professorsRow = document.getElementById('professorsList');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let resultsFound = false;

        const newProfessorsRow = document.createElement('div');
        newProfessorsRow.classList.add('row');

        professors.forEach(professor => {
            const professorName = professor.querySelector('.card-body h5').textContent.toLowerCase();
            if (professorName.includes(searchTerm)) {
                const newCol = document.createElement('div');
                newCol.classList.add('col-lg-4');
                newCol.appendChild(professor.cloneNode(true));
                newProfessorsRow.appendChild(newCol);
                resultsFound = true;
            }
        });

        professorsRow.innerHTML = '';
        professorsRow.appendChild(newProfessorsRow);

        if (searchTerm === '') {
            professors.forEach(professor => {
                professor.style.display = 'block';
            });
            noResults.style.display = 'none';
        } else if (!resultsFound) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    });
});
