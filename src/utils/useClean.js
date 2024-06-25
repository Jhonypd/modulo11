import { useCallback } from 'react';

export function useClean(setFormData, initialFormData) {
  const cleanForm = useCallback(() => {
    setFormData(initialFormData);
  }, [setFormData, initialFormData]);

  return cleanForm;
}
