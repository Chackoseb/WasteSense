import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-waste-categorizer',
  templateUrl: './waste-categorizer.component.html',
  styleUrls: ['./waste-categorizer.component.css']
})
export class WasteCategorizerComponent {
  searchControl = new FormControl('');
  filteredItems: { name: string; category: string }[] = [];
  selectedItemCategory: { name: string; colorClass: string } | null = null;
  selectedInstructions: string[] = [];

  wasteItems = [
    { name: 'Plastic Bottle', category: 'Recyclable' },
    { name: 'Banana Peel', category: 'Organic' },
    { name: 'Battery', category: 'E-Waste' },
    { name: 'Paper', category: 'Recyclable' },
    { name: 'Food Waste', category: 'Organic' },
    { name: 'Glass Bottle', category: 'Recyclable' },
    { name: 'Old Mobile Phone', category: 'E-Waste' },
    { name: 'Styrofoam', category: 'General Waste' },
    { name: 'Aluminum Can', category: 'Recyclable' },
    { name: 'Apple Core', category: 'Organic' },
    { name: 'Laptop', category: 'E-Waste' },
    { name: 'Magazine', category: 'Recyclable' },
    { name: 'Eggshells', category: 'Organic' },
    { name: 'Broken Glass', category: 'General Waste' },
    { name: 'Plastic Bag', category: 'General Waste' },
    { name: 'Television', category: 'E-Waste' },
    { name: 'Newspaper', category: 'Recyclable' },
    { name: 'Grass Clippings', category: 'Organic' },
    { name: 'Tin Can', category: 'Recyclable' },
    { name: 'Bread', category: 'Organic' },
    { name: 'Printer', category: 'E-Waste' },
    { name: 'Cardboard Box', category: 'Recyclable' },
    { name: 'Leaves', category: 'Organic' },
    { name: 'Ceramic Plate', category: 'General Waste' },
    { name: 'Plastic Straw', category: 'General Waste' },
    { name: 'Cell Phone', category: 'E-Waste' },
    { name: 'Glass Jar', category: 'Recyclable' },
    { name: 'Tea Bags', category: 'Organic' },
    { name: 'Metal Hanger', category: 'Recyclable' },
    { name: 'Vegetable Peels', category: 'Organic' },
    { name: 'CFL Bulb', category: 'E-Waste' },
    { name: 'Juice Carton', category: 'Recyclable' },
    { name: 'Coffee Grounds', category: 'Organic' },
    { name: 'Pillow', category: 'General Waste' },
    { name: 'Plastic Wrap', category: 'General Waste' },
    { name: 'Tablet', category: 'E-Waste' },
    { name: 'Milk Carton', category: 'Recyclable' },
    { name: 'Bones', category: 'Organic' },
    { name: 'Mirror', category: 'General Waste' },
    { name: 'Chip Bag', category: 'General Waste' },
    { name: 'Electric Kettle', category: 'E-Waste' },
    { name: 'Steel Can', category: 'Recyclable' },
    { name: 'Orange Peel', category: 'Organic' },
    { name: 'Plastic Utensils', category: 'General Waste' },
    { name: 'Compact Disc', category: 'E-Waste' },
    { name: 'Soda Bottle', category: 'Recyclable' },
    { name: 'Corn Husk', category: 'Organic' },
    { name: 'Aluminum Foil', category: 'Recyclable' },
    { name: 'Pizza Box', category: 'Recyclable' },
    { name: 'Pineapple Skin', category: 'Organic' },
    { name: 'Light Bulb', category: 'General Waste' },
    { name: 'Remote Control', category: 'E-Waste' },
    { name: 'Water Bottle', category: 'Recyclable' },
    { name: 'Avocado Pit', category: 'Organic' },
    { name: 'Dryer Sheet', category: 'General Waste' },
    { name: 'Old Router', category: 'E-Waste' },
    { name: 'Wine Bottle', category: 'Recyclable' },
    { name: 'Coffee Filter', category: 'Organic' },
    { name: 'Nail Polish Bottle', category: 'General Waste' },
    { name: 'Hair Dryer', category: 'E-Waste' },
    { name: 'Steel Can', category: 'Recyclable' },
    { name: 'Cucumber Peel', category: 'Organic' },
    { name: 'Plastic Cup', category: 'General Waste' },
    { name: 'Keyboards', category: 'E-Waste' },
    { name: 'Biscuit Box', category: 'Recyclable' },
    { name: 'Potato Peel', category: 'Organic' },
    { name: 'Cling Wrap', category: 'General Waste' },
    { name: 'Headphones', category: 'E-Waste' },
    { name: 'Juice Bottle', category: 'Recyclable' },
    { name: 'Mango Skin', category: 'Organic' },
    { name: 'Foam Plate', category: 'General Waste' },
    { name: 'Game Console', category: 'E-Waste' },
    { name: 'Chocolate Wrapper', category: 'General Waste' },
    { name: 'Cereal Box', category: 'Recyclable' },
    { name: 'Toilet Paper Roll', category: 'Recyclable' },
    { name: 'Onion Peel', category: 'Organic' },
    { name: 'Sponge', category: 'General Waste' },
    { name: 'Mouse', category: 'E-Waste' },
    { name: 'Wine Cork', category: 'Organic' },
    { name: 'Pasta Box', category: 'Recyclable' },
    { name: 'Coconut Shell', category: 'Organic' },
    { name: 'Broken Mug', category: 'General Waste' },
    { name: 'Printer Ink Cartridge', category: 'E-Waste' },
    { name: 'Plastic Toy', category: 'General Waste' },
    { name: 'Brochure', category: 'Recyclable' },
    { name: 'Pumpkin Skin', category: 'Organic' },
    { name: 'Broken Keyboard', category: 'E-Waste' },
    { name: 'Plastic Bottle Cap', category: 'General Waste' },
    { name: 'Corn Cob', category: 'Organic' },
    { name: 'Steel Rod', category: 'Recyclable' },
    { name: 'Egg Carton', category: 'Recyclable' },
    { name: 'Peanut Shell', category: 'Organic' },
    { name: 'Flower Petals', category: 'Organic' },
    { name: 'Old Lamp', category: 'E-Waste' },
    { name: 'Rubber Bands', category: 'General Waste' },
    { name: 'Aluminum Foil Wrapper', category: 'Recyclable' },
    { name: 'Used Tissue', category: 'General Waste' },
    { name: 'Peach Pit', category: 'Organic' },
    { name: 'Plastic Bottle Label', category: 'General Waste' },
    { name: 'Digital Camera', category: 'E-Waste' },
    { name: 'Potato Chip Bag', category: 'General Waste' },
    { name: 'Cereal Box Liner', category: 'General Waste' },
    { name: 'Broken Headphones', category: 'E-Waste' },
    { name: 'Cooking Oil Bottle', category: 'Recyclable' },
  ];
  

