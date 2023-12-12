$(document).ready( function () {
  
  /* guide:
    l {length}
    r {processing}
    t {table}
    i {information}
    p {pagination}
  */

  $('#myTable').DataTable({
    "columnDefs": [
      { "width": "10px", "targets": 0, "className": "text-center" },
    ],
    "dom": '<"top"f>rt<"bottom"ilp><"clear">',
    "language": {
      "info": "Showing _START_ to _END_ of _TOTAL_ rows",
      "infoEmpty": "0 entries",
      "infoFiltered": "(filtered from _MAX_ total entries)",
      "lengthMenu": "_MENU_ Rows per page",
    },
    "lengthMenu": [ 10, 25, 50, 75, 100 ],
    "responsive": true,
    "autoWidth": false,
  });

});