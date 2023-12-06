$(document).ready(function() {
  
  $('#new_role-id').select2({
    theme: 'custom-theme1-1', 
    minimumResultsForSearch: Infinity, // disable search
    templateResult: formatOption, // Function for formatting the display of options,
  });

   // Attach an event listener for the "select2:select" event
   $("#new_role-id").on("select2:select", function (e) {
    let selectedOption = e.params.data;
    
    let optionABEl = document.getElementById('option_ab');
    let optionBEl = document.getElementById('option_between');
    let optionBEl2 = document.getElementById('option_between2');

    if(selectedOption.id == 'above' || selectedOption.id == 'below') {
      optionABEl.classList.add('flex');
      optionBEl.classList.add('hidden');
      optionBEl2.classList.add('hidden');
      optionABEl.classList.remove('hidden');
      optionBEl.classList.remove('hidden');
      optionBEl2.classList.remove('hidden');
      optionBEl.classList.add('hidden');
      optionBEl2.classList.add('hidden');
    } 
    else if(selectedOption.id == 'between') {
      optionABEl.classList.add('hidden');
      optionBEl.classList.remove('hidden');
      optionBEl2.classList.remove('hidden');
      optionABEl.classList.add('hidden');
      optionBEl.classList.remove('hidden');
      optionBEl2.classList.remove('hidden');
      optionBEl.classList.add('flex');
      optionBEl2.classList.add('flex');
    }
  });

  $('#expedition_select-id').select2({
    theme: 'custom-theme', 
    minimumResultsForSearch: Infinity, // disable search
    placeholder: 'Select Service',
    templateResult: formatOption1, // Function for formatting the display of options,
  });
 
  // STATUS FILTER SELECT2 

  $('#status_filter-id').select2({
    theme: 'custom-theme-3', 
    minimumResultsForSearch: Infinity, // disable search
    selectionCssClass: 'select2-custom-selection',
    dropdownCssClass: 'select2-custom-dropdown',
    templateResult: formatOption4, // Function for formatting the display of options,
  });

  $('#status_filter-id').on('select2:open', function() {
    let parentElement = document.getElementById('status_filter-id').parentNode;
    let backdropEl = document.createElement('div');
    let getRect = parentElement.getBoundingClientRect()
    
    parentElement.classList.add('z-60');
    backdropEl.innerHTML = `<div id="${'status_filter-id'}-backdrop" class="flex bg-black/20 fixed inset-0 z-50"></div>`;
    document.body.appendChild(backdropEl);
    document.body.style.paddingBottom = "10rem"
    window.scrollTo({
      top: window.scrollY + getRect.top - 300,
      behavior: 'auto'  // You can use 'auto' instead of 'smooth' for an instant scroll
    });
    document.body.style.overflow = "hidden";
  });

  $('#status_filter-id').on('select2:close', function() {
    let parentElement = document.getElementById('status_filter-id').parentNode;
    parentElement.classList.remove('z-60');
    document.getElementById(`${'status_filter-id'}-backdrop`).remove();
    document.body.style.paddingBottom = "0"
    document.body.style.overflow = "auto";
  });


  // RATE SELECT2 

  $('#rate_field-id').select2({
    theme: 'custom-theme-3', 
    placeholder: 'Rp 1.000.000 - Rp 5.000.000',
    minimumResultsForSearch: Infinity, // disable search
    dropdownCssClass: 'select2-container--bottom',
    templateResult: formatOption4, // Function for formatting the display of options,
  });


  // $('#rate_field-id').on('select2:open', function() {
  // });


  // GL SELECT2 

  // gl search account
  $('#gl_account-id').select2({
    theme: 'custom-theme-2', 
    placeholder: 'Search',
    closeOnSelect: true,
    templateResult: formatOption2, // Function for formatting the display of options,
  });

  // open modal gl account 
  $('#gl_search_data-id').on('click', function() {
    // Trigger the select2 dropdown to open
    toggleModalDialog('modal_gl_account-id')
    $('#gl_account-id').select2('open');
  });

  // open gl account
  $('#gl_account-id').on('select2:open', function() {
    console.log('open select');
    $('#card_gl_account-id').height("444px");
  });

  // close gl account
  $('#gl_account-id').on('select2:close', function() {
    console.log('close');
    
    $('#gl_search_data-id').val($(this).find(':selected').text());
    toggleModalDialog('modal_gl_account-id');
    $('#card_gl_account-id').height('auto');
  });

  // COST SELECT2 

  // cost search account
  $('#cost_center-id').select2({
    theme: 'custom-theme-2', 
    placeholder: 'Search',
    closeOnSelect: true,
    templateResult: formatOption2, // Function for formatting the display of options,
  });

  // open modal cost 
  $('#cost_center_data-id').on('click', function() {
    // Trigger the select2 dropdown to open
    toggleModalDialog('modal_cost_center-id');
    $('#cost_center-id').select2('open');
  });

  // open cost
  $('#cost_center-id').on('select2:open', function() {
    console.log('open select');
    $('#card_cost_center-id').height("444px");
  });

  // close cost
  $('#cost_center-id').on('select2:close', function() {
    console.log('close');
    
    $('#cost_center_data-id').val($(this).find(':selected').text());
    toggleModalDialog('modal_cost_center-id');
    $('#card_cost_center-id').height('auto');
  });

  // YARD LEADER SELECT2 

  // cost search account
  $('#yard_leader-id').select2({
    theme: 'custom-theme-2', 
    placeholder: 'Find Name',
    closeOnSelect: true,
    templateSelection: function(data, container) {
      let optionData = data.text.split('*');
      let text = optionData[0];
      if (data.element) {
        return $('<span>' + text + '</span>');
      }
      return data.text;
    },
    templateResult: formatOption3, // Function for formatting the display of options,
  });

  // open yard lrader
  $('#yard_leader-id').on('select2:open', function() {
    let selectedOptions = $('#yard_leader-id').val();
    let selectionHeight = $('.select2-selection--multiple').outerHeight();
    let h;
    if(selectedOptions && selectedOptions.length > 0) {
      h = 452;
      $('#btn_yard-id').removeClass("hidden");
    } else {
      h = 400;
      $('#btn_yard-id').addClass("hidden");
    }
    let newHeight = selectionHeight + h;
    $('#card_yard_leader-id').height(`${newHeight}px`);
  });

  // close yard lrader
  $('#yard_leader-id').on('select2:close', function() {
    let selectedOptions = $('#yard_leader-id').val();
    let selectionHeight = $('.select2-selection--multiple').outerHeight();
    let h;
    if(selectedOptions && selectedOptions.length > 0) {
      h = 124;
      $('#btn_yard-id').removeClass("hidden");
    } else {
      h = 72;
      $('#btn_yard-id').addClass("hidden");
    }
    let newHeight = selectionHeight + h;
    $('#card_yard_leader-id').height(`${newHeight}px`);
  });

    // Function to format the display of options
    function formatOption(option) {
      if (!option.id) {
        return option.text;
      }
  
      let $option = $(
        `<div class="border-b-2 border-transparent py-2 px-2 text-secondary-500 font-medium">
          <span>${option.text}</span>
        </div>`
      );
  
      return $option;
    }

  // Function to format the display of options 1
  function formatOption1(option) {
    if (!option.id) {
      return option.text;
    }

    let $option = $(
      `<div class="flex items-center justify-between rounded bg-white px-4 py-3 hover:bg-cloudy-10 group">
        <div class="flex items-center gap-4">
          <img src="${$(option.element).data('image')}" class="w-10 h-10 rounded-full object-cover" alt="logo">
          <span class="text-sm font-medium text-secondary-900 group-hover:text-secondary-900">${option.text}</span>
        </div>
        <img src="/dist/images/icons/checkbox-primary.svg" class="hidden" alt="checkbox">
      </div>`
    );

    return $option;
  }

  // Function to format the display of options 2
  function formatOption2(option) {
    if (!option.id) {
      return option.text;
    }

    let optionData = option.text.split(' - ');
    let number = optionData[0];
    let name = optionData[1];

    let $option = $(
      `<div class="block text-base font-medium bg-white px-2 py-3 border-b border-cloudy-140 mb-3 hover:bg-cloudy-10">
        <span class="inline-block text-gray-700 font-normal">${number}</span> - <span class="inline-block text-gray_natural-1300">${name}</span>
      </div>`
    );

    return $option;
  }

  // Function to format the display of options 3
  function formatOption3(option) {
    if (!option.id) {
      return option.text;
    }

    let optionData = option.text.split('*');
    let text = optionData[0];
    let subtext = optionData[1];

    let $option = $(
      `<div class="group flex items-center justify-between rounded-md bg-transparent border border-cloudy-0 px-4 py-3 gap-4 mb-2 hover:bg-squash-1">
        <img src="/dist/images/icons/checkbox-primary.svg" class="hidden group-hover:block" alt="checkbox">
        <div class="block h-5 w-5 bg-white border border-gray-300 rounded-md whitespace-nowrap checkbox group-hover:hidden"></div>
        <div class="flex flex-1 items-center gap-4">
          <img src="${$(option.element).data('image')}" class="w-10 h-10 rounded-full object-cover" alt="logo">
          <div class="flex flex-col items-start gap-1">
            <span class="block text-base font-medium text-secondary-900">${text}</span>
            <span class="block text-sm font-medium text-secondary-500">${subtext}</span>
          </div>
        </div>
      </div>`
    );

    return $option;
  }

  // Function to format the display of options 4
  function formatOption4(option) {
    if (!option.id) {
      return option.text;
    }

    let $option = $(
      `<div class="flex items-center justify-between text-secondary-900 px-[14px] py-[10px] bg-white gap-2 group hover:bg-yellow-0">
        <span>${option.text}</span>
        <img src="/dist/images/icons/check.svg" class="group-hover:block hidden" alt="check">
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
    </svg>`,
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
    </svg>`,
    nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="rotate-180">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  });
});
  
  function scrollList(offset) {
    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.scrollBy({ left: offset, behavior: 'smooth' });
  }

  function selectDropdown(event,dropdownID){
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    let popper = Popper.createPopper(element, document.getElementById(dropdownID), {
      placement: 'bottom-start'
    });

    let dropdownEl = document.getElementById(dropdownID);
    // backdrop 
    let backdropEl = document.createElement('div');
    if(dropdownEl.classList.contains("hidden")) {
      backdropEl.innerHTML = `<div id="${dropdownID}-backdrop" class="flex bg-black/20 fixed inset-0 z-50"></div>`;
      document.body.appendChild(backdropEl);
      document.body.style.overflow = "hidden"
    } else {
      document.getElementById(`${dropdownID}-backdrop`).remove();
      document.body.style.overflow = "auto"
    }

    dropdownEl.classList.toggle("hidden");
    dropdownEl.classList.toggle("block");
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

  function selectOption(event, selectedID) {
    let element = event.target;
    let selectedItem = document.getElementById(selectedID).children[0];
    let option = document.getElementById(element.parentNode.getAttribute("id"));
    let yardLeader = document.getElementById('yard_group_value-id')

    selectedItem.className = element.className // replace class
    selectedItem.setAttribute("data-value", element.getAttribute('data-value')) // set value
    selectedItem.firstChild.nodeValue = element.firstChild.nodeValue; // set name
    selectedItem.children[0].classList = [];
    selectedItem.children[0].classList.add(element.children[0].className.baseVal)

    yardLeader.classList.remove('flex');
    yardLeader.classList.add('hidden');
    yardLeader.children[0].textContent = '';
    yardLeader.children[1].textContent = '';

    // backdrop 
    toggleBackdrop(element.parentNode.getAttribute("id"))

    option.classList.add("hidden");
    option.style = '';

    let statusEl = document.getElementById("status_value-id");
    if(selectedItem.getAttribute('data-value') == 'revision') {
      statusEl.value = selectedItem.getAttribute('data-value');

      document.getElementById("note_icon-id").setAttribute('src', '/dist/images/icons/note_blue.svg');
      document.getElementById("note_title-id").textContent = "Add Revision Notes"

      toggleModalDialog('modal_status-id');
    } else if(selectedItem.getAttribute('data-value') == 'rejected') { 
      statusEl.value = selectedItem.getAttribute('data-value');

      document.getElementById("note_icon-id").setAttribute('src', '/dist/images/icons/note_red.svg');
      document.getElementById("note_title-id").textContent = "Add Rejected Notes"

      toggleModalDialog('modal_status-id');
    } else if(selectedItem.getAttribute('data-value') == 'verified') { 
      toggleSnackbar("snackbar-id", 'verified');
    } else if(selectedItem.getAttribute('data-value') == 'approved') { 
      toggleSnackbar("snackbar-id", 'approved');
    } else if(selectedItem.getAttribute('data-value') == 'assign_to_yard_leader') {
      toggleModalDialog('modal_yard_leader-id', 'z-30', 'dynamic');
    }
    
  }

  function checkInput(event, buttonID) {
    let element = event.target;
    let submitButton = document.getElementById(buttonID);

    // Enable the button if there is input, otherwise disable it
    submitButton.disabled = !element.value.trim();
  }

  function clearForm(formID) {
    var formEl = document.getElementById(formID);
    // Loop through all formEl elements
    for (var i = 0; i < formEl.elements.length; i++) {
      var element = formEl.elements[i];
      // Check if the element is an input, select, or textarea
      if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
        // Clear the value of the element
        element.value = '';
      }
    }
  }

  function submitNote(modalID, formID) {
    let statusEl = document.getElementById("status_value-id");

    toggleSnackbar("snackbar-id", statusEl.value);
    
    clearForm(formID)
    toggleModalDialog(modalID);
  }

  function saveNextInvoice() {
    let statulEl = document.getElementById("checking_status-id");
    let selectStatusElements = document.querySelectorAll('.select-status');

    for (let i = 0; i < selectStatusElements.length; i++) {
      let firstChild = selectStatusElements[i].children[0];
      let dataValue = firstChild.getAttribute('data-value');
      if (!dataValue.trim()) {
        statulEl.textContent = 'Decide each files status to finish the document checking';
        return false;
      }
    }

    statulEl.textContent = '';
    alert('save success');
    return true;
  }

  function assignYardLeader() {
    let selectedValues = $('#yard_leader-id').val();
    let groupData = document.getElementById('yard_group_value-id')
    let resultData = [];

    // Iterate over selected values and log data and text
    selectedValues.forEach(function(value) {
      let option = $('#yard_leader-id').find('option[value="' + value + '"]');

      let dataImage = option.data('image');
      let optionText = option.text();

      let item = {
        value: value,
        dataImage: dataImage,
        optionText: optionText
      };

      resultData.push(item);
    });

    if(selectedValues) {
      groupData.classList.remove('hidden');
      groupData.classList.add('flex');
      if(selectedValues && selectedValues.length == 1) {
        groupData.children[0].innerHTML = `<img class="w-8 h-8 border-[1.5px] border-warning_b_general rounded-full object-cover" src="${resultData[0].dataImage}" alt="avatar">`;
        groupData.children[1].innerHTML = `${selectedValues.length} Yard Leader`;
      } else if (selectedValues && selectedValues.length > 1) {
        let imagesData = ``;
        resultData.forEach(function(value) {
          imagesData += `<img class="w-8 h-8 object-cover border-[1.5px] border-warning_b_general rounded-full" src="${value.dataImage}" alt="avatar">`
        }); 
        groupData.children[0].innerHTML = `${imagesData}`;
        groupData.children[1].innerHTML = `${selectedValues.length} Yard Leader`;
      }
    }

    toggleModalDialog('modal_yard_leader-id');
  }

  function downloadInvoice() {
    toggleSnackbar("snackbar-id", "download");
  }

  function toggleSnackbar(modalID, type) {
    let snackbarEl = document.getElementById(modalID);

    toggleBackdrop(modalID);
    snackbarEl.classList.toggle("hidden");
    snackbarEl.classList.toggle("flex");

    // content
    let bgDefault = "";
    if(type == 'download' || type == 'draft' || type == 'gl-download' ) {
      bgDefault = 'bg-cloudy-110';
      let textContent = '';
      if(type == 'draft') {
        textContent = 'Invoice A/20230308/2 has been saved as draft';
      } else if(type == 'download') {
        textContent = 'Excel file containing Invoice Documents has been successfully generated and downloaded.';
      } else if(type == 'gl-download') {
        textContent = 'GL Account has been successfully generated and downloaded.';
      }
      contentSnackbar(snackbarEl, {
        bg: 'bg-cloudy-110', 
        icon: '', 
        text: textContent 
      })
    } else if(type == 'revision' || type == 'submit') {
      bgDefault = 'bg-blue_general';
      contentSnackbar(snackbarEl, {
        bg: 'bg-blue_general', 
        icon: 'info', 
        text: 'Invoice A/20230308/2 has been submitted to Trakindo Team' 
      })
    } else if(type == 'rejected') {
      bgDefault = 'bg-red_general';
      contentSnackbar(snackbarEl, {
        bg: 'bg-red_general', 
        icon: 'info', 
        text: 'Invoice A/20230308/2 has been Rejected' 
      })
    } else if(type == 'approved' || type == 'verified') {
      bgDefault = 'bg-green_general';
      contentSnackbar(snackbarEl, {
        bg: 'bg-green_general', 
        icon: 'check', 
        text: 'Invoice A/20230308/2 has been Verified by Finance' 
      })
    }

    startCountdown('countdown_snackbar', 3, function() {
      toggleBackdrop(modalID)

      contentSnackbar(snackbarEl, {
        bg: bgDefault, 
        icon: '', 
        text: '' 
      }, 'clear')

      snackbarEl.classList.toggle("hidden");
      snackbarEl.classList.toggle("flex");
    });
  }

  // Start countdown
  function startCountdown(className, durationInSeconds, callback) {
    let countdownValue = durationInSeconds;
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

  function contentSnackbar(modalID, object, type = 'show') {
    if(type == 'show') {
      modalID.children[0].classList.add(object.bg) // bg
      if(object.icon && object.icon == 'info') {
        modalID.children[0].children[0].children[0].classList.toggle("hidden")
        modalID.children[0].children[0].children[0].classList.toggle("block")
        modalID.children[0].children[0].children[0].setAttribute('src', '/dist/images/icons/info.svg')
      } else if (object.icon && object.icon == 'check') {
        modalID.children[0].children[0].children[0].classList.toggle("hidden")
        modalID.children[0].children[0].children[0].classList.toggle("block")
        modalID.children[0].children[0].children[0].setAttribute('src', '/dist/images/icons/checlistFilled.svg')
      }
      modalID.children[0].children[0].children[1].textContent = object.text // text
    } else if('clear') {
      modalID.children[0].classList.remove(object.bg) // bg
      // if(object.icon) {
      //   modalID.children[0].children[0].children[0].classList.toggle("hidden")
      //   modalID.children[0].children[0].children[0].classList.toggle("block")
      // }
      modalID.children[0].children[0].children[0].classList.add("hidden")
      modalID.children[0].children[0].children[0].classList.remove("block")
      modalID.children[0].children[0].children[0].setAttribute('src', '')
      modalID.children[0].children[0].children[1].textContent = "" // text
    }
  }

   // Toggle search 
  function toggleSearch() {
    let searchIcon = document.getElementById('searchIcon-id');
    let searchContainer= document.getElementById('searchCon-id');

    searchIcon.classList.toggle('hidden');
    searchContainer.classList.toggle('hidden');
  }

  // document.addEventListener('click', function(event) {
  //   let searchContainer = document.getElementById('searchCon-id');
  //   let searchCloseButton = document.getElementById('searchIcon-id');

  //   if(!searchContainer.contains(event.target)) {
  //     if(!searchContainer.classList.contains('hidden') && event.target !== searchCloseButton.children[0]) {
  //         searchContainer.classList.add('hidden');
  //         searchCloseButton.classList.remove('hidden');
  //     }
  //   }
  // });

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

  function toggleBackdrop(modalID, index = 'z-50', type = 'static', positionBackdrop = 'outside') {
    let modalEl = document.getElementById(modalID);
    if(modalEl.classList.contains("hidden")) {
      let backdropEl = document.createElement('div');
      if(type == 'dynamic') { 
        document.addEventListener('click', closeModalOnClickOutside);
      }

      backdropEl.innerHTML = `<div id="${modalID}-backdrop" class="flex bg-black/20 fixed inset-0 ${index}"></div>`;
      if(positionBackdrop == 'outside') {
        modalEl.parentNode.insertBefore(backdropEl, modalEl.nextSibling);
      } else {
        document.body.appendChild(backdropEl);
      }
      document.body.style.overflow = "hidden"
    } else {
      if(type == 'dynamic') { 
        document.removeEventListener('click', closeModalOnClickOutside);
      }
      document.getElementById(`${modalID}-backdrop`).parentNode.remove();
      document.body.style.overflow = "auto"
    }
  }

  function toggleBackdropdrawer(drawerID, index = 'z-50') {
    let backdropEl = document.getElementById(drawerID);
    if(backdropEl.classList.contains("translate-x-full")) {
      let backdropEl = document.createElement('div');
      backdropEl.innerHTML = `<div id="${drawerID}-backdrop" class="flex bg-black/20 fixed inset-0 ${index}"></div>`;
      document.body.appendChild(backdropEl);
      document.body.style.overflow = "hidden"
    } else {
      document.getElementById(`${drawerID}-backdrop`).remove();
      document.body.style.overflow = "auto"
    }
  }

  function closeModalOnClickOutside(event) {
    if(event.target.children[0] && event.target.children[0].children[0]) {
      if(event.target.children[0].children[0].getAttribute('id')) {
        let modalEl = document.getElementById(event.target.children[0].children[0].getAttribute('id'))
        if (!modalEl.contains(event.target)) {
          toggleModalDialog(event.target.getAttribute('id'))
        }
      }
    }
  }

  function toggleModalDialog(modalID, index = 'z-50', type = 'static', backdrop = 'inline') {
    let modalEl = document.getElementById(modalID);
    
    toggleBackdrop(modalID, index, type, backdrop);
    modalEl.classList.toggle("hidden");
    modalEl.classList.toggle("flex");
  }   
  
  // Dropdown function 
  function openDropdown(event, dropdownID, position = 'bottom-end', strategy = "absolute", scroll = false){
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    let popper = Popper.createPopper(element, document.getElementById(dropdownID), {
      placement: position,
      strategy: strategy
    });
    
    let dropdownEl = document.getElementById(dropdownID);
    // backdrop 
    
    if(!scroll) {
      if(dropdownEl.classList.contains("hidden")) {
        let getRect = event.target.getBoundingClientRect()
        let backdropEl = document.createElement('div');
  
        dropdownEl.parentNode.insertBefore(backdropEl, dropdownEl.nextSibling);
        backdropEl.innerHTML = `<div id="${dropdownID}-backdrop" class="flex bg-black/20 fixed inset-0 z-50"></div>`;
        if(scroll) {
          document.body.style.overflow = "auto"
        } else {
          document.body.style.paddingBottom = "10rem"

          window.scrollTo({
            top: window.scrollY + getRect.top - 120,
            behavior: 'auto'  // You can use 'auto' instead of 'smooth' for an instant scroll
          });

          document.body.style.overflow = "hidden"
        }
      } else {
        document.getElementById(`${dropdownID}-backdrop`).parentNode.remove();
        document.body.style.paddingBottom = "0"
        document.body.style.overflow = "auto"
      }
    }
    
    // Toggle arrow icon
    const arrowIcon = element.querySelector('img.'+dropdownID);
    if(arrowIcon) {
      arrowIcon.classList.toggle('rotate-180'); // Assuming you have a tailwind class for rotating the icon
    }

    dropdownEl.classList.toggle("hidden");
    dropdownEl.classList.toggle("block");
  }

  function toggleModalDialog(modalID, index = 'z-50', type = 'static', backdrop = 'inline') {
    let modalEl = document.getElementById(modalID);
    
    toggleBackdrop(modalID, index, type, backdrop);
    modalEl.classList.toggle("hidden");
    modalEl.classList.toggle("flex");
  }   

  function toggleDrawer(drawerID, type, index) {
    let drawerEl = document.getElementById(drawerID);

    toggleBackdropdrawer(drawerID, index);
    drawerEl.classList.toggle("transform-none");
    drawerEl.classList.toggle("translate-x-full");
  }

  function modalConfirm(modalID, index , static, position, clear) {
    toggleModalDialog(modalID, index, static, position)
    if(clear) {
      toggleDrawer('drawer_document-id');
    }
  }

  function toggleNotes(modalID, index, static, position, type) {
    let iconNote = document.getElementById("note_icon-id");
    let iconTitle = document.getElementById("note_title-id");
    let btnNote = document.getElementById("note_btn-id");
    let textNote = document.getElementById("note_text-id");

    iconNote.setAttribute('src', '');
    iconTitle.textContent = ""
    btnNote.classList.add("hidden");
    textNote.value += '';
    textNote.readOnly = false;

    if(type == 'reject') {
      iconNote.setAttribute('src', '/dist/images/icons/note_red.svg');
      iconTitle.textContent = "Add Rejected Notes"
      textNote.value += 'Lack of Clarity for all of the documents.';
      textNote.readOnly = true;
    } else if(type == 'revision') {
      iconNote.setAttribute('src', '/dist/images/icons/note_blue.svg');
      iconTitle.textContent = "Add Revision Notes"
      
    }

    toggleModalDialog(modalID, index, static, position);
  }

  function saveDocument(drawerID, type, confirmID) {
    toggleDrawer(drawerID, type);
    toggleSnackbar("snackbar-id", type);
    if(confirmID) {
      toggleModalDialog(confirmID, 'z-40', 'static', 'inline', 'clear')
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
        buttonUpload.setAttribute("onclick", `handleSubmitFile()`)
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

  function handleSubmitFile() {
    toggleDrawer('drawer_document_detail-id')
    toggleModalDialog('modal_status_revise_upload-id', 'z-40', 'static', 'inline')
    handleDeleteFile('upload_files_revise_input-id', 'upload_files_revise_btn-id', 'upload_files_revise_table-id', 'upload_files_revise-id');
    toggleSnackbar('snackbar-id', 'submit')
  }

  function handleSubmitHardcopy(event, formID) {
    let form = document.getElementById(formID);

    if (form.checkValidity()) {
      toggleModalDialog('modal_status_hardcopy-id')
      toggleDrawer('drawer_document_detail-id')
      clearForm(formID)
      toggleSnackbar('snackbar-id', 'submit');
    }
  }

  // Toggle Accordion 
  function toggleAccordion(event, contentId) {
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    const content = document.getElementById(contentId);

    const arrowIcon = element.querySelector('img');
    if(arrowIcon) {
      arrowIcon.classList.toggle('rotate-180'); // Assuming you have a tailwind class for rotating the icon
    }
    content.classList.toggle('hidden');
    content.classList.toggle('block');
  }

  function toggle(elementID) {
    document.getElementById(elementID).classList.toggle("hidden");
    document.getElementById(elementID).classList.toggle("flex");
  }

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

  function detailDrawer(drawerID, type) {
    toggleDrawer(drawerID, type)
    detailContent(type)
  }

  function detailContent(type) {
    let colStatus = document.getElementById('detail_status-id');
    let colLastupdate = document.getElementById('detail_lastupdate-id');
    let colDate = document.getElementById('detail_date-id');
    let colNumber = document.getElementById('detail_number-id');

    let decision1 = document.getElementById('detail_decision1-id');
    let decision2 = document.getElementById('detail_decision2-id');

    let resubmitBtn = document.getElementById('resubmit_button-id');
    
    let detailStatus = document.getElementById('status_detail-id');
    let iconStatus = document.getElementById('status_detail_icon-id');
    let textStatus = document.getElementById('status_detail_name-id');
    let textStatusFile = document.getElementById('status_detail_name_file-id');

    // clear data
    colLastupdate.classList.remove("hidden");
    colStatus.children[0].classList.add("rounded-bl-lg");
    colStatus.children[1].classList.remove("bg-cloudy-20" , "bg-white");
    colStatus.children[1].classList.add("rounded-br-lg", "bg-cloudy-20");
    colDate.classList.add("hidden");
    colNumber.classList.add("hidden");

    detailStatus.children[1].classList.remove("hidden");
    detailStatus.children[1].classList.add("hidden");

    iconStatus.classList.remove("bg-warning-50", "bg-blue_2-20", "bg-warning-100", "bg-success-100");
    iconStatus.innerHTML = "";

    decision1.children[0].children[0].classList.remove("bg-error-50", "text-error-700", "bg-warning-50", "text-warning-700", "bg-success-50", "text-success-700");
    decision1.children[0].children[0].innerHTML = "";
    decision1.children[0].children[1].classList.add("hidden");
    decision1.children[0].removeAttribute('onclick');
    decision1.children[0].classList.remove('cursor-pointer');

    decision2.children[0].children[0].classList.remove("bg-error-50", "text-error-700", "bg-warning-50", "text-warning-700", "bg-success-50", "text-success-700");
    decision2.children[0].children[0].innerHTML = "";
    decision2.children[0].children[1].classList.add("hidden");
    decision2.children[0].removeAttribute('onclick');
    decision2.children[0].classList.remove('cursor-pointer');

    resubmitBtn.classList.add("hidden");
    resubmitBtn.removeAttribute("onclick")

    colDate.children[1].classList.remove("italic");
    colNumber.children[1].classList.remove("italic");

    detailStatus.removeAttribute("onclick")
    detailStatus.classList.remove("cursor-pointer")

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
      // closeDoc.setAttribute("onclick", "toggleDetailDocument('" + drawerID + "', 'snackbar-id', '" + type + "', true)")
      detailStatus.classList.add('cursor-pointer');
      detailStatus.setAttribute("onclick", `toggleNotes('modal_status-id', 'z-60', 'static', 'inline', '${type}')`)
      textStatus.textContent = "Rejected";
      iconStatus.classList.add('bg-warning-50');
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-alert-filled.svg" alt="alert">`;

      decision1.children[0].children[0].classList.add("bg-error-50", "text-error-700");
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F04438"></circle>
        </svg>Rejected
      `;
      decision2.children[0].children[0].classList.add("bg-error-50", "text-error-700");
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F04438"></circle>
        </svg>Rejected
      `;

    } else if(type == 'verification') {
      // closeDoc.setAttribute("onclick", "toggleDetailDocument('" + drawerID + "', 'snackbar-id', '" + type + "', true)")
      textStatus.textContent = "Waiting for Verification";
      iconStatus.classList.add('bg-warning-100');
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-warning-filled.svg" alt="warning">`;

      decision1.children[0].children[0].classList.add("bg-error-50", "text-error-700");
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F04438"></circle>
        </svg>Rejected
      `;
      decision2.children[0].children[0].classList.add("bg-error-50", "text-error-700");
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F04438"></circle>
        </svg>Rejected
      `;
    } else if(type == 'submit' || type == 'revision') {
      detailStatus.classList.remove('cursor-pointer');
      // detailStatus.setAttribute("onclick", "toggleModal('modal_status-id', '" + type + "')")
      textStatus.textContent = "Submitted to Finance";
      iconStatus.classList.add('bg-blue_2-20');
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-history-filled.svg" alt="history">`;

      colLastupdate.classList.add("hidden");
      colStatus.children[0].classList.remove("rounded-bl-lg");
      colStatus.children[1].classList.remove("rounded-br-lg");
      colDate.children[1].classList.add("italic");
      colDate.classList.remove("hidden");
      colDate.children[1].innerHTML = "Waiting from Finance";
      colNumber.classList.remove("hidden");
      colNumber.children[1].classList.add("italic");
      colNumber.children[1].innerHTML = "Waiting from Finance";

      decision1.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#12B76A"/>
        </svg> Approved
      `;
      decision2.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#12B76A"/>
        </svg> Approved
      `;

    } else if(type == 'approve') {
      detailStatus.classList.remove('cursor-pointer');
      // detailStatus.setAttribute("onclick", "toggleModal('modal_status-id', '" + type + "')")
      textStatus.textContent = "Payment Complete";
      iconStatus.classList.add('bg-success-100');
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-check-filled.svg" alt="check">`;

      colLastupdate.classList.add("hidden");
      colStatus.children[0].classList.remove("rounded-bl-lg");
      colStatus.children[1].classList.remove("rounded-br-lg");
      colDate.classList.remove("hidden");
      colDate.children[1].innerHTML = "26/04/2023";
      colNumber.classList.remove("hidden");
      colNumber.children[1].innerHTML = "CN-004";

      decision1.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#12B76A"/>
        </svg> Approved
      `;
      decision2.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#12B76A"/>
        </svg> Approved
      `;

    } else if(type == 'action_needed-revise') {

      colStatus.children[1].classList.remove("bg-cloudy-20");
      colStatus.children[1].classList.add("bg-white");

      detailStatus.children[1].classList.remove("hidden");
      detailStatus.classList.add('cursor-pointer');
      detailStatus.setAttribute("onclick", `toggleModalDialog('modal_status_${actionType}-id', 'z-60', 'static', 'inline', '${type}')`)

      textStatus.textContent = "Action Needed";
      textStatusFile.textContent = actionName;
      iconStatus.classList.add('bg-warning-100');
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-warning-filled.svg" alt="warning">`;

      resubmitBtn.classList.remove("hidden");
      resubmitBtn.classList.add("flex");
      resubmitBtn.setAttribute("onclick", `toggleModalDialog('modal_status_${actionType}-id', 'z-60', 'static', 'inline', '${type}')`)

      decision1.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#12B76A"/>
        </svg> Approved
      `;

      decision2.children[0].children[0].classList.add("bg-warning-50", "text-warning-700");
      decision2.children[0].classList.add("cursor-pointer");
      decision2.children[0].setAttribute("onclick", `toggleModalDialog('modal_status_${actionType}-id', 'z-60', 'static', 'inline', '${type}')`)
      decision2.children[0].children[1].classList.remove('hidden');
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F79009"/>
        </svg> Action Needed
      `;

    } else if(type == 'action_needed-hardcopy') {

      colStatus.children[1].classList.remove("bg-cloudy-20");
      colStatus.children[1].classList.add("bg-white");

      detailStatus.children[1].classList.remove("hidden");
      detailStatus.classList.add('cursor-pointer');
      detailStatus.setAttribute("onclick", `toggleModalDialog('modal_status_${actionType}-id', 'z-60', 'static', 'inline', '${type}')`)
      textStatus.textContent = "Action Needed";
      textStatusFile.textContent = actionName;
      iconStatus.classList.add('bg-warning-100');
      iconStatus.innerHTML += `<img src="/dist/images/icons/round-warning-filled.svg" alt="warning">`;

      resubmitBtn.classList.remove("hidden");
      resubmitBtn.classList.add("flex");
      resubmitBtn.setAttribute("onclick", `toggleModalDialog('modal_status_${actionType}-id', 'z-60', 'static', 'inline', '${type}')`)

      decision1.children[0].children[0].classList.add("bg-success-50", "text-success-700");
      decision1.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#12B76A"/>
        </svg> Approved
      `;

      decision2.children[0].children[0].classList.add("bg-warning-50", "text-warning-700");
      decision2.children[0].classList.add("cursor-pointer");
      decision2.children[0].setAttribute("onclick", `toggleModalDialog('modal_status_${actionType}-id', 'z-60', 'static', 'inline', '${type}')`)
      decision2.children[0].children[1].classList.remove('hidden');
      decision2.children[0].children[0].innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="me-1.5">
          <circle cx="4" cy="4" r="3" fill="#F79009"/>
        </svg> Action Needed
      `;
    }
  }

  function detailInvoice(drawerID, type) {
    toggleDrawer(drawerID, type)

    let statusIcon = document.getElementById('status_detail_icon-id');
    let statusText = document.getElementById('status_detail_name-id');

    statusIcon.innerHTML = "";
    statusText.innerHTML = "";

    if(type == 'complete') {
      statusIcon.innerHTML += `<img src="/dist/images/icons/round-check-filled.svg" alt="check">`;
      statusText.innerHTML = "Payment Complete";
    } else if(type == 'on_progress') {
      statusIcon.innerHTML += `<img src="/dist/images/icons/paymentProgress.svg" alt="paymentProgress">`;
      statusText.innerHTML = "Payment on Progress";
    }
  }

  function addRuleToggle(btnId, target) {
    let btnEl = document.getElementById(btnId);
    let ruleEl = document.getElementById(target);

    btnEl.classList.toggle('hidden');
    btnEl.classList.toggle('block');
    ruleEl.classList.toggle('hidden');
    ruleEl.classList.toggle('block');
  }