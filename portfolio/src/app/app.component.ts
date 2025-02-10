import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { SkillsSectionComponent } from "./skills-section/skills-section.component";
import { PortfolioSectionComponent } from "./portfolio-section/portfolio-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent, AboutSectionComponent, SkillsSectionComponent, PortfolioSectionComponent, FooterSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