  // Define disposal instructions with a Record type
  disposalInstructions: Record<string, string[]> = {
    'Recyclable': [
      'Ensure all items are clean and dry before placing them in recycling bins to avoid contamination.',
      'Remove any non-recyclable parts, like plastic caps or non-recyclable labels, from recyclable containers.',
      'Avoid putting soiled paper products or greasy materials in recycling bins, as these contaminate the recycling process.',
    ],
    'Organic': [
      'Place only biodegradable food waste like fruit and vegetable scraps in compost bins, avoiding plastic bags.',
      'Avoid putting bones or meat scraps in organic bins as they attract pests and may cause odor.',
      'Chop larger items into smaller pieces to speed up the composting process and reduce bin overflow.',
    ],
    'E-Waste': [
      'Remove any batteries from devices before disposal as batteries often have separate disposal protocols.',
      'Do not dispose of e-waste in regular trash bins; look for dedicated e-waste bins or collection sites.',
      'Wipe any personal data from electronic devices before recycling or donating them for e-waste processing.',
    ],
    'General Waste': [
      'Place items that cannot be recycled, composted, or reused in general waste bins.',
      'Avoid putting hazardous items like chemicals, batteries, or light bulbs in general waste.',
      'Make sure general waste is securely bagged to prevent litter and maintain cleanliness in community areas.',
    ]
  };

  constructor() {
    this.searchControl.valueChanges.subscribe(value => {
      this.filteredItems = this.wasteItems.filter(item =>
        item.name.toLowerCase().includes(value?.toLowerCase() || '')
      );
    });
  }

  selectItem(item: { name: string; category: string }) {
    const categoryColorClass = this.getCategoryColorClass(item.category);
    this.selectedItemCategory = { name: item.category, colorClass: categoryColorClass };
    this.selectedInstructions = this.disposalInstructions[item.category] || [];
    this.searchControl.setValue(item.name);
    this.filteredItems = [];
  }

  getCategoryColorClass(category: string): string {
    switch (category) {
      case 'Recyclable':
        return 'bg-primary text-white'; 
      case 'Organic':
        return 'bg-success text-white'; 
      case 'E-Waste':
        return 'bg-danger text-white';
      case 'General Waste':
        return 'bg-secondary text-white'; 
      default:
        return 'bg-info text-white'; 
    }
  }
}
