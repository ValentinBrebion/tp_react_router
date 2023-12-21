import { computed, ref } from 'vue';

export function useCurrency(options) {
  const currency = ref(options.currency);

  const format = (value) => {
    return !!value ? `${value}${currency.value}` : '';
  }

  return {
    format,
  }
}
