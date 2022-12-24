//https://www.npmjs.com/package/tui-pagination#-documents

// import Pagination from 'tui-pagination';
// import { FilmsApiService } from './films-service';
// import { filmTpl } from './films-gallery';
// import { getRefs } from './get-refs';
// import { combineGenres } from './get-genres';

// export const paginationOptions = {
//   totalItems: 20,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   page: 1,

//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
//       '<span class="tui-ico-{{type}}">:::</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
//       '<span class="tui-ico-{{type}}">:::</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">...' +
//       '<span class="tui-ico-ellip"></span>' +
//       '</a>',
//   },
// };
// export let pagination = new Pagination('pagination', paginationOptions);

// // const paginationNumbers = document.getElementById("pagination-numbers");
// // const paginatedList = document.getElementById("paginated-list");
// // const listItems = paginatedList.querySelectorAll("li");
// // const nextButton = document.getElementById("next-button");
// // const prevButton = document.getElementById("prev-button");

// // const paginationLimit = 20;
// // const pageCount = Math.ceil(listItems.length / paginationLimit);
// // let currentPage = 1;
// // const fetchFilmsOnSearch = fetchFilmsOnSearch();
// // const disableButton = (button) => {
// //   button.classList.add("disabled");
// //   button.setAttribute("disabled", true);
// // };

// // const enableButton = (button) => {
// //   button.classList.remove("disabled");
// //   button.removeAttribute("disabled");
// // };

// // const handlePageButtonsStatus = () => {
// //   if (currentPage === 1) {
// //     disableButton(prevButton);
// //   } else {
// //     enableButton(prevButton);
// //   }

// //   if (pageCount === currentPage) {
// //     disableButton(nextButton);
// //   } else {
// //     enableButton(nextButton);
// //   }
// // };

// // const handleActivePageNumber = () => {
// //   document.querySelectorAll(".pagination-number").forEach((button) => {
// //     button.classList.remove("active");
// //     const pageIndex = Number(button.getAttribute("page-index"));
// //     if (pageIndex == currentPage) {
// //       button.classList.add("active");
// //     }
// //   });
// // };

// // const appendPageNumber = (index) => {
// //   const pageNumber = document.createElement("button");
// //   pageNumber.className = "pagination-number";
// //   pageNumber.innerHTML = index;
// //   pageNumber.setAttribute("page-index", index);
// //   pageNumber.setAttribute("aria-label", "Page " + index);

// //   paginationNumbers.appendChild(pageNumber);
// // };

// // const getPaginationNumbers = () => {
// //   for (let i = 1; i <= pageCount; i++) {
// //     appendPageNumber(i);
// //   }
// // };

// // const setCurrentPage = (pageNum) => {
// //   currentPage = pageNum;

// //   handleActivePageNumber();
// //   handlePageButtonsStatus();

// //   const prevRange = (pageNum - 1) * paginationLimit;
// //   const currRange = pageNum * paginationLimit;
// // //   jsonData
// //   fetchFilmsOnSearch.forEach((item, index) => {
// //     elementContainer.innerHTML = ''
// //     if (index >= prevRange && index < currRange) {
// //       elementContainer.appendChild(item)
// //     }
// //   });
// // //   listItems.forEach((item, index) => {
// // //     item.classList.add("hidden");
// // //     if (index >= prevRange && index < currRange) {
// // //       item.classList.remove("hidden");
// // //     }
// // //   });
// // };

// // window.addEventListener("load", () => {
// //   getPaginationNumbers();
// //   setCurrentPage(1);

// //   prevButton.addEventListener("click", () => {
// //     setCurrentPage(currentPage - 1);
// //   });

// //   nextButton.addEventListener("click", () => {
// //     setCurrentPage(currentPage + 1);
// //   });

// //   document.querySelectorAll(".pagination-number").forEach((button) => {
// //     const pageIndex = Number(button.getAttribute("page-index"));

// //     if (pageIndex) {
// //       button.addEventListener("click", () => {
// //         setCurrentPage(pageIndex);
// //       });
// //     }
// //   });
// // });
//-----------------------------my attempt
