import { ref, computed } from 'vue';

export function useCurrency(options) {
  const currency = ref(options.currency);
  
  const format = (value) => {
    return computed(() => `${value}${currency.value}`);
  }

  return {
    format,
    currency,
  }
}