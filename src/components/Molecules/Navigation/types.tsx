export type BasicMenuLink = {
  title: string;
  url: string;
  desc?: string;
  type?: string;
  logo?: string;
  subitems: Array<BasicMenuLink>;
};
export type MenuLink = {
  url: string;
  title: string;
  desc?: string;
  type?: string;
  submenu: Array<BasicMenuLink>;
  subMenuSide: Array<{
    title: string;
    links: Array<{
      url: string;
      title: string;
    }>;
  }>;
};
