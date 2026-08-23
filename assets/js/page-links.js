document.addEventListener('DOMContentLoaded', function () {
 var navMarkup =
    '<a href="index.html">الرئيسية</a>' +
    '<a href="about.html">عن الجمعية</a>' +
    '<a href="media-center.html">المركز الإعلامي</a>' +
    '<a href="memberships.html">عضويات الجمعية</a>' +
    '<a class="join-us-link" href="index.html#join-us">انضموا إلينا</a>' +
    '<div class="nav-dropdown governance-dropdown">' +
      '<button class="nav-dropdown-toggle" type="button">اللوائح والحوكمة</button>' +
      '<div class="nav-dropdown-menu">' +
        '<a href="governance/index.html">بوابة الحوكمة</a>' +
        '<a href="governance/license.html">الترخيص</a>' +
        '<a href="governance/board.html">مجلس الإدارة</a>' +
        '<a href="governance/assembly.html">الجمعية العمومية</a>' +
        '<a href="governance/executive.html">الإدارة التنفيذية</a>' +
        '<a href="governance/annual-reports.html">التقارير السنوية</a>' +
        '<a href="governance/financial-reports.html">التقارير المالية</a>' +
        '<a href="governance/policies.html">السياسات واللوائح</a>' +
        '<a href="governance/documents.html">الوثائق والسياسات</a>' +
        '<a href="governance/team.html">الفريق والتطوع</a>' +
        '<a href="governance/partners.html">الشركاء</a>' +
        '<a href="guides-forms/index.html">الأدلة والنماذج</a>' +
      '</div>' +
    '</div>' +
    '<div class="nav-dropdown contact-dropdown">' +
      '<button class="nav-dropdown-toggle" type="button">تواصل معنا</button>' +
      '<div class="nav-dropdown-menu">' +
        '<a href="employment.html">التوظيف</a>' +
        '<a href="contact-us.html">تواصل معنا</a>' +
      '</div>' +
    '</div>';;

  var style = document.createElement('style');
  style.textContent =
    '.site-header{position:sticky!important;top:0!important;z-index:1000!important}' +
    '.navbar{max-width:100%!important;width:min(100% - 32px,1500px)!important}' +
    '.nav-links{display:flex!important;align-items:center!important;gap:4px!important;white-space:nowrap!important}' +
    '.nav-links>a,.nav-dropdown-toggle{padding:9px 10px!important;font-size:.84rem!important}' +
    '.nav-dropdown{position:relative}' +
    '.nav-dropdown-toggle{border:0;border-radius:99px;background:transparent;color:inherit;font-family:inherit;cursor:pointer}' +
    '.nav-dropdown-menu{position:absolute;top:calc(100% + 10px);left:0;z-index:1001;display:none;min-width:230px;padding:10px;border:1px solid #e8edf5;border-radius:16px;background:#fff;box-shadow:0 18px 42px rgba(39,47,110,.15)}' +
    '.nav-dropdown-menu a{display:block;padding:9px 12px!important;color:#6b7280!important;text-decoration:none;border-radius:9px}' +
    '.nav-dropdown-menu a:hover{color:#272f6e!important;background:#f7f9fc}' +
    '.nav-dropdown:hover .nav-dropdown-menu,.nav-dropdown:focus-within .nav-dropdown-menu{display:block}' +
    '@media(max-width:1100px){.navbar{align-items:flex-start!important}.nav-links{width:100%;overflow-x:auto!important;padding-bottom:5px}.nav-dropdown-menu{position:fixed;top:76px;left:16px}}';
  document.head.appendChild(style);

  document.querySelectorAll('.brand').forEach(function (link) {
    link.href = 'index.html';
  });

  document.querySelectorAll('.nav-links').forEach(function (nav) {
    nav.innerHTML = navMarkup;
  });
});
