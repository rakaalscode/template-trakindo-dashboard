// In your Javascript (external .js resource or <script> tag)

// ========== NEW DOCUMENT ==========
  // Drawer New Document 
  function toggleNewDocument(drawerID, modalID) {
    document.getElementById(drawerID).classList.toggle("transform-none");
    document.getElementById(drawerID).classList.toggle("translate-x-full");

    if(modalID) {
      modalConfirmDocument(modalID)
    }
    
    // backdrop
    document.body.style.overflow = (document.getElementById(drawerID + "-backdrop").classList.contains("hidden")) ? "hidden" : "auto";
    document.getElementById(drawerID + "-backdrop").classList.toggle("hidden");
    document.getElementById(drawerID + "-backdrop").classList.toggle("flex");
  }

  // Button action Document
  function ActionDocument(modalID, drawerID, snackbarID, type) {
    let textAlert = document.getElementById('text_snackbar_alert');
    let bgAlert = document.getElementById('bg_snackbar_alert');
    let iconAlert = document.getElementById('icon_snackbar_alert');

    if(type == 'draft') {
      textAlert.textContent = "Invoice A/20230308/2 has been saved as draft";
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-110');
      bgAlert.classList.add('bg-cloudy-110');
      iconAlert.classList.remove('flex');
      iconAlert.classList.add('hidden');
    } else if(type == 'submit') {
      textAlert.textContent = "Invoice A/20230308/2 has been submitted to Trakindo Team";
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-110');
      bgAlert.classList.add('bg-blue_general');
      iconAlert.classList.remove('hidden');
      iconAlert.classList.add('flex');
    } else if(type == 'excel') {
      textAlert.textContent = "Excel file containing Invoice Documents has been successfully generated and downloaded.";
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-110');
      bgAlert.classList.add('bg-cloudy-110');
      iconAlert.classList.remove('flex');
      iconAlert.classList.add('hidden');
    }

    if(modalID) {
      modalConfirmDocument(modalID)
    }

    if(type == 'excel') {
      modalSnackbar(snackbarID)
      document.getElementById(drawerID + "-backdrop").classList.toggle("hidden");
      document.getElementById(drawerID + "-backdrop").classList.toggle("flex");
    } else {
      modalSnackbar(snackbarID)
      document.getElementById(drawerID).classList.toggle("transform-none");
      document.getElementById(drawerID).classList.toggle("translate-x-full");
    }

    startCountdown('countdown_snackbar', 3, function() {
      modalSnackbar(snackbarID);
      document.getElementById(drawerID + "-backdrop").classList.toggle("hidden");
      document.getElementById(drawerID + "-backdrop").classList.toggle("flex");
    });
  }

  // Modal new document confirm
  function modalConfirmDocument(modalID){
    // modal ID
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }

// ========== NEW DOCUMENT ==========

