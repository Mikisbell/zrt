# Prompts para Generar Imágenes con IA - ONG ZRT

Este documento contiene prompts detallados para generar todas las imágenes necesarias para la landing page de ONG ZRT usando herramientas de IA como DALL-E, Midjourney, o Stable Diffusion.

## Configuración General

**Estilo recomendado:** Fotografía realista, colores naturales, luz natural
**Resolución:** Alta resolución (1920px o superior para hero, 1200px para otras)
**Formato:** JPG para fotografías, PNG para logos/iconos

---

## 1. HERO SECTION - Imagen Principal de Fondo

**Nombre del archivo:** `hero-background.jpg`
**Dimensiones:** 1920x1080px (landscape)

### Prompt:

```
A breathtaking aerial view of lush green Peruvian cloud forest in the Junín region, with morning mist rolling through dense tree canopy, vibrant green vegetation, native trees being planted by volunteers in the foreground, mountains in the background, golden hour lighting, cinematic composition, professional nature photography, high detail, 8k quality, inspiring and hopeful atmosphere
```

**Variación alternativa:**
```
Wide angle photograph of reforestation project in Peruvian highlands near Huancayo, young saplings planted in organized rows on hillside, local volunteers working together, Andes mountains in background, clear blue sky, natural lighting, documentary style photography, environmental conservation theme, hopeful and uplifting mood
```

---

## 2. ABOUT SECTION - Equipo y Misión

**Nombre del archivo:** `about-team.jpg`
**Dimensiones:** 1200x800px

### Prompt:

```
Group of diverse Peruvian volunteers and environmental workers in El Tambo, Huancayo, planting native trees together, wearing casual outdoor clothing and gloves, smiling and working collaboratively, natural outdoor setting with mountains in background, warm afternoon light, authentic documentary photography style, community spirit, environmental activism, realistic and inspiring
```

---

## 3. SERVICES SECTION - 3 Imágenes

### 3.1 Reforestación

**Nombre del archivo:** `service-reforestation.jpg`
**Dimensiones:** 800x600px

### Prompt:

```
Close-up of hands planting a young native tree seedling in rich soil, Peruvian Andes landscape in soft focus background, gardening tools nearby, natural lighting, shallow depth of field, professional environmental photography, hope and growth symbolism, vibrant green colors, detailed and realistic
```

### 3.2 Recaudación de Fondos

**Nombre del archivo:** `service-fundraising.jpg`
**Dimensiones:** 800x600px

### Prompt:

```
Community gathering in Peruvian town square, people of various ages participating in environmental awareness event, colorful banners about reforestation, donation booth visible, friendly and welcoming atmosphere, natural daylight, documentary photography style, community engagement, authentic and warm
```

### 3.3 Educación Ambiental

**Nombre del archivo:** `service-education.jpg`
**Dimensiones:** 800x600px

### Prompt:

```
Environmental educator teaching group of children and adults about native trees in outdoor setting, holding plant samples, engaged audience listening attentively, Peruvian landscape background, natural lighting, educational and inspiring atmosphere, documentary photography, knowledge sharing, hopeful future
```

---

## 4. IMPACT SECTION - Impacto Ambiental

### 4.1 Antes y Después

**Nombre del archivo:** `impact-before-after.jpg`
**Dimensiones:** 1200x600px

### Prompt:

```
Split screen comparison image: left side shows deforested hillside with sparse vegetation, right side shows same location transformed with lush green reforestation, young trees growing densely, Peruvian Andes setting, dramatic transformation, hope and restoration theme, professional environmental documentation, realistic photography
```

### 4.2 Bosque Saludable

**Nombre del archivo:** `impact-healthy-forest.jpg`
**Dimensiones:** 1200x800px

### Prompt:

```
Thriving reforested area in Peruvian cloud forest, diverse native tree species growing together, rich biodiversity, sunlight filtering through canopy, vibrant ecosystem, birds visible in trees, morning mist, professional nature photography, conservation success story, lush and vibrant, 8k quality
```

---

## 5. DONATION SECTION - Llamado a la Acción

**Nombre del archivo:** `donation-impact.jpg`
**Dimensiones:** 1200x800px

### Prompt:

```
Symbolic image of hands holding small tree seedling with roots visible, soil falling gently, blurred green forest background, warm natural lighting, close-up photography, hope and growth metaphor, professional quality, inspiring and emotional, call to action visual, realistic and detailed
```

---

## 6. LOGO - ONG ZRT

**Nombre del archivo:** `logo-ong-zrt.png`
**Dimensiones:** 512x512px (cuadrado)

