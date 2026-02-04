import type { LabelItem } from './types';

export function labelsToText(labels: LabelItem[]): string {
  return labels.map(l => l.text).join('; ') + (labels.length ? ';' : '');
}

export function parseLabels(text: string): LabelItem[] {
  return text
    .split(';')
    .map(s => s.trim())
    .filter(Boolean)
    .map(part => ({ text: part }));
}
