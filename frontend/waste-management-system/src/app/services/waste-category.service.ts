// waste-category.service.ts
import { Injectable } from '@angular/core';

export interface WasteItem {
  name: string;
  category: string;
  description: string;
  disposalTips: string[];
}

@Injectable({
  providedIn: 'root'
})
export class WasteCategoryService {
  private wasteItems: WasteItem[] = [
    {
      name: 'Newspaper',
      category: 'Recyclable',
      description: 'Paper-based products that can be recycled',
      disposalTips: [
        'Remove any plastic wrapping',
        'Keep dry and clean',
        'Place in recycling bin'
      ]
    },
    {
      name: 'Banana Peel',
      category: 'Organic',
      description: 'Food waste that can be composted',
      disposalTips: [
        'Place in compost bin',
        'Can be used for composting',
        'Keep separate from non-organic waste'
      ]
    },
    {
      name: 'Plastic Bottle',
      category: 'Recyclable',
      description: 'Clean plastic containers',
      disposalTips: [
        'Rinse thoroughly',
        'Remove cap',
        'Crush to save space'
      ]
    },
    {
      name: 'Used Batteries',
      category: 'Hazardous',
      description: 'Items requiring special disposal',
      disposalTips: [
        'Never throw in regular trash',
        'Take to special collection points',
        'Keep dry and contained'
      ]
    },
    
  ];

  searchItems(query: string): WasteItem[] {
    query = query.toLowerCase().trim();
    return this.wasteItems.filter(item => 
      item.name.toLowerCase().includes(query)
    );
  }

  getItemByName(name: string): WasteItem | undefined {
    return this.wasteItems.find(item => 
      item.name.toLowerCase() === name.toLowerCase()
    );
  }

  getAllItems(): WasteItem[] {
    return this.wasteItems;
  }

  getCategories(): string[] {
    return [...new Set(this.wasteItems.map(item => item.category))];
  }
}