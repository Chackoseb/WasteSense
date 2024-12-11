import { Component } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;

@Component({
  selector: 'app-waste-categorizer',
  templateUrl: './waste-categorizer.component.html',
  styleUrls: ['./waste-categorizer.component.css']
})
export class WasteCategorizerComponent {

  genAi = new GoogleGenerativeAI(apiKey);
  waste: string | null = null; 
  response: string | null = null;

  model = this.genAi.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      candidateCount: 1,
      maxOutputTokens: 75,
      temperature: 1.0,
    },
  });

  async getCategoryAndInstructions() {
    if (!this.waste) return;

    const prompt = `Categorize the following waste item and provide disposal instructions. Respond strictly in this format: 
    First line: EXACT category (only Recyclable, E-waste, General Waste, Organic Waste, or Other Waste). 
    Leave a line. 
    Next line: Disposal instructions and tips in clear, concise bullet points(each bullet maximum 20 words). Maximum: 70 words. 
    Waste item: ${this.waste}`;

    try {
      const result = await this.model.generateContent(prompt);
      this.response = result.response.text();
    } catch (error) {
      console.error("Error fetching category:", error);
      this.response = "Error categorizing the waste. Please try again.";
    }
  }
}
