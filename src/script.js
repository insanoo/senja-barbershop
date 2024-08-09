//nav
window.addEventListener('load', function() {
    (function() {
      const collapse = window?.$hsCollapseCollection ? HSCollapse.getInstance('#hs-header-scrollspy-collapse', true) : null;
      const scrollSpy = window?.$hsScrollspyCollection ? HSScrollspy.getInstance('[data-hs-scrollspy="#scrollspy"]', true) : null;

      if (collapse && scrollSpy) scrollSpy.element.on('beforeScroll', () => {
        console.log(1);
        return new Promise((res) => {
          if (window.innerWidth <= 639 && collapse.element.el.classList.contains('open')) {
            collapse.element.hide();
            HSStaticMethods.afterTransition(collapse.element.content, () => res(true));
          } else res(true);
        });
      });
    })();
  });