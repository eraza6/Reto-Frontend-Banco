# challengue
Para correr el proyecto
- npm install
- ng serve --open

Si te muestra warning en consola por google
Agregar un import a la libreria "js-api-loader"
este archivo se encuentra en el paquete de node_modules->@googlemaps/js-api-loader->dist->index.d.ts
dentro de ese archivo agregar:
import { google } from '@google/maps';

con eso no deberia mostrarte nigun warning o error
