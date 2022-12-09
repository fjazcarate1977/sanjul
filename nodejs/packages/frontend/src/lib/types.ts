export interface DropdownProps {
  i18nref?: string;
  links: DropdownLinkProps[];
}

interface DropdownLinkProps {
  i18nref: string;
  link: string;
}

type SocialNetwork = 'linkedin' | 'twitter' | 'github';
type SocialNetworkColors =
  | 'text-lightBlue-600'
  | 'text-pink-400'
  | 'text-blueGray-800';

export interface NavBarLinkProps {
  title: SocialNetwork;
  link: string;
  color: SocialNetworkColors;
}

export interface DataProps {
  navBarList: NavBarLinkProps[];
  dropdownList: DropdownProps[];
  mainBackground: string;
}
