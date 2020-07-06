$(function() {
  'use strict';

  $(function() {
    $('#dataTableExample').DataTable({
      "aLengthMenu": [
        [12, 24, 36, -1],
        [12, 24, 36, "Todas"]
      ],
      "iDisplayLength": 12,
      "language": {
        search: ""
      }
    });
    $('#dataTableExample').each(function() {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Buscar');
      search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });
  });

});