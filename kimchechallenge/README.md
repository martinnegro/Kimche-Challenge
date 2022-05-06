## Kimche Challenge

- Nombre postulante: Martín Negro 
- Link a la app en producción: [martinnegro.netlify.com](https://kimchechallenge-martinnegro.netlify.app/)

### Env Variables:
- REACT_APP_API_URL: URL fetching countries.

### Diseño

- Se eligió usar Accordion para las cards de los países y así optimizar espacio.
- Para dark mode se eligieron los colores basandose en WhatsApp Web dark mode y para light mode una paleta monocromática de [colorsui](https://colorsui.com/)
- Se agregaron `react-accesible-accordion` y `react-switch` para agilizar.
- Debounce es usado en el filtro de países para evitar procesados innecesarios.
