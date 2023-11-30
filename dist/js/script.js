// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
  $('.js-icon-single').select2({
    minimumResultsForSearch: Infinity, // disable search
    placeholder: 'Select Service',
    selectionCssClass: 'select2-custom focus:outline-none focus:border-primary-500 focus:ring-0 focus:ring-primary-500',
    templateResult: formatOption, // Function for formatting the display of options,
  });
  
  // Function to format the display of options
  function formatOption(option) {
    if (!option.id) {
      return option.text;
    }

    var $option = $(
      `<div class="flex items-center justify-between rounded bg-white border border-cloudy-0 px-4 py-3 hover:bg-cloudy-10">
        <div class="flex items-center gap-4">
          <img src="${$(option.element).data('image')}" class="w-10 h-10 rounded-full object-cover" alt="logo">
          <span class="text-sm font-medium text-secondary-900">${option.text}</span>
        </div>
        <img src="/dist/images/icons/checkbox-primary.svg" class="hidden" alt="checkbox">
      </div>`
    );

    return $option;
  }

  flatpickr(".datepicker-flatpickr-custom", {
    defaultDate: new Date(),
    dateFormat: "d/m/Y",
    disableMobile: "true",
    locale: {
      firstDayOfWeek: 1, // 1 is Monday
      weekdays: {
        shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      },
    },
    prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`, // Use Font Awesome icon as an example
    nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  });

  flatpickr(".datepicker-flatpickr-range", {
    dateFormat: "d/m/Y",
    disableMobile: "true",
    locale: {
      firstDayOfWeek: 1, // 1 is Monday
      weekdays: {
        shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      },
    },
    prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`, // Use Font Awesome icon as an example
    nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  });
});



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
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-60');
      bgAlert.classList.add('bg-cloudy-60');
      iconAlert.classList.remove('flex');
      iconAlert.classList.add('hidden');
    } else if(type == 'submit') {
      textAlert.textContent = "Invoice A/20230308/2 has been submitted to Trakindo Team";
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-60');
      bgAlert.classList.add('bg-blue_general');
      iconAlert.classList.remove('hidden');
      iconAlert.classList.add('flex');
    } else if(type == 'excel') {
      textAlert.textContent = "Excel file containing Invoice Documents has been successfully generated and downloaded.";
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-60');
      bgAlert.classList.add('bg-cloudy-60');
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
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-60');
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
      bgAlert.classList.remove('bg-blue_general', 'bg-red_general', 'bg-cloudy-60');
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

  // Copy to clipboard 
  function copyToClipboard(elementIdOrText) {
    let copyText;

    if (typeof elementIdOrText === 'string') {
      // If the argument is a string, assume it's an element ID
      let element = document.getElementById(elementIdOrText);

      if (element) {
        // If the element is found, get its text content
        copyText = element.textContent || element.innerText;
      } else {
        console.error('Element with ID ' + elementIdOrText + ' not found.');
        return;
      }
    } else if (typeof elementIdOrText === 'object' && elementIdOrText.nodeType === 1) {
      // If the argument is an HTML element, get its text content
      copyText = elementIdOrText.textContent || elementIdOrText.innerText;
    } else {
      console.error('Invalid argument. Please provide an element ID or an HTML element.');
      return;
    }

    // Create a temporary textarea to copy the text
    let tempTextArea = document.createElement('textarea');
    tempTextArea.value = copyText;
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea
    tempTextArea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Alert the user that the text has been copied (you can use other feedback mechanisms)
    alert("Text copied: " + copyText);
  }

  // Toggle Accordion 
  function toggleAccordion(event, contentId) {
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    const content = document.getElementById(contentId);

    const arrowIcon = element.querySelector('svg');
    if(arrowIcon) {
      arrowIcon.classList.toggle('rotate-180'); // Assuming you have a tailwind class for rotating the icon
    }
    content.classList.toggle('hidden');
    content.classList.toggle('block');
  }

  // Modal snackbar 
  function modalSnackbar(modalID) {

    document.body.style.overflow = (document.getElementById(modalID).classList.contains("hidden")) ? "hidden" : "auto";

    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
  }

  // Start countdown
  function startCountdown(className, durationInSeconds, callback) {
    let countdownValue = durationInSeconds;
    // let elementCountdown = document.getElementById(elementId);
    let elementsCountdown = document.getElementsByClassName(className);

    function updateCountdown() {
      // elementCountdown.textContent = countdownValue;
      // Update all elements with the specified class
      for (let i = 0; i < elementsCountdown.length; i++) {
        elementsCountdown[i].textContent = countdownValue;
      }
      countdownValue--;

      if (countdownValue < 0) {
        // Call the provided callback function when the countdown reaches 0
        if (typeof callback === 'function') {
          callback();
        }
      } else {
        setTimeout(updateCountdown, 1000);
      }
    }
    // Initial call to start the countdown
    updateCountdown();
  }

  // Toggle search 
  function toggleSearch() {
    let searchIcon = document.getElementById('searchIcon-id');
    let searchContainer= document.getElementById('searchCon-id');

    searchIcon.classList.toggle('hidden');
    searchContainer.classList.toggle('hidden');
  }

  // Dropdown function 
  function openDropdown(event, dropdownID, position = 'bottom-end', strategy = "absolute"){
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    var popper = Popper.createPopper(element, document.getElementById(dropdownID), {
      placement: position,
      strategy: strategy
    });
    
    if(document.getElementById(dropdownID + "-backdrop")) {
      document.getElementById(dropdownID + "-backdrop").classList.toggle("hidden");
      document.getElementById(dropdownID + "-backdrop").classList.toggle("flex");
    }
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");
    // Toggle arrow icon
    const arrowIcon = element.querySelector('img.'+dropdownID);
    if(arrowIcon) {
      arrowIcon.classList.toggle('rotate-180'); // Assuming you have a tailwind class for rotating the icon
    }
  }

  function selectRows(selectedElement) {
    var selectedValue = selectedElement.getAttribute('value-data');
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

  function handleFileSelect(inputID, buttonID, tableID, dropzoneID) {
    let fileInput = document.getElementById(inputID);
    let buttonUpload = document.getElementById(buttonID);
    let dropZone = document.getElementById(dropzoneID);
    let fileTable = document.getElementById(tableID);

    fileInput.addEventListener('change', function() {
        dropZone.classList.remove("hidden", "flex");
        dropZone.classList.add("hidden");

        fileTable.classList.remove("hidden", "block");
        fileTable.classList.add("block");

        buttonUpload.disabled = false;
        buttonUpload.setAttribute("onclick", "toggleDetailDocument('drawer_document_detail-id', 'snackbar-id', 'submit', true);toggleModal('modal_status_revise_upload-id')")
      // updateFileTable(fileInput, fileTable);
    });
  }

  function handleDeleteFile(inputID, buttonID, tableID, dropzoneID) {
    let fileInput = document.getElementById(inputID);
    let buttonUpload = document.getElementById(buttonID);
    let dropZone = document.getElementById(dropzoneID);
    let fileTable = document.getElementById(tableID);

    fileInput.value = '';

    dropZone.classList.remove("hidden", "flex");
    dropZone.classList.add("flex");

    fileTable.classList.remove("hidden", "block");
    fileTable.classList.add("hidden");

    buttonUpload.disabled = true;
    buttonUpload.removeAttribute("onclick");
  }

  function handleSubmitHardcopy(event, formID) {
    let form = document.getElementById(formID);

    if (form.checkValidity()) {
      toggleModal('modal_status_hardcopy-id')
      toggleDetailDocument('drawer_document_detail-id', 'snackbar-id', 'submit', true)
    }
  }

  function openTab(button) {
    let tabButtons = document.querySelectorAll('.tabs li span');
    tabButtons.forEach(function(tabButton) {
      tabButton.classList.remove('active-tab');
    });

    if (button) {
      button.classList.add('active-tab');
    }
  }

  function openTabContent(tabId, button) {
    // Hide all tabs and remove active class from all buttons
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.add('hidden');
    });

    let tabButtons = document.querySelectorAll('.tabs button');
    tabButtons.forEach(function(tabButton) {
      tabButton.classList.remove('active-tab-2');
    });

    // Show the selected tab and add active class to the clicked button
    let selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
        selectedTab.classList.add('block');
    }

    if (button) {
      button.classList.add('active-tab-2');
    }
  }