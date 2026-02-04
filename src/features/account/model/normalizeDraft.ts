import { parseLabels } from "@/entities/account";
import { Account, AccountDraftRow } from "@/entities/account/model/types";

export function normalizeToAccount(row: AccountDraftRow): Account {
  return {
    id: row.id,
    labels: parseLabels(row.labelsText),
    type: row.type,
    login: row.login.trim(),
    password: row.type === 'LDAP' ? null : row.password,
  };
}