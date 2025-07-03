// src/components/DynamicForm.tsx
import React, { useState } from 'react';
import './DynamicForm.css';
import { Input } from '@core/Input';
import { Button } from '@core/Button';
import { ButtonProps } from '@core/Button/Button';

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'textarea'
  | 'select'
  | 'checkbox';

export interface FieldOption {
  label: string;
  value: string;
}

export interface ValidationRules {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
}

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  defaultValue?: any;
  options?: FieldOption[]; // for select
  colSpan?: number;
  validation?: ValidationRules;
}

export interface DynamicFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
  buttons?: ButtonProps[];
}

export const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  onSubmit,
  buttons = [],
}) => {
  const [formData, setFormData] = useState<Record<string, any>>(
    fields.reduce((acc, field) => {
      acc[field.name] =
        field.defaultValue ?? (field.type === 'checkbox' ? false : '');
      return acc;
    }, {} as Record<string, any>)
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: FormField, value: any) => {
    const rules = field.validation;
    if (!rules) return '';

    if (rules.required && (value === '' || value === false)) {
      return 'This field is required.';
    }
    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Invalid format.';
    }
    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum ${rules.minLength} characters required.`;
    }
    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum ${rules.maxLength} characters allowed.`;
    }
    return '';
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <form className="dynamic-form" onSubmit={handleSubmit}>
      {fields.map((field) => {
        const colSpan = field.colSpan ?? 2;
        return (
          <div key={field.name} className={`form-field col-span-${colSpan}`}>
            <label className="form-label">{field.label}</label>

            {field.type === 'textarea' ? (
              <textarea
                className="form-input"
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === 'select' ? (
              <select
                className="form-input"
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                <option value="">Select...</option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'checkbox' ? (
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  checked={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.checked)}
                />
                {field.placeholder}
              </label>
            ) : (
              <Input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}

            {errors[field.name] && (
              <p className="form-error">{errors[field.name]}</p>
            )}
          </div>
        );
      })}

      <div className="form-actions">
        {buttons?.map(({ onClick, ...buttonProps }) => (
          <Button onClick={onClick} {...buttonProps}></Button>
        ))}
      </div>
    </form>
  );
};
