declare module "remote_app/Button" {
  import { FC, ReactNode } from "react";

  const Button: FC<{ onClick: () => void; children: ReactNode }>;

  export default Button;
}
