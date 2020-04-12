
import React from 'react';

export const formatNumber = (num) => {
  if (typeof num !== "undefined") {
    return num.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
  }
  return 0;
}


export const formatDate = (dateString) => {
  const dt = new Date(dateString);
  return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt
    .getDate()
    .toString()
    .padStart(2, '0')}/${dt
    .getFullYear()
    .toString()
    .padStart(4, '0')} ${dt
    .getHours()
    .toString()
    .padStart(2, '0')}:${dt
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${dt
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;
};