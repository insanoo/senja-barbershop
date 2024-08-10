document.addEventListener('DOMContentLoaded', function () {
  // Ambil elemen collapse button dan collapse container
  const collapseButton = document.querySelector('#hs-header-scrollspy-collapse');
  const collapseContainer = document.querySelector('#hs-header-scrollspy');

  // Periksa jika elemen tersebut ada di DOM
  if (collapseButton && collapseContainer) {
    // Tambahkan event listener untuk collapse button
    collapseButton.addEventListener('click', function () {
      // Toggle kelas 'hidden' untuk menampilkan atau menyembunyikan navbar
      collapseContainer.classList.toggle('hidden');
      
      // Perbarui atribut aria-expanded
      const isExpanded = collapseContainer.classList.contains('hidden');
      collapseButton.setAttribute('aria-expanded', !isExpanded);
    });
  }
});