// ========== DETAIL DOCUMENT ==========
  // Drawer New Document 
  function toggleDetailDocument(drawerID, snackbarID, type , snackStatus = true) {
    document.getElementById(drawerID).classList.toggle("transform-none");
    document.getElementById(drawerID).classList.toggle("translate-x-full");

    // snackbar alert 
    let textAlert = document.getElementById('text_snackbar_alert');
    let bgAlert = document.getElementById('bg_snackbar_alert');
    let iconAlert = document.getElementById('icon_snackbar_alert');

    // detail column
    let detailLastupdate = document.getElementById('detail_lastupdate-id');
    let detailDate = document.getElementById('detail_date-id');
    let detailNumber = document.getElementById('detail_number-id');
    let detailStatusCol = document.getElementById('detail_status-id');
    let decision1 = document.getElementById('detail_decision1-id');
    let decision2 = document.getElementById('detail_decision2-id');
    let resubmitBtn = document.getElementById('resubmit_button-id');

    let closeDoc = document.getElementById('document_detail_close-id');
    let detailStatus = document.getElementById('status_detail-id');
    let iconStatus = document.getElementById('status_detail_icon-id');
    let textStatus = document.getElementById('status_detail_name-id');
    let textStatusFile = document.getElementById('status_detail_name_file-id');

    detailLastupdate.classList.remove("hidden");
    detailStatusCol.children[0].classList.add("rounded-bl-lg");
    detailStatusCol.children[1].classList.remove("bg-cloudy-20" , "bg-white");
    detailStatusCol.children[1].classList.add("rounded-br-lg", "bg-cloudy-20");
    detailDate.classList.add("hidden");
    detailNumber.classList.add("hidden");

    detailStatus.children[1].classList.remove("hidden");
    detailStatus.children[1].classList.add("hidden");

    decision1.children[0].children[0].classList.remove("bg-error-50", "text-error-700", "bg-warning-50", "text-warning-700", "bg-success-50", "text-success-700");
    decision1.children[0].children[1].classList.add("hidden");
    decision2.children[0].children[0].classList.remove("bg-error-50", "text-error-700", "bg-warning-50", "text-warning-700", "bg-success-50", "text-success-700");
    decision2.children[0].children[1].classList.add("hidden");

    resubmitBtn.classList.add("hidden");
    resubmitBtn.removeAttribute("onclick")

    const actionType = type.split('-')[1];
    let actionName = "";
    if(actionType) {
      if(actionType == 'revise') {
        actionName = "Revise File";
      } else if(actionType == 'hardcopy') {
        actionName = "Send Hard Copy";
      }
    } else {
      textStatusFile.textContent = actionName;
    }
    
    if(type == 'reject') {
      textAlert.textContent = "Invoice A/20230308/2 has been Rejected";
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-110');
      bgAlert.classList.add('bg-red_general');
      iconAlert.classList.remove('flex');
      iconAlert.classList.add('hidden');

      closeDoc.setAttribute("onclick", "toggleDetailDocument('" + drawerID + "', 'snackbar-id', '" + type + "', true)")
      detailStatus.classList.add('cursor-pointer');
      detailStatus.setAttribute("onclick", "toggleModal('modal_status-id', '" + type + "')")
      textStatus.textContent = "Rejected";
      iconStatus.classList.remove("bg-warning-50", "bg-blue_2-20", "bg-warning-100", "bg-success-100");
      iconStatus.classList.add('bg-warning-50');
      iconStatus.innerHTML = "";
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-alert-filled.svg" alt="alert">`;

      decision1.children[0].children[0].classList.add("bg-error-50", "text-error-700");
      decision1.children[0].children[0].innerHTML = "";
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F04438"></circle>
        </svg>Rejected
      `;
      decision2.children[0].children[0].classList.add("bg-error-50", "text-error-700");
      decision2.children[0].children[0].innerHTML = "";
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F04438"></circle>
        </svg>Rejected
      `;

    } else if(type == 'submit') {
      textAlert.textContent = "Invoice A/20230308/2 has been submitted to Trakindo Team";
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-110');
      bgAlert.classList.add('bg-blue_general');
      iconAlert.classList.remove('hidden');
      iconAlert.classList.add('flex');

      detailLastupdate.classList.add("hidden");
      detailStatusCol.children[0].classList.remove("rounded-bl-lg");
      detailStatusCol.children[1].classList.remove("rounded-br-lg");
      detailDate.classList.remove("hidden");
      detailDate.children[1].classList.add("italic");
      detailNumber.classList.remove("hidden");
      detailNumber.children[1].classList.add("italic");

      closeDoc.setAttribute("onclick", "toggleDetailDocument('" + drawerID + "', 'snackbar-id', '" + type + "', false)")
      detailStatus.classList.remove('cursor-pointer');
      // detailStatus.setAttribute("onclick", "toggleModal('modal_status-id', '" + type + "')")
      textStatus.textContent = "Submitted to Finance";
      iconStatus.classList.remove("bg-warning-50", "bg-blue_2-20", "bg-warning-100", "bg-success-100");
      iconStatus.classList.add('bg-blue_2-20');
      iconStatus.innerHTML = "";
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-history-filled.svg" alt="history">`;

      decision1.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision1.children[0].children[0].innerHTML = "";
      decision1.children[0].children[0].innerHTML += `
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
        <circle cx="4" cy="4" r="3" fill="#12B76A"/>
      </svg> Approved
      `;

      decision2.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision2.children[0].children[0].innerHTML = "";
      decision2.children[0].children[0].innerHTML += `
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
        <circle cx="4" cy="4" r="3" fill="#12B76A"/>
      </svg> Approved
      `;
    } else if(type == 'approve') {
      detailLastupdate.classList.add("hidden");
      detailStatusCol.children[0].classList.remove("rounded-bl-lg");
      detailStatusCol.children[1].classList.remove("rounded-br-lg");
      detailDate.classList.remove("hidden");
      detailDate.children[1].classList.add("italic");
      detailNumber.classList.remove("hidden");
      detailNumber.children[1].classList.add("italic");

      closeDoc.setAttribute("onclick", "toggleDetailDocument('" + drawerID + "', 'snackbar-id', '" + type + "', false)")
      detailStatus.classList.remove('cursor-pointer');
      // detailStatus.setAttribute("onclick", "toggleModal('modal_status-id', '" + type + "')")
      textStatus.textContent = "Payment Complete";
      iconStatus.classList.remove("bg-warning-50", "bg-blue_2-20", "bg-warning-100", "bg-success-100");
      iconStatus.classList.add('bg-success-100');
      iconStatus.innerHTML = "";
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-check-filled.svg" alt="check">`;

      decision1.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision1.children[0].children[0].innerHTML = "";
      decision1.children[0].children[0].innerHTML += `
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
        <circle cx="4" cy="4" r="3" fill="#12B76A"/>
      </svg> Approved
      `;

      decision2.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision2.children[0].children[0].innerHTML = "";
      decision2.children[0].children[0].innerHTML += `
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
        <circle cx="4" cy="4" r="3" fill="#12B76A"/>
      </svg> Approved
      `;
      
    } else if(type == 'action_needed-revise') {

      detailStatusCol.children[1].classList.remove("bg-cloudy-20");
      detailStatusCol.children[1].classList.add("bg-white");

      closeDoc.setAttribute("onclick", "toggleDetailDocument('" + drawerID + "', 'snackbar-id', '" + type + "', false)")
      detailStatus.children[1].classList.remove("hidden");
      detailStatus.classList.add('cursor-pointer');
      detailStatus.setAttribute("onclick", "toggleModal('modal_status_"+ actionType +"-id', '" + type + "')")
      textStatus.textContent = "Action Needed";
      textStatusFile.textContent = actionName;
      iconStatus.classList.remove("bg-warning-50", "bg-blue_2-20", "bg-warning-100", "bg-success-100");
      iconStatus.classList.add('bg-warning-100');
      iconStatus.innerHTML = "";
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-warning-filled.svg" alt="warning">`;

      resubmitBtn.classList.remove("hidden");
      resubmitBtn.classList.add("flex");
      resubmitBtn.setAttribute("onclick", "toggleModal('modal_status_"+ actionType +"-id', '" + type + "')")

      decision1.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision1.children[0].children[0].innerHTML = "";
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#12B76A"/>
        </svg> Approved
      `;

      decision2.children[0].children[0].classList.add("bg-warning-50", "text-warning-700");
      decision2.children[0].classList.add("cursor-pointer");
      decision2.children[0].setAttribute("onclick", "toggleModal('modal_status_"+ actionType +"-id', '" + type + "')")
      decision2.children[0].children[1].classList.remove('hidden');
      decision2.children[0].children[0].innerHTML = "";
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F79009"/>
        </svg> Action Needed
      `;

    } else if(type == 'action_needed-hardcopy') {

      detailStatusCol.children[1].classList.remove("bg-cloudy-20");
      detailStatusCol.children[1].classList.add("bg-white");

      closeDoc.setAttribute("onclick", "toggleDetailDocument('" + drawerID + "', 'snackbar-id', '" + type + "', false)")
      detailStatus.children[1].classList.remove("hidden");
      detailStatus.classList.add('cursor-pointer');
      detailStatus.setAttribute("onclick", "toggleModal('modal_status_"+ actionType +"-id', '" + type + "')")
      textStatus.textContent = "Action Needed";
      textStatusFile.textContent = actionName;
      iconStatus.classList.remove("bg-warning-50", "bg-blue_2-20", "bg-warning-100", "bg-success-100");
      iconStatus.classList.add('bg-warning-100');
      iconStatus.innerHTML = "";
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-warning-filled.svg" alt="warning">`;

      resubmitBtn.classList.remove("hidden");
      resubmitBtn.classList.add("flex");
      resubmitBtn.setAttribute("onclick", "toggleModal('modal_status_"+ actionType +"-id', '" + type + "')")

      decision1.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision1.children[0].children[0].innerHTML = "";
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#12B76A"/>
        </svg> Approved
      `;

      decision2.children[0].children[0].classList.add("bg-warning-50", "text-warning-700");
      decision2.children[0].classList.add("cursor-pointer");
      decision2.children[0].setAttribute("onclick", "toggleModal('modal_status_"+ actionType +"-id', '" + type + "')")
      decision2.children[0].children[1].classList.remove('hidden');
      decision2.children[0].children[0].innerHTML = "";
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F79009"/>
        </svg> Action Needed
      `;
    }

    document.body.style.overflow = (document.getElementById(drawerID + "-backdrop").classList.contains("hidden")) ? "hidden" : "auto";

    if(snackStatus) {
    // snackbar close in 3s 
      modalSnackbar(snackbarID);
      startCountdown('countdown_snackbar', 3, function() {
        modalSnackbar(snackbarID);
        document.getElementById(drawerID + "-backdrop").classList.toggle("hidden");
        document.getElementById(drawerID + "-backdrop").classList.toggle("flex");
      });
    } else {
      // backdrop
      document.getElementById(drawerID + "-backdrop").classList.toggle("hidden");
      document.getElementById(drawerID + "-backdrop").classList.toggle("flex");
    }
  }
// ========== DETAIL DOCUMENT ==========

// ========== GLOAL FUNCTION ==========

  

  // Modal snackbar 
  function modalSnackbar(modalID) {

    document.body.style.overflow = (document.getElementById(modalID).classList.contains("hidden")) ? "hidden" : "auto";
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
  }

  function selectRows(selectedElement) {
    let selectedValue = selectedElement.getAttribute('value-data');
    document.getElementById('rows_data-id').innerText = selectedValue;
    document.getElementById('rows_value-id').innerText = selectedValue;
    // Close the dropdown or perform any other actions as needed
    // ...
    // Optional: Hide the dropdown after selection
    document.getElementById('rows_paginate_list-id').classList.add('hidden');
  }

  function toggle(elementID) {
    document.getElementById(elementID).classList.toggle("hidden");
    document.getElementById(elementID).classList.toggle("flex");
  }

  function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    
    if(document.getElementById(modalID + "-backdrop")) {

      document.body.style.overflow = (document.getElementById(modalID + "-backdrop").classList.contains("hidden")) ? "hidden" : "auto";
      document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
      document.getElementById(modalID + "-backdrop").classList.toggle("flex");
    }
  }

  

  