### Prompt:

```
Modern minimalist logo design for environmental NGO "ZRT", incorporating stylized tree symbol with roots, leaf elements, circular design, green and earth tone colors, clean lines, professional and trustworthy appearance, vector style, transparent background, suitable for web and print, environmental conservation theme
```

**Variación con texto:**
```
Professional logo for "ONG ZRT" environmental organization, stylized tree icon integrated with letters, modern sans-serif typography, green (#059669) and forest green color palette, clean and memorable design, circular badge format, suitable for digital and print use, transparent background, vector style
```

---

## 7. ICONOS PARA SERVICIOS (Opcional)

Si necesitas iconos personalizados en lugar de usar los SVG del código:

### 7.1 Icono Reforestación
```
Simple line art icon of tree with visible roots, minimalist style, green color (#059669), 256x256px, transparent background, suitable for web use, clean and modern
```

### 7.2 Icono Recaudación
```
Simple line art icon of hands holding heart with leaf inside, minimalist style, green color (#059669), 256x256px, transparent background, suitable for web use, clean and modern
```

### 7.3 Icono Educación
```
Simple line art icon of open book with growing plant emerging from pages, minimalist style, green color (#059669), 256x256px, transparent background, suitable for web use, clean and modern
```

---

## 8. ESTADÍSTICAS/INFOGRAFÍAS (Opcional)

**Nombre del archivo:** `infographic-impact.png`
**Dimensiones:** 1200x800px

### Prompt:

```
Clean infographic design showing environmental impact statistics, tree icons, number counters, CO2 reduction symbols, water conservation icons, modern flat design style, green and blue color scheme, professional and easy to understand, suitable for web display, transparent or white background
```

---

## Instrucciones de Uso

### Para DALL-E (ChatGPT):
1. Copia el prompt exacto
2. Pégalo en ChatGPT con DALL-E activado
3. Genera la imagen
4. Descarga en alta resolución
5. Guarda con el nombre de archivo sugerido

### Para Midjourney:
1. Copia el prompt
2. Agrega al final: `--ar 16:9` (para landscape) o `--ar 4:3` (para otras)
3. Agrega: `--style raw --v 6` para máximo realismo
4. Ejemplo completo: `[prompt] --ar 16:9 --style raw --v 6`

### Para Stable Diffusion:
1. Usa el prompt como está
2. Configuración recomendada:
   - Steps: 30-50
   - CFG Scale: 7-9
   - Sampler: DPM++ 2M Karras
   - Model: Realistic Vision o similar

---

## Optimización Post-Generación

Una vez generadas las imágenes:

1. **Redimensionar** a las dimensiones exactas requeridas
2. **Optimizar** para web (usar TinyPNG o similar)
3. **Renombrar** según los nombres sugeridos
4. **Guardar** en `public/images/` del proyecto

### Tamaños objetivo después de optimización:
- Hero background: < 300 KB
- About/Impact: < 200 KB
- Services: < 150 KB cada una
- Logo: < 50 KB

---

## Checklist de Imágenes

- [ ] hero-background.jpg (1920x1080px)
- [ ] about-team.jpg (1200x800px)
- [ ] service-reforestation.jpg (800x600px)
- [ ] service-fundraising.jpg (800x600px)
- [ ] service-education.jpg (800x600px)
- [ ] impact-before-after.jpg (1200x600px)
- [ ] impact-healthy-forest.jpg (1200x800px)
- [ ] donation-impact.jpg (1200x800px)
- [ ] logo-ong-zrt.png (512x512px)

---

## Notas Importantes

- **Derechos de uso:** Las imágenes generadas con IA son generalmente libres de derechos, pero verifica los términos de la herramienta que uses
- **Consistencia visual:** Intenta mantener un estilo fotográfico consistente entre todas las imágenes
- **Localización:** Enfatiza elementos peruanos (Andes, paisajes de Junín/Huancayo) para autenticidad
- **Optimización:** Siempre optimiza las imágenes antes de subirlas al sitio web

---

## Alternativa: Imágenes de Stock Gratuitas

Si prefieres usar fotografías reales en lugar de IA, puedes buscar en:

- **Unsplash:** unsplash.com/s/photos/reforestation-peru
- **Pexels:** pexels.com/search/tree-planting/
- **Pixabay:** pixabay.com/images/search/environmental-conservation/

Busca términos como:
- "reforestation peru"
- "tree planting volunteers"
- "andes mountains forest"
- "environmental conservation"
- "community tree planting"
