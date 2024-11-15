// waste-education.component.ts
import { Component, OnInit } from '@angular/core';

interface WasteCategory {
  name: string;
  items: string[];
  tips: string[];
  binColor: string;
  doList: string[];
  dontList: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-waste-education',
  templateUrl: './waste-education.component.html',
  styleUrls: ['./waste-education.component.css']
})
export class WasteEducationComponent implements OnInit {
  activeSection: string = 'overview';
  selectedCategory: WasteCategory | null = null;

  wasteCategories: WasteCategory[] = [
    {
      name: 'Recyclable Waste',
      items: ['Paper', 'Cardboard', 'Glass bottles', 'Plastic containers (PET, HDPE)', 'Metal cans', 'Aluminum foil'],
      tips: [
        'Rinse containers before recycling',
        'Remove caps and lids',
        'Flatten cardboard boxes',
        'Keep paper dry and clean'
      ],
      binColor: '#0066cc',
      doList: [
        'Clean containers before recycling',
        'Remove labels when possible',
        'Separate different materials',
        'Break down boxes'
      ],
      dontList: [
        'Don\'t include food-contaminated items',
        'Don\'t bag recyclables',
        'Don\'t include non-recyclable plastics',
        'Don\'t include broken glass'
      ]
    },
    {
      name: 'Organic Waste',
      items: ['Food scraps', 'Garden waste', 'Coffee grounds', 'Tea bags', 'Fruit and vegetable peels', 'Eggshells'],
      tips: [
        'Use compostable bags',
        'Keep waste dry when possible',
        'Layer green and brown materials',
        'Avoid meat and dairy in home composting'
      ],
      binColor: '#339933',
      doList: [
        'Include fruit and vegetable scraps',
        'Add yard trimmings',
        'Include coffee grounds and filters',
        'Add eggshells'
      ],
      dontList: [
        'Don\'t include meat or fish',
        'Don\'t add dairy products',
        'Don\'t include oils or fats',
        'Don\'t add diseased plants'
      ]
    },
    {
      name: 'General Waste',
      items: ['Non-recyclable plastics', 'Contaminated packaging', 'Diapers', 'Sanitary products', 'Broken household items'],
      tips: [
        'Minimize general waste',
        'Use reusable alternatives when possible',
        'Compact waste to save space',
        'Double-check if items can be recycled'
      ],
      binColor: '#808080',
      doList: [
        'Bag waste securely',
        'Double wrap sharp items',
        'Minimize waste volume',
        'Check for recycling options first'
      ],
      dontList: [
        'Don\'t include hazardous waste',
        'Don\'t include electronics',
        'Don\'t include batteries',
        'Don\'t include recyclable items'
      ]
    },
    {
      name: 'Hazardous Waste',
      items: ['Batteries', 'Electronics', 'Paint', 'Chemicals', 'Fluorescent bulbs', 'Motor oil'],
      tips: [
        'Store safely until disposal',
        'Keep in original containers',
        'Never mix chemicals',
        'Check local disposal schedules'
      ],
      binColor: '#ff0000',
      doList: [
        'Keep in original containers',
        'Store in a safe place',
        'Follow disposal guidelines',
        'Use designated collection points'
      ],
      dontList: [
        'Don\'t mix different materials',
        'Don\'t dispose in regular trash',
        'Don\'t pour down drains',
        'Don\'t store near heat sources'
      ]
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'Why is waste segregation important?',
      answer: 'Waste segregation is crucial for proper recycling, reducing landfill usage, and minimizing environmental impact. It helps in efficient waste processing and resource recovery.'
    },
    {
      question: 'How can I reduce my waste?',
      answer: 'Practice the 3Rs: Reduce (buy less, choose products with less packaging), Reuse (use durable items, repair when possible), and Recycle (properly sort and dispose of recyclable materials).'
    },
    {
      question: 'What happens to recyclable waste?',
      answer: 'Recyclable waste is sorted, cleaned, and processed into raw materials that can be used to make new products, reducing the need for virgin materials and saving energy.'
    },
    {
      question: 'How should I handle electronic waste?',
      answer: 'Electronic waste should be taken to designated e-waste collection points or recycling centers. Many retailers also offer take-back programs for electronics.'
    },
    {
      question: 'Can I compost in my apartment?',
      answer: 'Yes! You can use a small indoor composting bin or vermicomposting system. Focus on kitchen scraps and avoid meat/dairy to prevent odors.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  selectCategory(category: WasteCategory): void {
    this.selectedCategory = category;
  }

  clearSelectedCategory(): void {
    this.selectedCategory = null;
  }
}