# GymfreeFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

//////  PARA ADAPTAR A RED LOCAL SE DEBE MODIFICAR DOS ARCHIVOS index.js y cliente.service.ts

A CONTINUACION EL CONTENIDO ORIGINAL

<////////    codigo index.js original no borrar//////////>

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use('/api/clientes', clientesRoutes);

mongoose.connect('mongodb+srv://rubenpulido1975_db_user:nomercy1975@sena.dhckkxb.mongodb.net/gymfree?retryWrites=true&w=majority&appName=sena')
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error de conexión:', err));


  ////// codigo original cliente.service.ts/////

  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {
  private baseUrl = 'http://localhost:4000/api/clientes';
 
  constructor(private http: HttpClient) {}

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.http.post(this.baseUrl, cliente);
  }

  actualizarCliente(id: string, cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, cliente);
  }

  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCliente(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}


/// PARA ACCESO A RED LOCAL CON EL MOVIL///
/// ARCHIVO INDEX.JS CON IP CON ACEPTACION DE PUERTOS////

/// CONTENIDO MODIFICADO INDEX.JS  EN BACKEND/////


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const clientesRoutes = require('./routes/clientes');

const app = express();
const PORT = 4000;
const HOST = '0.0.0.0'; // <----- ¡MODIFICACIÓN CLAVE! Esto permite escuchar en todas las interfaces de red

app.use(cors());
app.use(express.json());
app.use('/api/clientes', clientesRoutes);

mongoose.connect('mongodb+srv://rubenpulido1975_db_user:nomercy1975@sena.dhckkxb.mongodb.net/gymfree?retryWrites=true&w=majority&appName=sena')
.then(() => {
console.log('Conectado a MongoDB Atlas');
 // ----------------------------------------------------
// MODIFICACIÓN EN app.listen()
// ----------------------------------------------------
app.listen(PORT, HOST, () => { //  <-----Se añade 'HOST' como segundo argumento
 console.log(`Servidor corriendo en http://${HOST}:${PORT}`); 
// Opcional: Puedes cambiar el mensaje para que muestre la IP local si la conoces
      console.log(`Ahora accesible desde tu red interna en tu IP local:${PORT}`); 
    });
  })
  .catch(err => console.error('Error de conexión:', err));


////// CONTENIDO MODIFICADO CLIENTE.SERVICE.TS EN FRONTEND /////

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {
  //private baseUrl = 'http://localhost:4000/api/clientes'; ///  <-----NOTE LA DIFERENCIA EN //ESTA LINEA CON LA QUE NO ESTA COMENTADA, LA IP CORRESPONDE ALA DIRECCION LOCAL QUE ENTREGUE //IPCONFIG

 private baseUrl = 'http://192.168.10.5:4000/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.http.post(this.baseUrl, cliente);
  }

  actualizarCliente(id: string, cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, cliente);
  }

  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCliente(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}


EL BACK SE INICIA NORMAL
PS D:\GymFreeWebFinal\gymfree-backend> node index.js
Conectado a MongoDB Atlas
Conectado a MongoDB Atlas
Servidor corriendo en http://0.0.0.0:4000
Ahora accesible desde tu red interna en tu IP local:4000
Ahora accesible desde tu red interna en tu IP local:4000

//PERO EL FRONT SE INICIA CON UNA MODICICACION INDICANDO QUE EL HOST ACEPTA CUALQUIER DISPOSITIVO DE RED LOCAL

PS D:\GymFreeWebFinal> cd gymfree-frontend
PS D:\GymFreeWebFinal\gymfree-frontend> ng serve --host 0.0.0.0 ///<--- IMPORTANTE ESTA DIRECCION