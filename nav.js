/* ============================================================
   Kasa — Shared sidebar navigation injector
   Usage: set <body data-page="typography"> then include
   <script src="nav.js"></script> just before </body>.
   ============================================================ */
(function () {
  var NAV = [
    {
      title: 'Foundations',
      links: [
        { id: 'typography', label: 'Typography', href: 'typography.html' },
        { id: 'color',      label: 'Color',      href: 'color.html' },
        { id: 'logo',       label: 'Logo',       href: 'logo.html' }
      ]
    },
    {
      title: 'Components',
      links: [
        { id: 'navbar', label: 'Navbar', href: 'navbar.html' },
        { id: 'footer', label: 'Footer', href: 'footer.html' },
        { id: 'card',   label: 'Card',   href: 'card.html' }
      ]
    },
    {
      title: 'Page Patterns',
      links: [
        { id: 'homepage', label: 'Homepage', href: 'homepage.html' },
        { id: 'project',  label: 'Project',  href: 'project.html' }
      ]
    }
  ];

  var active = document.body.getAttribute('data-page') || '';
  var hasActiveAnywhere = NAV.some(function (g) {
    return g.links.some(function (l) { return l.id === active; });
  });

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  var aside = el('aside', 'sidebar');

  // Logo
  var logo = el('a', 'nav-logo');
  logo.href = 'index.html';
  logo.innerHTML =
    '<img class="nav-logo-img" src="assets/wordmark.svg" alt="Kasa" />' +
    '<span class="nav-logo-sub">Figma UIKit</span>';
  aside.appendChild(logo);

  var sections = el('nav', 'nav-sections');

  NAV.forEach(function (group) {
    var hasActive = group.links.some(function (l) { return l.id === active; });

    var g = el('div', 'nav-group' + (hasActive || !hasActiveAnywhere ? '' : ' collapsed'));

    var head = el('button', 'nav-group-head');
    head.type = 'button';
    head.innerHTML = '<span>' + group.title + '</span><span class="nav-chev"></span>';
    head.addEventListener('click', function () { g.classList.toggle('collapsed'); });
    g.appendChild(head);

    var links = el('div', 'nav-group-links');
    group.links.forEach(function (l) {
      var a = el('a', 'nav-link' + (l.id === active ? ' active' : ''));
      a.href = l.href;
      a.textContent = l.label;
      links.appendChild(a);
    });
    g.appendChild(links);
    sections.appendChild(g);
  });

  aside.appendChild(sections);
  document.body.insertBefore(aside, document.body.firstChild);
})();
