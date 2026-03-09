type ClassValue =
  | string
  | Record<string, boolean | undefined>
  | undefined
  | null
  | false;

export const cn = (...classes: ClassValue[]): string => {
  return classes
    .map((c) => {
      if (typeof c === "string") return c;
      if (c && typeof c === "object") {
        return Object.entries(c)
          .filter(([, v]) => Boolean(v))
          .map(([k]) => k)
          .join(" ");
      }
      return "";
    })
    .filter(Boolean)
    .join(" ");
};
