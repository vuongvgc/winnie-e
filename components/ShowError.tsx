import { FieldErrors } from "react-hook-form";

import { FormLoginValue } from "@/common/type";

interface ShowErrorProps {
  errors: FieldErrors<FormLoginValue>;
  field: keyof FieldErrors<FormLoginValue>;
}
const ShowError = ({ errors, field }: ShowErrorProps) => {
  return <p className="text-red-500">{errors[field]?.message}</p>;
};

export default ShowError;
