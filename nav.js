/* nav.js — injects the shared sidebar nav into every page */
(function () {
  // Detect depth: are we in a subfolder?
  var path = window.location.pathname;
  var inSubfolder = /\/(foundation|components|patterns)\//.test(path);
  var root = inSubfolder ? '../' : './';

  var page = document.body.getAttribute('data-page') || '';

  var navHTML = `
    <aside class="doc-sidebar">
      <div class="sidebar-logo">
        <a href="${root}index.html">KASA</a>
        <div class="tagline">Figma UIKit Design System</div>
      </div>
      <nav class="sidebar-nav" aria-label="Documentation navigation">

        <div class="nav-group">
          <span class="nav-group-label">Foundations</span>
          <ul class="nav-group-links">
            <li><a href="${root}foundation/type.html" class="${page === 'typography' ? 'active' : ''}">Typography</a></li>
            <li><a href="${root}foundation/color.html" class="${page === 'color' ? 'active' : ''}">Color</a></li>
            <li><a href="${root}foundation/logo.html" class="${page === 'logo' ? 'active' : ''}">Logo</a></li>
          </ul>
        </div>

        <div class="nav-group">
          <span class="nav-group-label">Components</span>
          <ul class="nav-group-links">
            <li><a href="${root}components/navbar.html" class="${page === 'navbar' ? 'active' : ''}">Navbar</a></li>
            <li><a href="${root}components/footer.html" class="${page === 'footer' ? 'active' : ''}">Footer</a></li>
            <li><a href="${root}components/card.html" class="${page === 'card' ? 'active' : ''}">Card</a></li>
          </ul>
        </div>

        <div class="nav-group">
          <span class="nav-group-label">Page Patterns</span>
          <ul class="nav-group-links">
            <li><a href="${root}patterns/home-pattern.html" class="${page === 'homepage' ? 'active' : ''}">Homepage</a></li>
            <li><a href="${root}patterns/project-pattern.html" class="${page === 'project' ? 'active' : ''}">Menu</a></li>
          </ul>
        </div>

      </nav>
    </aside>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
})();
