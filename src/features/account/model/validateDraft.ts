import { AccountDraftRow } from "@/entities/account/model/types";

export function validateRow(row: AccountDraftRow): boolean {
  row.errors = {};

  if (row.labelsText.length > 50) {
    row.errors.labels = 'Максимум 50 символов';
  }

  const login = row.login.trim();
  if (!login) row.errors.login = 'Обязательное поле';
  else if (login.length > 100) row.errors.login = 'Максимум 100 символов';

  if (row.type === 'LOCAL') {
    if (!row.password) row.errors.password = 'Обязательное поле';
    else if (row.password.length > 100) row.errors.password = 'Максимум 100 символов';
  }

  return Object.keys(row.errors).length === 0;
} 