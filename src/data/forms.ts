export const ODOP_FORMS = {
  enterpriseRegistration: 'https://forms.gle/Qxaf4jSUY3YYUNXx7',
  buyerRegistration: 'https://forms.gle/7JJ8C3C7UtkCSXMN9',
  orderPayment: 'https://forms.gle/ojfRFn4Lz1PraFvp6',
} as const;

export const ORDER_FORM_CONFIG = {
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSc2JX8syB6SOXAnQlwpVqN6BoD9RSslYfyjDQEPIT5OkxxM6Q/viewform',
  fields: {
    orderSummary: 'entry.1000057',
    totalAmount: 'entry.1000027',
  },
} as const;

export function openEnterpriseForm(): void {
  window.open(ODOP_FORMS.enterpriseRegistration, '_blank', 'noopener');
}

export function openBuyerForm(): void {
  window.open(ODOP_FORMS.buyerRegistration, '_blank', 'noopener');
}
