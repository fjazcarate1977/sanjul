import type { DividerPosition, EmailFlowStatus, Locales } from '$lib/enums';

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
type SocialNetworkColors = 'lightBlue-600' | 'pink-400' | 'blueGray-800';

export interface SocialMediaProps {
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
  navBarList: SocialMediaProps[];
  dropdownList: DropdownProps[];
}

type TechnologiesCardPosition = 'left' | 'right';

interface TechnologiesProps {
  technology: string;
  link: string;
  title: string;
}

export interface TechnologiesCardProps {
  position: TechnologiesCardPosition;
  technologies: TechnologiesProps[];
}

export interface BrotherhoodCardProps {
  img: string;
  name: string;
  i18nref: string;
  socialMedia: SocialMediaProps[];
  slug: string;
  years: number;
}

export interface CenterSectionProps extends SharedProps {
  technologiesCard: TechnologiesCardProps[];
}

type InputTypes = 'name' | 'email';

interface I18nrefFormProps {
  label: string;
  error: string;
}

export interface FormSectionProps {
  id: string;
  i18nref: I18nrefFormProps;
  type?: InputTypes;
  tag: string;
}

export interface HeaderProps {
  mainBackground: string;
  additionalInfo: boolean;
  height?: number;
}

interface PageProps {
  header: HeaderProps;
  mainSection: MainSectionProps;
  centerSection: CenterSectionProps;
  formSection: FormSectionProps[];
}

interface PhilosophyProps {
  header: HeaderProps;
}

interface ProfileProps {
  header: HeaderProps;
}

interface SharedProps {
  brotherhoodCard: BrotherhoodCardProps[];
}

export interface DataProps {
  layout: LayoutProps;
  page: PageProps;
  philosophy: PhilosophyProps;
  profile: ProfileProps;
  shared: SharedProps;
}

interface FormObjectNestedProps {
  value?: string;
  error?: boolean;
}

export interface FormObjectProps {
  [key: string]: FormObjectNestedProps;
}

export type LocalesTypes = keyof typeof Locales;

export interface SendContactDataProps {
  [key: string]: string;
  locale: LocalesTypes;
}

export type DividerPositionTypes = keyof typeof DividerPosition;
export type DividerColorTypes =
  | 'text-blueGray-200'
  | 'text-white'
  | 'text-blueGray-800';

export type EmailFlowStatusTypes = keyof typeof EmailFlowStatus;
