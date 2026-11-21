import { sources } from './sources';

// The "Insights" section: four topics, each a short briefing of dated, sourced developments.
// Items with `to` link to one of our own news pages; every item lists its outside sources.
// To add a development, add an object to the right `items` list (newest first).
export const topics = [
  {
    id: 'technologies',
    title: 'Emerging technologies',
    intro:
      'New medicines, vaccines and computational tools are changing how diseases endemic to Africa are prevented and treated.',
    items: [
      {
        date: 'Nov 2026',
        title: 'A new class of antimalarial is under regulatory review',
        text: 'Ganaplacide–lumefantrine (GanLum) was developed by Novartis with support from Medicines for Malaria Venture, and it works differently from artemisinin-based treatments. In a phase III trial of 1,688 adults and children at 34 sites in 12 African countries, it cured 97.4% of participants, compared with 94.0% for the current standard of care. Novartis has now submitted it to regulators in Switzerland and the United States.',
        sources: [sources.edctpGanlum, sources.novartis2026],
      },
      {
        date: 'Mar 2026',
        title: 'An open-access AI platform for malaria drug design',
        text: 'Medicines for Malaria Venture and deepmirror released dd4gh, a free platform that uses predictive and generative AI to propose the most promising compounds to test in the lab. It was shaped in workshops in Ghana and Switzerland and tested at the University of Ghana.',
        sources: [sources.hpwAiPlatform],
      },
      {
        date: 'Dec 2025',
        title: 'Machine learning to tailor doses for African patients',
        text: "Researchers at the University of Cape Town's H3D centre and the Ersilia Open Source Initiative published a pipeline that predicts how African genetic variants affect the way malaria and tuberculosis medicines are metabolized, to support dosing decisions.",
        sources: [sources.uctAi],
      },
      {
        date: 'Dec 2025',
        title: 'Malaria vaccines reach 24 countries',
        text: 'WHO reports that 24 countries have introduced malaria vaccines into routine immunization. Together with dual-ingredient nets and other new tools, they helped prevent an estimated 170 million cases and 1 million deaths in 2024.',
        sources: [sources.whoMalaria2025],
      },
    ],
  },
  {
    id: 'funding',
    title: 'Funding & international organizations',
    intro:
      'Global health funding contracted sharply in 2025 and 2026, which changes what research and disease programmes in the region can count on.',
    items: [
      {
        date: 'Feb 2026',
        title: 'Global Fund replenishment closes at US$12.64 billion',
        text: 'The Global Fund to Fight AIDS, Tuberculosis and Malaria confirmed the final outcome of its Eighth Replenishment in February 2026. The target had been US$18 billion.',
        sources: [sources.globalFund],
      },
      {
        date: 'Jan 2026',
        title: 'The United States completes its withdrawal from WHO',
        text: 'The withdrawal took effect on 22 January 2026. WHO had already reduced its 2026–27 budget by 22%, to US$4.2 billion, and member states approved a 20% increase in their assessed contributions.',
        to: '/news/who-budget-cuts',
        sources: [sources.usWithdrawal, sources.whoBudget],
      },
      {
        date: 'Dec 2025',
        title: 'Malaria funding is less than half of what is needed',
        text: 'US$3.9 billion was invested in the global malaria response in 2024, against a target of US$9.3 billion for 2025.',
        sources: [sources.whoMalaria2025],
      },
      {
        date: 'Oct 2025',
        title: 'Aid for neglected tropical diseases fell 41% in five years',
        text: 'Official development assistance for neglected tropical diseases decreased by 41% between 2018 and 2023, and WHO reports that programmes continue to be severely disrupted.',
        sources: [sources.whoNtd2025],
      },
    ],
  },
  {
    id: 'ecosystem',
    title: 'Ecosystem',
    intro:
      "BioRep Labs is part of Rwanda's growing biotech ecosystem, which now includes a continental regulator, a WHO-benchmarked national authority and an open-access biotech hub.",
    items: [
      {
        date: 'Aug 2026',
        title: 'Rwanda adopts a 2026–2030 strategy for neglected tropical diseases',
        text: 'The plan estimates that 13 million people in Rwanda remain at risk of at least one neglected tropical disease, and it targets interrupting the transmission of leprosy and river blindness by 2030.',
        sources: [sources.rwandaNtdPlan],
      },
      {
        date: 'Oct 2025',
        title: 'The African Medicines Agency begins operating from Kigali',
        text: "The African Union's continental regulator became operational in October 2025 under its first Director General, Dr Delese Mimi Darko. By July 2026, 33 of the Union's 55 member states had ratified its treaty.",
        to: '/news/ama-appoints-first-ceo',
        sources: [sources.hpwAma],
      },
      {
        date: 'Dec 2024',
        title: 'Rwanda FDA reaches WHO Maturity Level 3',
        text: "WHO's benchmarking recognized Rwanda's regulator as a stable, well-functioning and integrated system. Rwanda and Senegal were the seventh and eighth African countries to reach this level.",
        to: '/news/rwanda-fda-who-certification',
        sources: [sources.whoRwandaMl3],
      },
      {
        date: 'Sep 2024',
        title: 'UVU Bio unveils the Rwanda Bioeconomy Hub',
        text: "An open-access biotech laboratory at the University of Rwanda's College of Science and Technology, offering skills development and entrepreneurial training programmes.",
        to: '/news/uvu-bio-bootcamp',
        sources: [sources.uvuBio, sources.newTimesHub],
      },
    ],
  },
  {
    id: 'events',
    title: 'Events',
    intro: 'Please check back, there are currently no events posted.',
    listTitle: 'Dates we mark each year',
    items: [
      {
        date: '30 Jan',
        title: 'World Neglected Tropical Diseases Day',
        text: 'A WHO global health day that draws attention to diseases affecting more than a billion people, and to the progress made in eliminating them.',
        sources: [sources.whoNtdDay],
      },
      {
        date: '25 Apr',
        title: 'World Malaria Day',
        text: 'A WHO global health day for taking stock of the fight against malaria and renewing the commitment to end it.',
        sources: [sources.whoMalariaDay],
      },
    ],
  },
];
