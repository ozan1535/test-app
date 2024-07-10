export interface IHeaderItem {
  source?: string;
  href?: string;
  hasDropdown?: boolean;
  isPicture?: boolean;
  name?: string;
  isLogo?: boolean;
}

export interface IHeaderElements {
  data: IHeaderItem[];
  handleFunction?: () => void;
}

export interface ITestCategories {
  name: string;
}

export interface IMenuItem {
  href: string;
  name: string;
  hasDropdown?: boolean;
}
