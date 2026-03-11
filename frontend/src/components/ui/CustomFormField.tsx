import { CustomFormFieldProps } from "@/types/types";

const CustomFormField = ({ label, name, type = "text", register, error, children }: CustomFormFieldProps) => (
  <div className="flex flex-col gap-2 mb-4">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative">
      {children ? children : (
        <input
          id={name}
          type={type}
          {...register(name)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}
    </div>
    {error && <span className="text-xs text-red-500">{error.message}</span>}
  </div>
);

export default CustomFormField;