interface I18nrefProps {
  title: string;
  description: string;
}

interface IntroductionKeysProps {
  i18nref: string;
  icon: string;
}

export interface IdeasCardListProps {
  i18nref: I18nrefProps;
  icon: string;
  color: string;
}

export interface IntroductionCardProps {
  image: string;
  keys: IntroductionKeysProps[];
}

export interface MainSectionProps {
  ideasCardList: IdeasCardListProps[];
  introductionCard: IntroductionCardProps;
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

interface DropdownLinkProps {
  i18nref: string;
  link: string;
}

export interface DropdownProps {
  i18nref?: string;
  links: DropdownLinkProps[];
}

interface LayoutProps {
  navBarList: NavBarLinkProps[];
  dropdownList: DropdownProps[];
}

interface PageProps {
  mainBackground: string;
  mainSection: MainSectionProps;
}

export interface DataProps {
  layout: LayoutProps;
  page: PageProps;
}
