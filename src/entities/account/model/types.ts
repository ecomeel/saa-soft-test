export type AccountType = 'LOCAL' | 'LDAP';

export interface LabelItem {
  text: string;
}

export interface Account {
  id: string;
  labels: LabelItem[];
  type: AccountType;
  login: string;
  password: string | null;
}

type FieldKey = 'labels' | 'login' | 'password';

export interface AccountDraftRow {
  id: string;
  labelsText: string;
  type: AccountType;
  login: string;
  password: string;
  errors: Partial<Record<FieldKey, string>>;
  saved: boolean;
}
