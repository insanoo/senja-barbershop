window.addEventListener('load', function() {
  (function() {
    // Coba dapatkan instance dari HSCollapse dan HSScrollspy
    const collapse = window?.$hsCollapseCollection ? HSCollapse.getInstance('#hs-header-scrollspy-collapse', true) : null;
    const scrollSpy = window?.$hsScrollspyCollection ? HSScrollspy.getInstance('[data-hs-scrollspy="#scrollspy"]', true) : null;

    // Pastikan kedua instance berhasil diinisialisasi
    if (collapse && scrollSpy) {
      // Tambahkan event listener untuk event 'beforeScroll'
      scrollSpy.element.on('beforeScroll', () => {
        console.log('beforeScroll event triggered'); // Debugging log
        return new Promise((res) => {
          // Cek apakah lebar jendela <= 639px dan elemen collapse terbuka
          if (window.innerWidth <= 639 && collapse.element.el.classList.contains('open')) {
            console.log('Hiding collapse menu'); // Debugging log
            collapse.element.hide(); // Sembunyikan elemen collapse
            // Tunggu sampai transisi selesai
            HSStaticMethods.afterTransition(collapse.element.content, () => res(true));
          } else {
            res(true); // Lanjutkan jika kondisi tidak terpenuhi
          }
        });
      });
    } else {
      console.error('Collapse or Scrollspy instance not found'); // Error log jika instance tidak ditemukan
    }
  })();
});
