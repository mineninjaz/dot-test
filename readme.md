**Documentasi Codingan**

untuk melakukan clone github ini lakukan 

```
git clone https://github.com/mineninjaz/dot-test.git
```

setelah beberapa saat setelah di clone langsung saja untuk melakukan running, atau kalian bisa melihat documentasi penggunaan nestJS  dibagian Compile and Run the project

`npm run start:dev`

Pastikan juga [Nest] Application is running ,  setelah itu pastikan kita belajar strukturnya terlebih dahulu seperti  struktur file dibawah ini

```
src
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── main.ts
```

app.controller.ts  = untuk menerima request
app.service.ts = Business logic
app.module.ts =  tempat register module
main.ts = Entry Point 

Sekarang tujuan kita ada men set   `main.ts` & `app.controller.ts`
dan juga jgn lupa membuat folder  `└── views`  nya dan kira kira struktur folder nya akan jadi seperti ini

#Structure Folder

<img src="screenshots/struktur.png" alt="structure Folder" width="300"/>

nah setelah kita men set up  app.controller.ts & main.ts nya seperti yang ada di github dan kita sudah membuat struktur folder nya
