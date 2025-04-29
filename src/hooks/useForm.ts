import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../types';

interface UseFormProps {
  initialValues: FormData;
  onSubmit: (values: FormData) => void;
  validate?: (values: FormData) => Partial<Record<keyof FormData, string>>;
}

interface UseFormReturn {
  values: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  touched: Partial<Record<keyof FormData, boolean>>;
  isSubmitting: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
}

const useForm = ({ initialValues, onSubmit, validate }: UseFormProps): UseFormReturn => {
  const [values, setValues] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      // Mark all fields as touched
      const allTouched: Partial<Record<keyof FormData, boolean>> = {};
      Object.keys(values).forEach((key) => {
        allTouched[key as keyof FormData] = true;
      });
      setTouched(allTouched);
      
      // Don't submit if there are errors
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit(values);
      // Reset form after successful submission
      resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};

export default useForm;