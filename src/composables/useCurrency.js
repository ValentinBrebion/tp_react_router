import { computed, ref } from 'vue';

const currency = ref();

export function useCurrency(options) {

  currency.value = options.currency;

  const format = (value) => {
    return !!value ? computed(() => `${value}${currency.value}`) : '';
  }

  const change = (value) => {
    currency.value = value;
  }

  return {
    format,
    change
  }
}
