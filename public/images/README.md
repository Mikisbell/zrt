# Images and Assets

This directory contains all images and visual assets for the ONG ZRT landing page.

## Required Images

### Hero Section
- **hero-bg.jpg** (1920x1080px, optimized)
  - Background image showing reforestation activities
  - Should convey environmental conservation theme
  - Recommended: Forest landscape, tree planting, or nature scene

### Open Graph / Social Media
- **og-image.jpg** (1200x630px)
  - Used for social media previews (Facebook, Twitter, LinkedIn)
  - Should include ONG ZRT branding and key message
  - Text should be readable at small sizes

### Favicon
- **favicon.ico** (32x32px, 16x16px)
- **apple-touch-icon.png** (180x180px)
- **favicon-16x16.png** (16x16px)
- **favicon-32x32.png** (32x32px)

### Service Icons (Optional - using SVG icons instead)
If you prefer custom images over SVG icons:
- **tree-planting.jpg** (800x600px)
- **forest-conservation.jpg** (800x600px)
- **environmental-education.jpg** (800x600px)
- **biodiversity-monitoring.jpg** (800x600px)

### Impact Section
- **impact-infographic.jpg** (1200x800px)
  - Infographic showing environmental impact statistics
  - Can be created using tools like Canva or Adobe Illustrator

## Image Optimization Guidelines

1. **Format**: Use WebP for modern browsers, with JPEG fallback
2. **Compression**: Aim for 75-85% quality to balance size and visual quality
3. **Responsive**: Provide multiple sizes for different screen resolutions
4. **Alt Text**: Always include descriptive alt text for accessibility
5. **Lazy Loading**: Images below the fold should use lazy loading

## Next.js Image Optimization

All images should be imported through Next.js `<Image>` component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-bg.jpg"
  alt="Reforestación en Perú"
  width={1920}
  height={1080}
  priority // Only for above-the-fold images
/>
```

## Placeholder Images

For development, you can use placeholder services:
- https://placehold.co/1920x1080/22c55e/ffffff?text=Hero+Background
- https://placehold.co/1200x630/22c55e/ffffff?text=OG+Image

## Copyright and Licensing

Ensure all images used have appropriate licenses:
- Use royalty-free images from Unsplash, Pexels, or Pixabay
- Take original photos of ONG ZRT activities
- Properly attribute any third-party images as required

## Recommended Image Sources

- **Unsplash**: https://unsplash.com/s/photos/reforestation
- **Pexels**: https://www.pexels.com/search/forest/
- **Pixabay**: https://pixabay.com/images/search/tree-planting/
