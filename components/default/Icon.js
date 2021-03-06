import React from 'react';

import {
  Adaptable,
  Architecture,
  ArrowBack,
  ArrowDropdown,
  ArrowMore,
  ArrowNext,
  Builders,
  Calendar,
  CaseStudy,
  Chain,
  CheckMark,
  Chrome,
  CloseX,
  Community,
  Compatible,
  Composable,
  Computer,
  Connect,
  Contact,
  Date,
  Desktop,
  Developers,
  DiamondGreen,
  DiamondPink,
  DiamondPurple,
  DiamondYellow,
  Discord,
  Docs,
  Dollar,
  Element,
  Element2,
  Event,
  Explore,
  ExternalLink,
  Fast,
  Firefox,
  Flag,
  FlexibleBase,
  Forkless,
  ForklessUpgrades,
  FountainPen,
  FutureProofBase,
  Github,
  GlobeSolid,
  Governance,
  Graduation,
  Graph,
  Hackathons,
  HamburgerToggle,
  House,
  IconFlexible,
  IconFutureProof,
  IconInteroperable,
  IconOpen,
  Intentional,
  Interoperability,
  InteroperableBase,
  Knight,
  KusamaLogo,
  Layers,
  LightClient,
  LogoAcala,
  LogoAstar,
  LogoMoonbeam,
  LogoWhite,
  Mail,
  Map,
  Moon,
  NoResults,
  OpenBase,
  Opportunities,
  Paperplane,
  Pen,
  Placeholder,
  Play,
  PolkadotLogo,
  Projects,
  Question,
  Reddit,
  Resources,
  Rocket,
  Se,
  Se2,
  Secure,
  Security,
  Seminar,
  ShieldCheckSolid,
  SidebarToggle,
  SmartContracts,
  Smile,
  So,
  So2,
  Star,
  SubconnectBrowserTab,
  Substrate,
  Sun,
  Team,
  Technology,
  Time,
  Tooling,
  Tools,
  Twitter,
  Twitter2,
  Upgradable,
  W3FLogo,
  WaLogo,
  Wrench,
  Youtube,
} from '../../svg/out';

export const iconsMap = {
  /* home */
  developers: Developers,
  projects: Projects,
  technology: Technology,
  governance: Governance,
  interoperability: Interoperability,
  security: Security,
  /* ecosystem */
  opportunities: Opportunities,
  resources: Resources,
  connect: Connect,
  builders: Builders,
  explore: Explore,
  /* brand */
  'logo-white': LogoWhite,
  'w3f-logo': W3FLogo,
  'kusama-logo': KusamaLogo,
  'polkadot-logo': PolkadotLogo,
  'acala-logo': LogoAcala,
  'moonbeam-logo': LogoMoonbeam,
  'astar-logo': LogoAstar,
  substrate: Substrate,
  /* headings */
  hackathons: Hackathons,
  seminar: Seminar,
  dollar: Dollar,
  desktop: Desktop,
  graduation: Graduation,
  smile: Smile,
  house: House,
  contact: Contact,
  paperplane: Paperplane,
  pen: Pen,
  event: Event,
  chain: Chain,
  layers: Layers,
  computer: Computer,
  mail: Mail,
  /* ui */
  'hamburger-toggle': HamburgerToggle,
  'close-x': CloseX,
  'arrow-next': ArrowNext,
  'arrow-dropdown': ArrowDropdown,
  'arrow-more': ArrowMore,
  'arrow-back': ArrowBack,
  'sidebar-toggle': SidebarToggle,
  docs: Docs,
  moon: Moon,
  sun: Sun,
  'external-link': ExternalLink,
  calendar: Calendar,
  date: Date,
  star: Star,
  'diamond-yellow': DiamondYellow,
  'diamond-pink': DiamondPink,
  'diamond-purple': DiamondPurple,
  'diamond-green': DiamondGreen,
  play: Play,
  tools: Tools,
  chrome: Chrome,
  firefox: Firefox,
  time: Time,
  /* mockup */
  placeholder: Placeholder,
  /* social */
  twitter: Twitter,
  twitter2: Twitter2,
  'stack-overflow': So,
  'stack-overflow-2': So2,
  'stack-exchange': Se,
  'stack-exchange-2': Se2,
  element: Element,
  element2: Element2,
  youtube: Youtube,
  reddit: Reddit,
  github: Github,
  discord: Discord,
  /* square one */
  team: Team,
  question: Question,
  map: Map,
  'no-results': NoResults,
  /* highlights */
  'wa-logo': WaLogo,
  'forkless-upgrades': ForklessUpgrades,
  'light-client': LightClient,
  'shield-check-solid': ShieldCheckSolid,
  'globe-solid': GlobeSolid,
  'subconnect-browser-tab': SubconnectBrowserTab,
  'case-study': CaseStudy,
  'check-mark': CheckMark,
  graph: Graph,
  knight: Knight,
  flag: Flag,
  'fountain-pen': FountainPen,
  wrench: Wrench,
  rocket: Rocket,
  /* technology */
  flexible: IconFlexible,
  'future-proof': IconFutureProof,
  interoperable: IconInteroperable,
  open: IconOpen,
  fast: Fast,
  'flexible-base': FlexibleBase,
  forkless: Forkless,
  intentional: Intentional,
  architecture: Architecture,
  community: Community,
  'open-base': OpenBase,
  tooling: Tooling,
  compatible: Compatible,
  'interoperable-base': InteroperableBase,
  secure: Secure,
  adaptable: Adaptable,
  composable: Composable,
  'future-proof-base': FutureProofBase,
  upgradable: Upgradable,
  /* Smart Contracts */
  'smart-contracts': SmartContracts,
};

export function Icon({ name, className, ...others }) {
  if (!name) return <span className="w-5"></span>;
  const IconComponent = iconsMap[name];
  if (!IconComponent) return <span className="w-5"></span>;
  return <IconComponent className={className} {...others}></IconComponent>;
}
