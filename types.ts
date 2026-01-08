export type CompensationPlan = 'commission' | 'fixed_commission';

export interface ApplicationFormState {
  name: string;
  instagramHandle: string;
  selectedProductCode: string;
  plan: CompensationPlan;
  email: string;
  imageFile: File | null;
  message: string;
}