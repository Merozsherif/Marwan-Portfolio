interface InputProps {
  type: string;
  id: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange:
    | ((e: React.ChangeEvent<HTMLInputElement>) => void)
    | ((e: React.ChangeEvent<HTMLTextAreaElement>) => void);
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  addedClasses?: string;
  srOnlyInfo?: string;
  autoComplete?: string;
  min?: string;
  max?: string;
  maxLength?: number;
}

function Input({
  type,
  id,
  name,
  placeholder,
  required = false,
  addedClasses = "",
  srOnlyInfo = "",
  value,
  disabled = false,
  autoComplete,
  onChange,
  defaultValue,
  min,
  max,
  maxLength,
}: InputProps) {
  const styles =
    "bg-(--skill-bg) border border-(--input-border) text-(--text-color) rounded-[0.625rem] px-4 py-3 transition-all ease-in duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--orange-text)";

  return (
    <>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={placeholder}
          required={required}
          aria-describedby={srOnlyInfo ? `${id}-help` : undefined}
          className={`${styles} ${addedClasses} disabled:opacity-65`}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          min={min}
          max={max}
          maxLength={maxLength}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-describedby={srOnlyInfo ? `${id}-help` : undefined}
          className={`${styles} ${addedClasses} disabled:opacity-65`}
        />
      )}
      {srOnlyInfo && (
        <p
          className="sr-only"
          aria-required={required ? true : false}
          id={`${id}-help`}
        >
          {srOnlyInfo}
        </p>
      )}
    </>
  );
}

export default Input;
