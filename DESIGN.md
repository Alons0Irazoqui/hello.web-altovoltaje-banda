---
name: Cinematic Norteño
colors:
  surface: '#121412'
  surface-dim: '#121412'
  surface-bright: '#383937'
  surface-container-lowest: '#0d0f0d'
  surface-container-low: '#1b1c1a'
  surface-container: '#1f201e'
  surface-container-high: '#292a28'
  surface-container-highest: '#343533'
  on-surface: '#e3e2df'
  on-surface-variant: '#d6c4b0'
  inverse-surface: '#e3e2df'
  inverse-on-surface: '#30312e'
  outline: '#9e8e7c'
  outline-variant: '#514536'
  surface-tint: '#ffb954'
  primary: '#ffbd5f'
  on-primary: '#452b00'
  primary-container: '#e5a036'
  on-primary-container: '#5c3a00'
  inverse-primary: '#835500'
  secondary: '#dfc477'
  on-secondary: '#3c2f00'
  secondary-container: '#574501'
  on-secondary-container: '#cdb368'
  tertiary: '#c1cacc'
  on-tertiary: '#293234'
  tertiary-container: '#a6afb1'
  on-tertiary-container: '#3a4344'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb4'
  primary-fixed-dim: '#ffb954'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#fde090'
  secondary-fixed-dim: '#dfc477'
  on-secondary-fixed: '#231a00'
  on-secondary-fixed-variant: '#574501'
  tertiary-fixed: '#dbe4e6'
  tertiary-fixed-dim: '#bfc8ca'
  on-tertiary-fixed: '#151d1f'
  on-tertiary-fixed-variant: '#40484a'
  background: '#121412'
  on-background: '#e3e2df'
  surface-variant: '#343533'
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: 0.02em
  display-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system establishes a high-octane, premium visual identity for a regional Mexican powerhouse. The aesthetic, titled "Cinematic Desert," blends the raw, earthy grit of the Norteño heartland with the high-production polish of arena stage lighting. 

The brand personality is authoritative, energetic, and sophisticated. It targets a modern audience that appreciates tradition but demands world-class production value. The visual language utilizes heavy blacks and deep "Carbon Coffee" tones to create a sense of mystery and depth, while "Electric Gold" accents slice through the darkness like stage spots. The overall mood is one of an epic concert experience—intense, exclusive, and undeniably powerful.

## Colors

The palette is rooted in a "Black High Voltage" foundation, ensuring maximum contrast for the gold and metallic accents. 

- **Primary & Secondary Gold:** Used for calls-to-action and critical branding elements. They represent the "spark" of the band's energy.
- **Metallic Silver:** Reserved for editorial dividers, secondary headlines, and decorative linework to evoke the shimmer of stage equipment and classic western hardware.
- **Earth Tones:** "Carbon Coffee" and "Earth Coffee" provide necessary depth in layering, preventing the dark interface from feeling flat and connecting the digital experience to the physical desert landscape.
- **Typography:** Text primarily uses "Smoke White" for high readability against dark backgrounds, while "Cowboy Gray" is used for meta-data and less critical information.

## Typography

The typography system mirrors a concert poster's hierarchy. **Bebas Neue** is the primary display face, used for high-impact titles and section headers. Its condensed, vertical nature commands attention and feels institutional.

**Montserrat** provides a clean, geometric counterpoint for body copy and navigation. It ensures that tour dates, biographies, and technical riders remain legible and professional.

For a premium feel, headlines should utilize slight tracking (letter-spacing) and often appear in all-caps to maintain the "Alto Voltaje" (High Voltage) intensity.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for desktop to maintain a cinematic, composed feel, centered on the screen like a stage. Elements are organized on a 12-column grid.

- **Desktop:** Generous 64px outer margins to allow the "Black High Voltage" background to frame the content.
- **Mobile:** 16px margins with a fluid 4-column grid.
- **Rhythm:** A strict 8px base unit drives all padding and margin decisions, creating a tight, engineered feel consistent with professional stage production.
- **Reflow:** On smaller screens, side-by-side card layouts (e.g., gallery or discography) stack vertically to prioritize large, high-contrast imagery.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Subtle Glows** rather than traditional shadows.

1.  **Level 0 (Floor):** Black High Voltage (#030101).
2.  **Level 1 (Cards/Sections):** Carbon Coffee (#221209) with a 1px "Champagne Gold" stroke to define edges.
3.  **Level 2 (Interaction):** Hover states utilize a subtle inner glow of "Electric Gold" to simulate the lighting up of a button.

Gradients should be used sparingly, primarily as "vignettes" on the edges of the screen or behind text to ensure legibility over busy desert textures or concert photography.

## Shapes

The shape language is "Soft-Industrial." While the brand is aggressive, sharp 90-degree corners feel too utilitarian. 

A **0.25rem (4px) base radius** is applied to buttons and input fields to provide a sophisticated, machined look—reminiscent of high-end audio equipment or belt buckles. Decorative elements, such as image containers, may use the same radius to maintain a cohesive "premium" feel across the interface.

## Components

- **Buttons:** Primary buttons feature a solid "Electric Gold" background with "Black High Voltage" text. They must have a 1px "Champagne Gold" border to add a metallic "leaf" effect.
- **Cards:** Used for tour dates or album releases. Backgrounds are "Carbon Coffee" with thin gold borders. Text inside cards is "Smoke White" for titles and "Cowboy Gray" for descriptions.
- **Inputs:** Dark backgrounds (#030101) with "Metallic Silver" borders. On focus, the border transitions to "Electric Gold."
- **Dividers:** Horizontal rules are thin (1px) and use the "Metallic Silver" color at 30% opacity, fading out at the edges to mimic a beam of light.
- **Chips/Badges:** Small, rectangular tags for "Sold Out" or "New Release" statuses, using "Earth Coffee" backgrounds with "Champagne Gold" text.
- **Imagery:** All photography should be treated with high contrast and warm-toned color grading to match the "Cinematic Desert" aesthetic. Deep blacks are essential.