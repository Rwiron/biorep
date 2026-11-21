import bootcampImage from '../assets/image/bootcamp.jpeg';
import { sources } from './sources';

// Single source of truth for the newsroom: the home page list, the footer and the
// article pages all read from this list. The first item is the featured story.
// Article text lives in src/pages/NewsArticle*.jsx.
export const articles = [
  {
    slug: 'uvu-bio-bootcamp',
    title: 'BioRep Labs completes enterprise development bootcamp at the UVU Bio Rwanda Bioeconomy Hub',
    description:
      'Our founder received the Rwanda Biotech Enterprise Development Programme certificate at the open-access biotech hub in Kigali.',
    category: 'Company news',
    date: 'October 2025',
    image: bootcampImage,
    imageAlt: 'Programme participants holding certificates in front of UVU Bio Rwanda Bioeconomy Hub banners',
    caption: 'Participants in the Rwanda Biotech Enterprise Development Programme at the UVU Bio Rwanda Bioeconomy Hub.',
    sources: [sources.uvuBio, sources.newTimesHub],
  },
  {
    slug: 'who-budget-cuts',
    title: 'WHO shrinks its budget as the United States withdraws',
    description:
      'The US exit took effect in January 2026. WHO is working with a budget 22% smaller than planned, and other disease programmes are feeling the same squeeze.',
    category: 'Funding',
    date: 'January 2026',
    sources: [
      sources.usWithdrawal,
      sources.whoBudget,
      sources.swissinfoWho,
      sources.globalFund,
      sources.whoMalaria2025,
      sources.whoNtd2025,
    ],
  },
  {
    slug: 'ama-appoints-first-ceo',
    title: 'African Medicines Agency begins work in Kigali under its first Director General',
    description:
      'The continental medicines regulator became operational in October 2025, led by Dr Delese Mimi Darko.',
    category: 'Institutions',
    date: 'October 2025',
    sources: [sources.hpwAma, sources.newTimesAma],
  },
  {
    slug: 'rwanda-fda-who-certification',
    title: 'Rwanda FDA reaches WHO Maturity Level 3',
    description:
      "WHO recognized Rwanda's medicines regulator as a stable, well-functioning and integrated system, one of eight in Africa at that level at the time.",
    category: 'Regulation',
    date: 'December 2024',
    sources: [sources.whoRwandaMl3, sources.whoMaturityList, sources.hpwAma],
  },
];
