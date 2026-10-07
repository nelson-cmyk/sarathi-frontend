import { FieldDescription } from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { cn } from '@/lib/utils';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type RHFFormInputProps<T extends FieldValues> = {
  id?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  type?: string;
  placeholder?: string;
  errorMsg?: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const FormInput = <T extends FieldValues>({
  id,
  name,
  register,
  type,
  placeholder,
  errorMsg,
  iconStart,
  iconEnd,
  className,
  disabled = false,
}: RHFFormInputProps<T>) => {
  return (
    <>
      <InputGroup className={cn(className)}>
        <InputGroupInput
          id={id ?? name}
          placeholder={placeholder}
          {...register(name)}
          type={type ?? 'text'}
          autoComplete="off"
          className="placeholder:text-xs"
          disabled={disabled}
        />
        {iconStart && (
          <InputGroupAddon
            align="inline-start"
            className="text-muted-foreground/40 w-5 h-5"
          >
            {iconStart}
          </InputGroupAddon>
        )}
        {iconEnd && (
          <InputGroupAddon
            align="inline-end"
            className="text-muted-foreground/40 w-5 h-5"
          >
            {iconEnd}
          </InputGroupAddon>
        )}
      </InputGroup>
      {errorMsg && (
        <FieldDescription className="text-destructive text-xs">
          {errorMsg}
        </FieldDescription>
      )}
    </>
  );
};
export default FormInput;
