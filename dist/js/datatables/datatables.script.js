$(document).ready( function () {
  
  // datatables global options 

  // limit paginate button 
  $.fn.DataTable.ext.pager.numbers_length = 5;

  /* guide:
    l {length}
    r {processing}
    t {table}
    i {information}
    p {pagination}
  */

  // sample 
  // var myTable = $('#myTable').DataTable({
  //   "columnDefs": [
  //     { "width": "10px", "targets": 0, "className": "text-center" },
  //   ],
  //   "dom": '<"top">rt<"bottom"ilp><"clear">',
  //   "language": {
  //     "info": "Showing _START_ to _END_ of _TOTAL_ rows",
  //     "infoEmpty": "0 rows",
  //     "infoFiltered": "(_MAX_ total rows)",
  //     // "infoFiltered": "(filtered from _MAX_ total entries)",
  //     "lengthMenu": "_MENU_ rows per page",
  //     "paginate": {
  //       "previous": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  //           <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //         </svg>`,
  //       "next": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
  //           <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //         </svg>`,
  //     }
  //   },
  //   "lengthMenu": [ 2, 10, 25, 50],
  //   "responsive": true,
  //   "autoWidth": false,
  // });

 // Apply custom search on keyup event
  // $('#searchInput').keyup(function() {
  //   myTable.search($(this).val()).draw();
  // });


  // ====== vendor table ======
  var vendorTable = $('#vendorTable').DataTable({
    "columnDefs": [
      {"targets": 0, "orderable": false, "className": "t-text-center"},
      {"targets": 1, "orderable": false, "className": "t-text-center"},
    ],
    "dom": '<"top">rt<"bottom"ilp><"clear">',
    "language": {
      "info": "Showing _START_ to _END_ of _TOTAL_ rows",
      "infoEmpty": "0 rows",
      "infoFiltered": "",
      "lengthMenu": "_MENU_ rows per page",
      "paginate": {
        "previous": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
        "next": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
      }
    },
    "lengthMenu": [ 5, 10, 25, 50],
    "responsive": true,
    "autoWidth": false,
  });

  // Apply custom search on keyup event
  $('#search_input_vendor').keyup(function() {
    vendorTable.search($(this).val()).draw();
  });

  // ====== warehouse table ======
  var warehouseTable = $('#warehouseTable').DataTable({
    "columnDefs": [
      {"targets": 0, "orderable": false, "className": "t-text-center"},
      {"targets": 1, "orderable": false, "className": "t-text-center"},
    ],
    "dom": '<"top">rt<"bottom"ilp><"clear">',
    "language": {
      "info": "Showing _START_ to _END_ of _TOTAL_ rows",
      "infoEmpty": "0 rows",
      "infoFiltered": "",
      "lengthMenu": "_MENU_ rows per page",
      "paginate": {
        "previous": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
        "next": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
      }
    },
    "lengthMenu": [ 5, 10, 25, 50],
    "responsive": true,
    "autoWidth": false,
  });

  // Apply custom search on keyup event
  $('#search_input_vendor').keyup(function() {
    warehouseTable.search($(this).val()).draw();
  });


  // ====== finance table ======
  var financeTable = $('#financeTable').DataTable({
    "columnDefs": [
      {"targets": 0, "orderable": false, "className": "t-text-center"},
      {"targets": 1, "orderable": false, "className": "t-text-center"},
    ],
    "dom": '<"top">rt<"bottom"ilp><"clear">',
    "language": {
      "info": "Showing _START_ to _END_ of _TOTAL_ rows",
      "infoEmpty": "0 rows",
      "infoFiltered": "",
      "lengthMenu": "_MENU_ rows per page",
      "paginate": {
        "previous": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
        "next": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
      }
    },
    "lengthMenu": [ 5, 10, 25, 50],
    "responsive": true,
    "autoWidth": false,
  });

  // Apply custom search on keyup event
  $('#search_input_vendor').keyup(function() {
    financeTable.search($(this).val()).draw();
  });


  // ====== finance detail table ======
  var financeDetailTable = $('#financeDetailTable').DataTable({
    "columnDefs": [
      {"targets": 0, "orderable": false, "className": "t-text-center"},
      {"targets": 1, "orderable": false, "className": "t-text-center"},
      {"targets": 2, "orderable": false, "className": "t-text-center"},
      {"targets": 3, "orderable": false, "className": "t-text-center whitespace-nowrap"},
    ],
    "dom": '<"top">rt<"bottom"ilp><"clear">',
    "language": {
      "info": "Showing _START_ to _END_ of _TOTAL_ rows",
      "infoEmpty": "0 rows",
      "infoFiltered": "",
      "lengthMenu": "_MENU_ rows per page",
      "paginate": {
        "previous": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
        "next": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
      }
    },
    "lengthMenu": [ 5, 10, 25, 50],
    "responsive": true,
    "autoWidth": false,
  });

  // Apply custom search on keyup event
  $('#search_input_vendor').keyup(function() {
    financeDetailTable.search($(this).val()).draw();
  });

  // ====== Invoice list table ======
  var invoiceListTable = $('#invoiceListTable').DataTable({
    "columnDefs": [
      {"targets": 0, "orderable": false, "className": "t-text-center"},
      {"targets": 1, "orderable": false, "className": "t-text-center"},
    ],
    "dom": '<"top">rt<"bottom"ilp><"clear">',
    "language": {
      "info": "Showing _START_ to _END_ of _TOTAL_ rows",
      "infoEmpty": "0 rows",
      "infoFiltered": "",
      "lengthMenu": "_MENU_ rows per page",
      "paginate": {
        "previous": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
        "next": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
            <path d="M12.4695 4.16669L6.66684 9.96933L12.4695 15.772" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
      }
    },
    "lengthMenu": [ 10, 25, 50],
    "responsive": true,
    "autoWidth": false,
  });

  // Apply custom search on keyup event
  $('#search_input_vendor').keyup(function() {
    invoiceListTable.search($(this).val()).draw();
  });

});
