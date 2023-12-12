# Lucrarea individuala

&emsp;În cadrul proiectului individual, mi-am concentrat eforturile pe dezvoltarea unei aplicații web în React care permite gestionarea eficientă a taskurilor. Principalele funcționalități ale aplicației includ operațiile CRUD (Create, Read, Update, Delete) și sunt alimentate de date preluate printr-un API din MockAPI. Iată o descriere detaliată a realizărilor mele:

### **1. Pagina de Afisare a Taskurilor:**

&emsp;Am implementat o interfață vizuală intuitivă pentru a afișa lista de taskuri disponibile.
Utilizatorii pot vizualiza informații cheie despre fiecare task, cum ar fi titlu, descriere și starea curentă.

### **2. Detalii despre Taskuri:**

&emsp;Am creat o pagină dedicată pentru afișarea detaliilor extinse ale unui task selectat.
Utilizatorii pot vedea informații suplimentare, cum ar fi data creării, termenul limită și orice alte detalii relevante.

### **3. Adăugare de Taskuri:**

&emsp;Am implementat funcționalitatea de adăugare a unui nou task.
Utilizatorii pot introduce titlul, descrierea și alte informații relevante pentru a crea rapid taskuri noi.

### **4. Ștergere de Taskuri:**

&emsp;Am inclus opțiunea de ștergere a taskurilor direct din pagina principală.
Utilizatorii pot elimina taskurile care nu mai sunt relevante sau finalizate.

### **5. Pagină cu taskuri salvate:**

&emsp;Am dezvoltat o pagină specială pentru taskurile salvate ale utilizatorului.
Utilizatorii pot adăuga și gestiona taskuri in pagin **saved** pentru a le accesa rapid.

### **6. Integrare API MockAPI:**

&emsp;Am utilizat MockAPI pentru a simula interacțiunea cu un server real și pentru a gestiona datele aplicației. Datele sunt preluate și actualizate în timp real, oferind o experiență consistentă utilizatorilor.

## 1. Instrucțiuni privind instalarea și pornirea proiectului. 

### Instalarea proiectului

1. Cream proiectul cu utilizand Vite

```npm create vite@latest```

2. Ne mutam in directoriul proiectului si instalam ```npm```

```npm install```

3. Instalam alte componente de care vom avea nevoie

```npm install axios``` <br />
```npm install react-router-dom```<br />
```npm install sass```<br />
```npm install -D tailwindcss```<br />
```npm install @reduxjs/toolkit  ```<br />
```npm install react-redux ```<br />

### Pornirea proiectului

Pentru a porni proiectului avem ne voie de o comanda

```npm run dev```

Pentru a vizualiza schimbarile stilurilor live si sa se regenereze un fisier un fiser de iesire utilisam 

```npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch ```

## 2. Autorii proiectului.

Rata Daniel

## 3. Descrierea proiectului

### Scopul

&emsp;Scopul lucrării constă în implementarea unei aplicații web folosind framework-ul React, care să ofere funcționalități complete de gestionare a taskurilor. Prin intermediul operațiilor CRUD (Create, Read, Update, Delete), utilizatorii pot vizualiza, adăuga, șterge și actualiza taskuri. De asemenea, aplicația oferă o pagină specială pentru gestionarea taskurilor favorite. Datele sunt preluate și gestionate prin intermediul unui API furnizat de MockAPI. Scopul principal este de a crea o experiență utilizator intuitivă și eficientă pentru administrarea taskurilor, facilitând accesul rapid la informații detaliate și oferind o interfață plăcută de lucru.

### Rutarea

```jsx
<>
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/task/:id" element={<TaskPage/>}/>
        <Route path="/saved" element={<SavedPage/>}/>
        <Route path="/create" element={<CreateTaskPage/>}/>
    </Routes>
</>
```

### Componente create

1. Avem componenta ```header``` care este prezenta pe fiecare pagina, unde avem butonu pentru a redirectiona user-ul catre pagina principala si un buton pentru a crea un task nou.

2. Componenta ```footer``` in care este indicat autorul.

3. Componenta ```TaskList``` care afiseaza lista de taskuri.

4. Componenta ```TaskBlock``` care reprezenta un task din lista.

5.  ```SearchBar``` care reprezinta un input de tip text unde putem introduce titlul care dorim sa-l cautam in taskuri.

6. ```TaskForm``` care contine forma de creare a unui task nou.

7. ```AddButton``` reprezinta butonul catre pagina de creare.

8. ```SavedTaskList``` reprezinta componenta care afiseaza taskurile salvate.

9. ```TaskDetails``` reprezinta componenta care afiseaza toate datele despre un task.

### Pagini

1. ```CreateTaskPage``` in care se afiseaza forma creata separat ```TaskForm``` si care contine logica de introducere a datelor.

2. ```MainPage``` in care sunt afisate toate taskurile.

3. ```SavedPage``` in care sunt afisate doar taskurile salvate.

4. ```TaskPage``` in care este afisat doar un task si toate detaliile acestuia

## 5. Lista surselor utilizate

### Bibliografie 

1. [React Docs](https://legacy.reactjs.org/docs/state-and-lifecycle.html).
1. [React Router](https://reactrouter.com/en/main/route/route).
1. [Axios API](https://axios-http.com/docs/intro).
1. [Tailwind UI](https://tailwindui.com/).
1. [ChatGPT](https://chat.openai.com/).