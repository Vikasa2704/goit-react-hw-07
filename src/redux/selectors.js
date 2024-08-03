// import { createSelector } from "@reduxjs/toolkit";

// const selector = createSelector(
//     // Масив вхідних селекторів
//     [inputSelector1, inputSelector2, inputSelector3],
//     // Функція перетворювач
//     (result1, result2, result3) => {
//       // Виконуємо обчислення та повертаємо результат
//     }
//   );

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;