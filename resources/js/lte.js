try {
    window.Popper = require('admin-lte/plugins/popper/popper.min').default;
    window.$ = window.jQuery = require('admin-lte/plugins/jquery/jquery.min');

    require('admin-lte/plugins/bootstrap/js/bootstrap.bundle.min');
    require('admin-lte/dist/js/adminlte.min');
    require('admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min');
} catch (e) {}