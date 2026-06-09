# 💕 Para Ti, Amor - Página Romántica Premium

Una página elegante, moderna y romántica diseñada para ser compartida mediante código QR. Cuando alguien escanee el código, verá una experiencia visual hermosa con animaciones suaves, música romántica opcional y una frase especial.

**Frase:** *"Te diría que lo más bonito fue haberte conocido, pero en realidad lo más bonito ha sido todo lo que construimos desde entonces"* ❤️

## ✨ Características

- 🎨 **Diseño Elegante**: Colores suaves (negro, rosado, blanco)
- 🎬 **Fondo de Foto**: Tu hermosa foto integrada perfectamente
- ✍️ **Animación de Texto**: La frase aparece letra por letra con efecto glow
- 🎵 **Música Romántica**: Sonido opcional con botón de control
- 💫 **Efectos Elegantes**: Animaciones suaves y profesionales
- 📱 **Totalmente Responsivo**: Perfecto en móviles, tablets y escritorio
- 🔗 **Listo para QR**: Directamente convertible a código QR

## 📂 Estructura de Archivos

```
para-ti-amorcito/
├── index.html              # Archivo principal
├── styles.css              # Estilos y animaciones
├── script.js               # Lógica interactiva
├── README.md               # Este archivo
└── assets/
    ├── background.jpg      # Tu foto (usar image 1)
    └── romantic-music.mp3  # Música opcional
```

## 🚀 Instalación Rápida

### 1. **Cargar tu Foto**
   - Guarda tu foto en: `assets/background.jpg`
   - Las imágenes enviadas ya están optimizadas
   - Formato: JPG, PNG o WebP
   - **Recomendación:** Usa la imagen 1 (tu selfie hermosa)

### 2. **Agregar Música (Opcional)**
   - Coloca tu archivo MP3 en: `assets/romantic-music.mp3`
   - La música se reproducirá automáticamente con sonido suave
   - Permite que el usuario controle el volumen
   - Sugerencias: Música instrumental romántica, piano suave

### 3. **Personalizar (Opcional)**

   **Cambiar colores en `styles.css`:**
   ```css
   :root {
       --primary-color: #1a1a1a;      /* Negro */
       --secondary-color: #e91e63;    /* Rosado */
       --tertiary-color: #ffffff;     /* Blanco */
   }
   ```

   **Cambiar velocidad de animaciones:**
   - Busca `@keyframes` en `styles.css`
   - Ajusta los valores de `animation` (en segundos)

## 📡 Desplegar la Página

### Opción 1: GitHub Pages (Recomendado - Gratis) ⭐
1. Ve a Settings → Pages
2. Selecciona "Deploy from a branch"
3. Elige `main` como rama
4. Tu página estará en:
   ```
   https://mauri4768-oss.github.io/para-ti-amorcito/
   ```
5. **¡Listo!** Ya puedes convertir esta URL a QR

### Opción 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Opción 3: Vercel
```bash
vercel --prod
```

## 🔗 Generar el Código QR

Una vez desplegada, tienes varias opciones:

### ✅ Opción 1: QR Code Monkey (Más Fácil) - RECOMENDADO
1. Ve a: https://www.qrcode-monkey.com/
2. Pega tu URL: `https://mauri4768-oss.github.io/para-ti-amorcito/`
3. Personaliza:
   - Color de puntos: Rosado (`#e91e63`)
   - Color de fondo: Blanco (`#ffffff`)
4. Descarga como PNG de alta resolución
5. ¡Listo para imprimir o enviar! 📱

### ✅ Opción 2: Google Charts (Directo - Sin necesidad de registrarse)
Usa este link directo para generar un QR:
```
https://chart.googleapis.com/chart?chs=500x500&chld=L|2&cht=qr&chl=https%3A%2F%2Fmauri4768-oss.github.io%2Fpara-ti-amorcito%2F
```

### ✅ Opción 3: CLI Local (Para desarrolladores)
```bash
npm install -g qrcode
qrcode "https://mauri4768-oss.github.io/para-ti-amorcito/" > qr-code.png
```

## 🎨 Personalización Avanzada

### Ajustar el desenfoque de fondo
En `styles.css`, busca `.overlay`:
```css
backdrop-filter: blur(2px);  /* Aumenta el número para más desenfoque */
```

### Cambiar velocidad del zoom inicial
En `styles.css`, busca `@keyframes zoomIn`:
```css
animation: zoomIn 8s ease-out;  /* Cambia 8s por el tiempo deseado */
```

### Modificar el efecto de brillo del texto
Busca `.romantic-text`:
```css
text-shadow: 
    0 4px 20px rgba(233, 30, 99, 0.5),  /* Ajusta la intensidad */
    0 2px 4px rgba(26, 26, 26, 0.8);
```

### Cambiar la frase romántica
En `script.js`, busca:
```javascript
romantic_phrase: "Tu nueva frase aquí",
```

## 📸 Tips para la Mejor Experiencia

1. **Foto**: Usa una imagen de alta calidad (mínimo 1920x1080)
   - Recuerda que se verá con un overlay oscuro suave
   - Evita fotos muy brillantes (el desenfoque las oscurece)
   - La imagen 1 que enviaste es perfecta ✨

2. **Música**: Selecciona una canción romántica suave
   - Duración recomendada: 3-5 minutos
   - Genres: Piano, violín, instrumental suave
   - No uses música muy ruidosa o acelerada

3. **Testing**: Prueba en múltiples dispositivos
   - Móvil (iOS y Android)
   - Tablet
   - Computadora
   - Prueba escanear desde diferentes ángulos

4. **QR**: Recomendaciones
   - Imprime en alta resolución (mínimo 4x4 cm)
   - Contraste suficiente con el fondo
   - Deja márgenes blancos alrededor

## 🔐 Privacidad

- ✅ Todos los archivos están en tu repositorio privado/público
- ✅ La página no recopila datos personales
- ✅ La música y fotos solo están accesibles a través del QR
- ✅ No se registran visualizaciones ni interacciones

## 📱 Navegadores Soportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Todos los navegadores modernos en móviles

## 🆘 Solución de Problemas

### "La página no muestra la foto"
- Verifica que `assets/background.jpg` exista en el repositorio
- Comprueba que el nombre sea exacto (case-sensitive)
- Intenta recargar la página (Ctrl+Shift+R)

### "La música no suena"
- Verifica que `assets/romantic-music.mp3` exista
- Algunos navegadores requieren interacción del usuario
- Prueba haciendo clic en el botón 🎵

### "El QR no escanea"
- Aumenta el tamaño del QR (mínimo 4x4 cm)
- Asegúrate de tener buena iluminación
- Prueba con múltiples apps de escaneo

## 💬 Soporte

Si tienes problemas:
- Verifica que los archivos `assets/` existan con nombres exactos
- Comprueba la conexión a internet
- Prueba en navegador diferente
- Borra el caché del navegador (Ctrl+Shift+Del)

## 🎁 Cómo Usar

1. **Genera el QR** desde cualquiera de las opciones anteriores
2. **Comparte el QR** de forma creativa:
   - Imprime en una tarjeta bonita
   - Crea una imagen artística con el QR
   - Envía por WhatsApp, Instagram, etc.
   - Úsalo en un regalo físico
3. **Cuando scaneen**, verán:
   - Tu hermosa foto
   - La frase romántica animada
   - Música romántica (opcional)
   - Todos los efectos visuales ✨

---

**Creado con ❤️ para alguien especial**

*Tu enlace final para convertir a QR:*
## 🔗 `https://mauri4768-oss.github.io/para-ti-amorcito/`

¡Que disfrute tu amor! 💕
