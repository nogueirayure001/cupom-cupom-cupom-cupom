import { useMemo } from 'react';

function useCreateDefaultValues(fields, validDefaultFields = []) {
  return useMemo(() => {
    const defaultValues = {};

    for (const [key, value] of Object.entries(fields)) {
      const valid = validDefaultFields.includes(key);

      defaultValues[key] = { value: value, valid: valid, blurred: false };
    }

    return defaultValues;
  }, [fields]);
}

export default useCreateDefaultValues;
