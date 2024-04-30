import { formatDistance, parseISO } from 'date-fns';
import { differenceInDays } from 'date-fns/esm';

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
    new Intl.NumberFormat('en', { style: 'currency', currency: 'NGN' }).format(
      value
    ).replace('NGN', '₦');

    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
  
    // Function to convert array of image files to Base64 array
    export const convertArrayToBase64 = async (fileArray) => {
      const promises = fileArray.map((file) => convertToBase64(file));
      const base64Results = await Promise.all(promises);
      return base64Results;
    };
    export const handleImageConvert = (e) => {
      console.log(e);
      const files = Array.from(e);
  
      Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
  
            reader.onload = (event) => {
              resolve(event.target.result);
            };
  
            reader.onerror = (error) => {
              reject(error);
            };
  
            reader.readAsDataURL(file);
          });
        })
      )
        .then((base64Array) => {
          return base64Array;
        })
        .catch((error) => {
          console.error('Error reading files:', error);
        });
    };
  