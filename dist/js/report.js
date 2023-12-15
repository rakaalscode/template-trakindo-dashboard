function detailInvoice(drawerID, status) {
  toggleDrawer(drawerID, status)
  invoiceContent(status)
}

function invoiceContent(status) {
  let invoiceNumber = document.getElementById("invoice_number-detail-id");
  let invoiceDate = document.getElementById("invoice_date_col-id");
  let tax = document.getElementById("tax_col-id");
  let contractNumber = document.getElementById("contract_col-id");
  let statusName = document.getElementById("status_detail_name-id");
  let statusSubname = document.getElementById("status_detail_name_file-id");
  let statusIcon = document.getElementById("status_detail_icon-id");
  let decision1 = document.getElementById("detail_decision1-id");
  let decision2 = document.getElementById("detail_decision2-id");

  // clear first 
  invoiceNumber.innerHTML = `VI 231011 - 01/R01`;
  invoiceDate.innerHTML = `24/04/2023`;
  tax.innerHTML = `000.000-00.00000000`;
  contractNumber.innerHTML = `ASD/AE/23-2023`;
  statusName.innerHTML = ``;
  statusSubname.innerHTML = ``;
  statusIcon.innerHTML = ``;
  decision1.innerHTML = ``;
  decision2.innerHTML = ``;

  if(status == 'draft') {
    invoiceNumber.innerHTML = ``;
    invoiceDate.innerHTML = ``;
    contractNumber.innerHTML = ``;
    statusName.innerHTML = `Draft`
    statusIcon.innerHTML += `<img src="/dist/images/icons/alert-circle-draft.svg" alt="alert draft">`;
    decision1.innerHTML = `<label class="inline-flex items-center badge badge-gray cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-gray_2-500"></span>
      Draft
    </label>`;
    decision2.innerHTML = `<label class="inline-flex items-center badge badge-gray cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-gray_2-500"></span>
      Draft
    </label>`;
  } else if( status == 'submitted' || status == 'submitted_finance') {

    if(status == 'submitted') {
      statusName.innerHTML = `Submitted`;
    } else if (status == 'submitted_finance') {
      statusName.innerHTML = `Submitted To Finance`;
    }

    statusIcon.innerHTML = `<img src="/dist/images/icons/AccessTimeFilled2.svg" alt="access time blue">`;
    decision1.innerHTML = `<label class="inline-flex items-center badge badge-error cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-error-500"></span>
      Rejected
    </label>`;
    decision2.innerHTML = `<label class="inline-flex items-center badge badge-error cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-error-500"></span>
      Rejected
    </label>`;
  } else if( status == 'completed') {
    
    statusName.innerHTML = `Payment Complete`;
    statusIcon.innerHTML = `<img src="/dist/images/icons/round-check-filled.svg" alt="check">`;
    decision1.innerHTML = `<label class="inline-flex items-center badge badge-green cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-green-500"></span>
      Approval
    </label>`;
    decision2.innerHTML = `<label class="inline-flex items-center badge badge-green cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-green-500"></span>
      Approval
    </label>`;

  } else if( status == 'rejected') {
    statusName.innerHTML = `Rejected`;
    statusIcon.innerHTML = `<img src="/dist/images/icons/round-alert-filled.svg" alt="alert">`;
    decision1.innerHTML = `<label class="inline-flex items-center badge badge-error cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-error-500"></span>
      Rejected
    </label>`;
    decision2.innerHTML = `<label class="inline-flex items-center badge badge-error cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-error-500"></span>
      Rejected
    </label>`;
  } else if( status == 'waiting_verification' || status == 'waiting_approval' || status == 'need_verification' || status == 'need_approval' || status == 'action_needed-revise' || status == 'action_needed-hardcopy') {
    
    if(status == 'waiting_verification') {
      statusName.innerHTML = `Waiting for Verification`;
    } else if (status == 'waiting_approval') {
      statusName.innerHTML = `Waiting for Approval`;
    } else if (status == 'need_verification') {
      statusName.innerHTML = `Need Verification`;
    } else if (status == 'need_approval') {
      statusName.innerHTML = `Need Approval`;
    }else if (status == 'action_needed-revise' || status == 'action_needed-hardcopy') {
      statusName.innerHTML = `Action Needed`;
    }

    if (status == 'action_needed-revise') {
      statusSubname.innerHTML = `Revision Required`;
    } else if(status == 'action_needed-hardcopy') {
      statusSubname.innerHTML = `Waiting For Hard Copy`;
    }
    
    if(status == 'need_verification') {
      statusIcon.innerHTML = `<img src="/dist/images/icons/waiting_verification.svg" alt="waiting verify">`;
    } else {
      statusIcon.innerHTML = `<img src="/dist/images/icons/round-warning-filled.svg" alt="warning">`;
    }

    decision1.innerHTML = `<label class="inline-flex items-center badge badge-error cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-error-500"></span>
      Rejected
    </label>`;
    decision2.innerHTML = `<label class="inline-flex items-center badge badge-error cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-error-500"></span>
      Rejected
    </label>`;
  } else if( status == 'waiting_verification') {
    statusName.innerHTML = `Waiting for Verification`;
    statusIcon.innerHTML = `<img src="/dist/images/icons/waiting_verification.svg" alt="waiting verify">`;
    decision1.innerHTML = `<label class="inline-flex items-center badge badge-error cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-error-500"></span>
      Rejected
    </label>`;
    decision2.innerHTML = `<label class="inline-flex items-center badge badge-error cursor-pointer font-medium">
      <span class="dot-filter-badge w-1.5 h-1.5 rounded-full me-1.5 bg-error-500"></span>
      Rejected
    </label>`;
  }
} 